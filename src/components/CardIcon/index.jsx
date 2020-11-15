import React from 'react';
import styles from './CardIcon.module.scss';
import { ReactComponent as BagIcon } from './../../assets/shopping-bag.svg';

function CartIcon() {
  return (
    <div className={styles.container}>
      <BagIcon className={styles.bagIcon} />
      <span className={styles.count}>0</span>
    </div>
  );
}

export default CartIcon;
