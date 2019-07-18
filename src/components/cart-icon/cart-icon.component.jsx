import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Cart } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export const CartIcon = connect(
  null,
  mapDispatchToProps
)(({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden} >
    <Cart className='cart' />
    <span className='item-count'> 0 </span>
  </div>
));