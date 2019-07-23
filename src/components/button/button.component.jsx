import React from 'react';
import './button.styles.scss';

export const Button = ({ isGoogleSignIn, inverted, children, ...buttonProps }) => (
  <button
    className={`${inverted ? 'inverted ' : ''}${isGoogleSignIn ? 'google ' : ''}button`}
    {...buttonProps}
  >
    {children}
  </button >
);