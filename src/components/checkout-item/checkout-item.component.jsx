import React from 'react';

import './checkout-item.styles.scss';
import { formatAsMoney } from '../../utils/cart.utils';

export const CheckoutItem = ({ item, handleDelete }) => {
  const { name, imageUrl, price, quantity } = item;

  const handleClick = () => {
    handleDelete(item);
  }

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span className='arrow'>&#10094;</span>
        {quantity}
        <span className='arrow'>&#10095;</span>
      </span>
      <span className='price'>
        {
          formatAsMoney(price)
        }
      </span>
      <div className='remove-button' onClick={handleClick}>&#10005;</div>
    </div>
  )
};