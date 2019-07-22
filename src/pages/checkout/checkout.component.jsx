import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectItemsInCart, selectCartTotal } from '../../redux/cart/cart.selectors';
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';

const mapStateToProps = createStructuredSelector({
  itemsInCart: selectItemsInCart,
  cartTotal: selectCartTotal
});

export const CheckoutPage = connect(
  mapStateToProps
)(({ itemsInCart, cartTotal }) => {
  return (
    <div className='checkout'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {itemsInCart.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: {cartTotal}</div>
    </div>
  )
});