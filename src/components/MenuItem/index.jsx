import React from 'react';
import styles from './MenuItem.module.scss';
import classNames from 'classnames';

function MenuItem({ title, imageUrl, large }) {
  const backgroundStyle = classNames(styles.menuItem, {
    [styles.large]: large,
  });
  return (
    <div className={backgroundStyle}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <span className={styles.subtitle}>Shop Now</span>
      </div>
    </div>
  );
}

export default MenuItem;
