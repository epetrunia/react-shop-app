import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import styles from './CartIcon.module.scss';
import { ReactComponent as BagIcon } from './../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/actions';
import { selectCartItemsCount } from './../../redux/cart/selectors';

function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <div className={styles.container} onClick={toggleCartHidden}>
      <BagIcon className={styles.bagIcon} />
      <span className={styles.count}>{itemCount}</span>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
