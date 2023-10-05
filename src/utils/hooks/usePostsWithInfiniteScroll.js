import React, { useState, useEffect } from 'react';

import {
  useGetPostsQuery,
  useGetPostsTotalCountQuery,
} from '../../features/posts/postsSlice';


const usePostsWithInfiniteScroll = () => {

  const [page, setPage] = useState(1);
  const { data: total } = useGetPostsTotalCountQuery();
  const { data, isLoading, isFetching } = useGetPostsQuery(page)

  const posts = data ?? [];

  const isScrollToBottom = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    return scrollHeight - (scrollTop + clientHeight) < 100;
  };


  useEffect(() => {
    const onScroll = () => {
      if (isScrollToBottom() && !isFetching) {
        const newPage = page + 1;
        if (newPage <= Math.ceil(total / 10)) {
          // Если постов больше нет - не отправляем запрос
            setPage(newPage);
        }
      }
    }
    document.addEventListener('scroll', onScroll);

    return function () {
      document.removeEventListener('scroll', onScroll);
    };
  }, [page, isFetching, total]);

  return {
    posts,
    isLoading,
  };
};

export default usePostsWithInfiniteScroll;
