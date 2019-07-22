import React from 'react';

import './checkout-item.styles.scss';
import { formatAsMoney } from '../../utils/cart.utils';

export const CheckoutItem = ({ item, handleDelete, handleIncrease, handleDecrease }) => {
  const { name, imageUrl, price, quantity } = item;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span className='arrow' onClick={() => handleDecrease(item)}>&#10094;</span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={() => handleIncrease(item)}>&#10095;</span>
      </span>
      <span className='price'>
        {
          formatAsMoney(price)
        }
      </span>
      <div className='remove-button' onClick={() => handleDelete(item)}>&#10005;</div>
    </div>
  )
};