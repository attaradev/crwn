import React from 'react';
import { Button } from './../button/button.component';
import './cart-dropdown.styles.scss';

export const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <Button>Go to checkout</Button>
  </div>
);
