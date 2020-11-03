import React from 'react';
import styles from './MenuItem.module.scss';
import classNames from 'classnames';

function MenuItem({ title, imageUrl, large }) {
  const backgroundClass = classNames(styles.menuItem, {
    [styles.large]: large,
  });
  return (
    <div
      className={backgroundClass}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.subtitle}>Shop Now</span>
      </div>
    </div>
  );
}

export default MenuItem;
