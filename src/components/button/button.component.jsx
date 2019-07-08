import React from 'react';
import './button.styles.scss';

export const Button = ({ isGoogleBtn = false, children, ...buttonProps }) => (
  <button className={`${isGoogleBtn ? 'google ' : ''}button`} {...buttonProps}>
    {children}
  </button >
);