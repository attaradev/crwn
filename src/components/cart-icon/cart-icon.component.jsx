import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Cart } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { itemsInCart } }) => ({
  itemCount: itemsInCart.length
});

export const CartIcon = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden} >
    <Cart className='cart' />
    <span className='item-count'> {itemCount} </span>
  </div>
));