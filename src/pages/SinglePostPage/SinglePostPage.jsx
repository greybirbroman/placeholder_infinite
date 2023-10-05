import React from 'react';
import styles from './SinglePostPage.module.css';
import { useGetPostByIdQuery } from '../../features/posts/postsSlice';
import { Loader, PostCard, PageTitle, PrimaryButton } from '../../components';
import paddingWrapper from '../../components/HOC/paddingWrapper';
import useHandlers from '../../utils/hooks/useHandlers';

import { useParams } from 'react-router-dom';

const SinglePostPage = () => {
  const { id } = useParams();
  const { handleGoBack } = useHandlers();
  const { data: post, isLoading } = useGetPostByIdQuery(id);

  const pageData = {
    title: '{JSON} Placeholder',
    subtitle: `Добро пожаловать на страницу с блогом №${id}`,
  };

  if (isLoading) return <Loader />;

  return (
    <div className={styles.page}>
      <PageTitle title={pageData.title} subtitle={pageData.subtitle} />
      <PostCard post={post} variant='fullsize' />
      <PrimaryButton title='Назад' align='end' onClick={handleGoBack} />
    </div>
  );
};

export default paddingWrapper(SinglePostPage);
