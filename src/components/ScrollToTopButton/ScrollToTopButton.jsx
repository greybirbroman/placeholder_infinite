import styles from './ScrollToTopButton.module.css';
import useScrollToTop from '../../utils/hooks/useScrollToTop';
import useHandlers from '../../utils/hooks/useHandlers';

const ScrollToTopButton = () => {
  const { showScrollButton } = useScrollToTop(1000);
  const { handleScrollToTop } = useHandlers();

  return (
    <div className={styles.container}>
      <button
        type='button'
        className={`${styles.button} ${showScrollButton ? styles.visible : ''}`}
        onClick={handleScrollToTop}
      />
     </div>
  );
};

export default ScrollToTopButton;
