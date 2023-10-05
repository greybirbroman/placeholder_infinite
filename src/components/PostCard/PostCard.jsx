import React from 'react';
import styles from './PostCard.module.css';
import { POSTS } from '../../router';
import PrimaryLink from '../PrimaryLink/PrimaryLink';

const PostCard = ({ post, variant, onLinkClick }) => {
  const { id, title, body } = post;

  const FULL_SIZE = 'fullsize';

  const dynamicClassRender = () => {
    if (variant === FULL_SIZE) {
      return styles.card__body_full;
    } else {
      return styles.card__body;
    }
  };

  return (
    <article className={styles.card}>
      <div className={styles.container}>
        <span className={styles.card__nubmer}>{id}</span>
        <h3 className={styles.card__title}>{title}</h3>
      </div>
      <p className={dynamicClassRender()}>{body}</p>
      {variant !== FULL_SIZE && (
        <PrimaryLink
          to={`/${POSTS}/${id}`}
          title='Просмотр'
          align='end'
          onClick={onLinkClick}
        />
      )}
    </article>
  );
};

export default PostCard;
