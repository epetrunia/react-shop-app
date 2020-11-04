import React from 'react';
import styles from './MenuItem.module.scss';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

function MenuItem({ title, imageUrl, large, linkUrl, history, match }) {
  const backgroundStyle = classNames(styles.menuItem, {
    [styles.large]: large,
  });
  return (
    <div
      className={backgroundStyle}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);
