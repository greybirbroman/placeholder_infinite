import { apiSlice } from '../api/apiSlice';

const POSTS = 'posts';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (page) => `${POSTS}?_page=${page}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getPostById: builder.query({
      query: (id) => `${POSTS}/${id}`,
    }),
    getPostsTotalCount: builder.query({
      query: () => `${POSTS}?_page=1`,
      transformResponse: async (_, meta) => {
        const total = meta.response.headers.get('x-total-count');
        return total;
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetPostsTotalCountQuery,
  useLazyGetPostsQuery
} = extendedApiSlice;
