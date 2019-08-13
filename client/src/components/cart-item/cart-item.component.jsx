import React from 'react'
import { formatAsMoney } from '../../utils/cart.utils';
import {
  CartItemContainer,
  ItemImage,
  ItemsDetails,
  ItemName,
  ItemPrice
} from './cart-item.styles';


export const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <CartItemContainer>
    <ItemImage src={imageUrl} alt={name} />
    <ItemsDetails>
      <ItemName>
        {name}
      </ItemName>
      <ItemPrice>
        {quantity} x {formatAsMoney(price)}
      </ItemPrice>
    </ItemsDetails>
  </CartItemContainer>
);