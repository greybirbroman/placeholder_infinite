import { useNavigate } from 'react-router-dom';
import { apiSlice } from '../../features/api/apiSlice';
import { useDispatch } from 'react-redux';

const useHandlers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handlePageReload = () => {
     window.location.reload();
  };

  const handleCashReset = () => {
    dispatch(apiSlice.util.resetApiState());
  }

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
    handleCashReset
  };
};

export default useHandlers;
