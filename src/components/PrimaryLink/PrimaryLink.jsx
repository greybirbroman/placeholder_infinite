import React from 'react';
import styles from './PrimaryLink.module.css';
import { Link } from 'react-router-dom';

const PrimaryLink = ({ title, to, customClass, align }) => {
  return (
    <Link className={`${styles.link} ${customClass}`} to={to} style={{alignSelf: align}}>
      {title}
    </Link>
  );
};

export default PrimaryLink;
