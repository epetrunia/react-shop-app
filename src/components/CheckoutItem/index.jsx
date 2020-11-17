import React from 'react';
import styles from './CheckoutItem.module.scss';

function CheckoutItem({ cartItem: { name, price, quantity, imageUrl } }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={name} />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>{quantity}</span>
      <span className={styles.price}>{price}$</span>
      <div className={styles.removeBtn}>&#10005;</div>
    </div>
  );
}

export default CheckoutItem;
