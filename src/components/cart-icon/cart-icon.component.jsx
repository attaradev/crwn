import React from 'react';
import { ReactComponent as Cart } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

export const CartIcon = () => (
  <div className='cart-icon' >
    <Cart className='cart' />
    <span className='item-count'> 0 </span>
  </div>
);