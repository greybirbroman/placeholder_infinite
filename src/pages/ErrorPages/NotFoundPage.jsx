import ErrorPage from './ErrorPage';

const NotFoundPage = () => {
  const pageData = {
    title: '404.',
    subtitle: 'Упс! Такая страница не существует',
  };
  return <ErrorPage title={pageData.title} subtitle={pageData.subtitle} />;
};

export default NotFoundPage;
