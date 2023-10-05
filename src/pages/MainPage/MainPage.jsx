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
  const { handlePageReload } = useHandlers();
  const { posts, isLoading } = usePostsWithInfiniteScroll();

  const pageData = {
    title: '{JSON} Placeholder',
    subtitle: 'Добро пожаловать на страницу моего блога!',
  };

  if (isLoading) return <Loader />;

  if (!posts) return <div>no posts</div>;

  return (
    <div className={styles.page}>
      <PageTitle
        title={pageData.title}
        subtitle={pageData.subtitle}
        onClick={handlePageReload}
      />
      <PostsList list={posts}>{(post) => <PostCard post={post} />}</PostsList>
      <ScrollToTopButton />
    </div>
  );
};

export default paddingWrapper(MainPage);
