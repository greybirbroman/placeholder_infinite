import React, { useState, useEffect } from 'react';

import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  useGetPostsQuery,
  useGetPostsTotalCountQuery,

} from '../../features/posts/postsSlice';


const usePostsWithInfiniteScroll = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get('page');

  const initialPage = pageParam ? parseInt(pageParam, 10) : 1;
  const [page, setPage] = useState(initialPage);

  const { data, isLoading, isFetching } = useGetPostsQuery(page);
  const { data: total } = useGetPostsTotalCountQuery();
  const navigate = useNavigate();
 

  const posts = data ?? [];

  const isScrollToBottom = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    return scrollHeight - (scrollTop + clientHeight) < 100;
  };

  //   const resetSearchParams = () => {
  //     setPage(initialPage)
  //   };

  //   useEffect(() => {
  //         resetSearchParams(); 
  //   }, []);

  useEffect(() => {
    // Функция для обновления параметров запроса URL
    const updatePageInUrl = (newPage) => {
      setSearchParams({ page: newPage });
      navigate(`/?page=${newPage}`);
    };

    const onScroll = () => {
      if (isScrollToBottom() && !isFetching) {
        console.log('Fetch more');
        const newPage = page + 1;

        if (newPage <= Math.ceil(total / 10)) {
          // Проверка на максимальное значение страницы
          setTimeout(() => {
            setPage(newPage);
            updatePageInUrl(newPage)
          }, 0);
        }
      }
    };

    document.addEventListener('scroll', onScroll);

    return function () {
      document.removeEventListener('scroll', onScroll);
    };
  }, [page, isFetching, total, navigate, setSearchParams]);

  return {
    posts,
    isLoading,
  };
};

export default usePostsWithInfiniteScroll;
