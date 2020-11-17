import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import styles from './CartDropdown.module.scss';
import { selectCartItems } from './../../redux/cart/selectors';
import { toggleCartHidden } from './../../redux/cart/actions';

import CustomButton from './../CustomButton';
import CartItem from './../CartItem';

function CartDropdown({ items, history, dispatch }) {
  return (
    <div className={styles.container}>
      <div>
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className={styles.text}>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        go to checkout
      </CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
