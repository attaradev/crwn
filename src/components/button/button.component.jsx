import React from 'react';
import './button.styles.scss';

export const Button = ({ children, ...buttonProps }) => (
  <button className='button' {...buttonProps}>
    {children}
  </button>
);