import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../button/button.component';
import { CartItem } from '../cart-item/cart-item.component';
import { selectItemsInCartCount } from '../../redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';


const mapStateToProps = state => ({
  itemsInCart: selectItemsInCartCount(state)
});


export const CartDropdown = connect(
  mapStateToProps
)(({ itemsInCart }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {itemsInCart.map(itemInCart => <CartItem key={itemInCart.id} item={itemInCart} />)}
    </div>
    <Button>Go to checkout</Button>
  </div>
));
