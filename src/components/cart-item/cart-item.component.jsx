import React from 'react'
import './cart-item.styles.scss';


export const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <div className='cart-item'>
    <div className='image'>
      <img src={imageUrl} alt={name} />
    </div>
    <div className='item-details'>
      <span className='name'>
        {name}
      </span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);