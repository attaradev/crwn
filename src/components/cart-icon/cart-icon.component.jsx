import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Cart } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectItemsInCartCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';


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
  <div className='cart-icon' onClick={toggleCartHidden} >
    <Cart className='cart' />
    <span className='item-count'> {itemCount} </span>
  </div>
));