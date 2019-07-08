import React from 'react';
import { collections } from '../../data';


export class ShopPage extends React.Component {
  state = { collections }

  render() {
    return (
      <div>
        <h1>Shop</h1>
      </div>
    );
  }
}