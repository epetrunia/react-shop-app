import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from './../../components/CheckoutItem';
import StripeButton from './../../components/StripeButton';

import styles from './Checkout.module.scss';
import {
  selectCartItems,
  selectCartItemsTotal,
} from './../../redux/cart/selectors';

function Checkout({ cartItems, total }) {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.block}>
          <span>Product</span>
        </div>
        <div className={styles.block}>
          <span>Description</span>
        </div>
        <div className={styles.block}>
          <span>Quantity</span>
        </div>
        <div className={styles.block}>
          <span>Price</span>
        </div>
        <div className={styles.block}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className={styles.total}>
        <span>Total: {total}$</span>
      </div>
      <div className={styles.warning}>
        Please use the following test credit card for payments
        <br />
        Card number: 5555 5555 5555 4444, exp: 01/23, CVV: 123
      </div>
      <StripeButton price={total} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(Checkout);
