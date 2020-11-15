import React from 'react';

import styles from './CartDropdown.module.scss';
import CustomButton from './../CustomButton';

function CartDropdown() {
  return (
    <div className={styles.container}>
      <div />
      <CustomButton>go to checkout</CustomButton>
    </div>
  );
}

export default CartDropdown;
