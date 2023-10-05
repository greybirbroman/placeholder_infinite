import React from 'react';
import styles from './PostsList.module.css';

const PostsList = ({ list, children }) => {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <li key={item.id}>{children(item)}</li>
      ))}
    </ul>
  );
};

export default PostsList;
