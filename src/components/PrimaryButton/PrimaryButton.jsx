import React from 'react';
import styles from './PrimaryButton.module.css';

const PrimaryButton = ({ title, type, disabled, onClick, customClass, align }) => {
  return (
    <button
      className={`${styles.button} ${customClass}`}
      type={type || 'button'}
      disabled={disabled}
      onClick={onClick}
      style={{alignSelf: align}}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
