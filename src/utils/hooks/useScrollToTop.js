import React, { useState, useEffect } from 'react';

const useScrollToTop = (scrollHeight) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollHeight) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollHeight]);

  return {
    showScrollButton,
  };
};

export default useScrollToTop;
