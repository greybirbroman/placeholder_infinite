import React from 'react';
import styles from './MainPage.module.css';
import {
  Loader,
  PostsList,
  PostCard,
  PageTitle,
  ScrollToTopButton,
} from '../../components';
import paddingWrapper from '../../components/HOC/paddingWrapper';
import useHandlers from '../../utils/hooks/useHandlers';
import usePostsWithInfiniteScroll from '../../utils/hooks/usePostsWithInfiniteScroll';

const MainPage = () => {
  const { handlePageReload, handleCashReset } = useHandlers();
  const { posts, isLoading } = usePostsWithInfiniteScroll();

  const pageData = {
    title: '{JSON} Placeholder',
    subtitle: 'Добро пожаловать на страницу моего блога!',
  };

  if (isLoading) return <Loader />;

  // Или что-то красивое
  if (!posts) return <PageTitle title='Нет постов'/>;

  return (
    <div className={styles.page}>
      <PageTitle
        title={pageData.title}
        subtitle={pageData.subtitle}
        onClick={handlePageReload}
      />
      <PostsList list={posts}>
        {(post) => <PostCard post={post} onLinkClick={handleCashReset} />}
      </PostsList>
      <ScrollToTopButton />
    </div>
  );
};

export default paddingWrapper(MainPage);
