import React from 'react';
import styles from './CollectionItem.module.scss';

import CustomButton from './../CustomButton';

function CollectionItem({ name, price, imageUrl }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}$</span>
      </div>
      <div className={styles.btn}>
        <CustomButton inverted>add to cart</CustomButton>
      </div>
    </div>
  );
}

export default CollectionItem;
