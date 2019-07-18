import React from 'react';
import './button.styles.scss';

export const Button = ({ isGoogleBtn, inverted, children, ...buttonProps }) => (
  <button className={`${inverted ? 'inverted' : ''} ${isGoogleBtn ? 'google ' : ''}button`} {...buttonProps}>
    {children}
  </button >
);