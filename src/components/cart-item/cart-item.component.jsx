import React from 'react'
import './cart-item.styles.scss';
import { formatAsMoney } from '../../utils/cart.utils';


export const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt={name} />
    <div className='item-details'>
      <span className='name'>
        {name}
      </span>
      <span className='price'>
        {quantity} x {formatAsMoney(price)}
      </span>
    </div>
  </div>
);