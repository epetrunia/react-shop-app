import React from 'react';
import style from './CartItem.module.scss';

function CartItem({ item: { name, price, quantity, imageUrl } }) {
  return (
    <div className={style.container}>
      <img src={imageUrl} alt={name} />
      <div className={style.description}>
        <span className={style.name}>{name}</span>
        <span>
          {quantity} x {price}$
        </span>
      </div>
    </div>
  );
}

export default CartItem;
