import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectItemsInCart, selectCartTotal } from '../../redux/cart/cart.selectors';
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component';
import { removeItemFromCart } from '../../redux/cart/cart.actions';
import './checkout.styles.scss';

const mapStateToProps = createStructuredSelector({
  itemsInCart: selectItemsInCart,
  cartTotal: selectCartTotal
});

export const CheckoutPage = connect(
  mapStateToProps
)(({ itemsInCart, cartTotal, dispatch }) => {
  const deleteItem = item => {
    dispatch(removeItemFromCart(item));
  }

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
        <CheckoutItem key={cartItem.id} item={cartItem} handleDelete={deleteItem} />
      ))}
      <div className='total'>TOTAL: {cartTotal}</div>
    </div>
  )
});