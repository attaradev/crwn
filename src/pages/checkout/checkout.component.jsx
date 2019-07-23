import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component';
import { StripeCheckoutButton } from '../../components/stripe-button/stripe-button.component';
import { selectItemsInCart, selectCartTotal } from '../../redux/cart/cart.selectors';
import { removeItemFromCart, decreaseItem, increaseItem } from '../../redux/cart/cart.actions';
import { formatAsMoney } from '../../utils/cart.utils';
import './checkout.styles.scss';


const mapStateToProps = createStructuredSelector({
  itemsInCart: selectItemsInCart,
  cartTotal: selectCartTotal
});

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: item => dispatch(removeItemFromCart(item)),
  decreaseItem: item => dispatch(decreaseItem(item)),
  increaseItem: item => dispatch(increaseItem(item))
})

export const CheckoutPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ itemsInCart, cartTotal, removeItemFromCart, increaseItem, decreaseItem }) => (
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
      <CheckoutItem
        key={cartItem.id}
        item={cartItem}
        handleDelete={removeItemFromCart}
        handleIncrease={increaseItem}
        handleDecrease={decreaseItem}
      />
    ))}
    <div className='total'>TOTAL: {formatAsMoney(cartTotal)}</div>
    <div className='test-warning'>
      **Please use the following test credit card for checkout.
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <StripeCheckoutButton price={cartTotal} />
  </div>
));