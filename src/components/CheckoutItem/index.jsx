import React from 'react';
import { connect } from 'react-redux';

import styles from './CheckoutItem.module.scss';
import { decreaseItem, removeItem, addItem } from './../../redux/cart/actions';

function CheckoutItem({ cartItem, removeItem, decreaseItem, addItem }) {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={name} />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>
        <div className={styles.arrow} onClick={() => decreaseItem(cartItem)}>
          &#10094;
        </div>
        <span className={styles.value}>{quantity}</span>
        <div className={styles.arrow} onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className={styles.price}>{price}$</span>
      <div className={styles.removeBtn} onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
