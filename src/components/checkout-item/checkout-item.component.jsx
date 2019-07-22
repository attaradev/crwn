import React from 'react';

import './checkout-item.styles.scss';

export const CheckoutItem = ({ id, name, imageUrl, price, quantity }) => (
  <tr>
    <td>
      <img src={imageUrl} alt={name} />
    </td>
    <td>{name}</td>
    <td>{quantity}</td>
    <td>{price}</td>
    <td>
      <span>&#10006;</span>
    </td>
  </tr>
)