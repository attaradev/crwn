import React from 'react';
import { ButtonContainer } from './button.styles';

export const Button = ({ children, ...buttonProps }) => (
  <ButtonContainer {...buttonProps}>
    {children}
  </ButtonContainer>
);