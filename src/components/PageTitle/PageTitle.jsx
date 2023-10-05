import React from 'react';
import styles from './PageTitle.module.css'

const PageTitle = ({ title, subtitle, onClick }) => {
  return (
    <div className={styles.container}>
      <h1 onClick={onClick} className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

export default PageTitle;
