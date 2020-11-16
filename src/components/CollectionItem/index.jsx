import React from 'react';
import { connect } from 'react-redux';
import styles from './CollectionItem.module.scss';

import CustomButton from './../CustomButton';
import { addItem } from '../../redux/cart/actions';

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;
  return (
    <div className={styles.container}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}$</span>
      </div>
      <div className={styles.btn}>
        <CustomButton inverted onClick={() => addItem(item)}>
          add to cart
        </CustomButton>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
