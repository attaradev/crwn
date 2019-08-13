import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectItemsInCartCount } from '../../redux/cart/cart.selectors';
import { CartContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles';


const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectItemsInCartCount
});

export const CartIcon = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ toggleCartHidden, itemCount }) => (
  <CartContainer onClick={toggleCartHidden} >
    <ShoppingIcon />
    <ItemCountContainer> {itemCount} </ItemCountContainer>
  </CartContainer>
));