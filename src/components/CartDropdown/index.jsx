import React from 'react';
import { connect } from 'react-redux';

import styles from './CartDropdown.module.scss';
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

const mapStateToProps = ({ cart: { items } }) => ({
  items,
});

export default connect(mapStateToProps)(CartDropdown);
