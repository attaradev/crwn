import React from 'react';
import { ButtonContainer } from './button.styles';

export const Button = ({ children, type = 'button', ...buttonProps }) => (
  <ButtonContainer type={type} {...buttonProps}>
    {children}
  </ButtonContainer>
);