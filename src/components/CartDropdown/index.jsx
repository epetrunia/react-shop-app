import React from 'react';
import { connect } from 'react-redux';

import styles from './CartDropdown.module.scss';
import { selectCartItems } from './../../redux/cart/selectors';

import CustomButton from './../CustomButton';
import CartItem from './../CartItem';

function CartDropdown({ items }) {
  return (
    <div className={styles.container}>
      <div>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>go to checkout</CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
