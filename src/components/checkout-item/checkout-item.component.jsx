import React from 'react';
import { formatAsMoney } from '../../utils/cart.utils';
import {
  CheckoutItemContainer,
  ImageContainer,
  ItemName,
  ItemQuantity,
  ItemPrice,
  Arrow,
  Value,
  RemoveButton
} from './checkout-item.styles';


export const CheckoutItem = ({ item, handleDelete, handleIncrease, handleDecrease }) => {
  const { name, imageUrl, price, quantity } = item;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <ItemName>{name}</ItemName>
      <ItemQuantity>
        <Arrow onClick={() => handleDecrease(item)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => handleIncrease(item)}>&#10095;</Arrow>
      </ItemQuantity>
      <ItemPrice>
        {
          formatAsMoney(price)
        }
      </ItemPrice>
      <RemoveButton onClick={() => handleDelete(item)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
};