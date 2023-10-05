import { useNavigate } from 'react-router-dom';

const useHandlers = () => {
  const navigate = useNavigate();

  const handlePageReload = () => {
    navigate(`/?page=${1}`);
    window.location.reload();
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return {
    handlePageReload,
    handleGoBack,
    handleScrollToTop,
  };
};

export default useHandlers;
