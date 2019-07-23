import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component';
import { StripeCheckoutButton } from '../../components/stripe-button/stripe-button.component';
import { selectItemsInCart, selectCartTotal } from '../../redux/cart/cart.selectors';
import { removeItemFromCart, decreaseItem, increaseItem } from '../../redux/cart/cart.actions';
import { formatAsMoney } from '../../utils/cart.utils';
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalBlock,
  WarningText
} from './checkout.styles';


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
)(({
  itemsInCart,
  cartTotal,
  removeItemFromCart,
  increaseItem,
  decreaseItem
}) => (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {itemsInCart.map(cartItem => (
        <CheckoutItem
          key={cartItem.id}
          item={cartItem}
          handleDelete={removeItemFromCart}
          handleIncrease={increaseItem}
          handleDecrease={decreaseItem}
        />
      ))}
      <TotalBlock>TOTAL: {formatAsMoney(cartTotal)}</TotalBlock>
      <WarningText>
        **Please use the following test credit card for checkout.
      <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningText>
      <StripeCheckoutButton price={cartTotal} />
    </CheckoutContainer>
  ));