import React from 'react';
import { connect } from 'react-redux';
import styles from './CartIcon.module.scss';
import { ReactComponent as BagIcon } from './../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/actions';

function CartIcon({ toggleCartHidden }) {
  return (
    <div className={styles.container} onClick={toggleCartHidden}>
      <BagIcon className={styles.bagIcon} />
      <span className={styles.count}>0</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
