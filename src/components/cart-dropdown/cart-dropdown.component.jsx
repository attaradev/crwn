import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button } from '../button/button.component';
import { CartItem } from '../cart-item/cart-item.component';
import { selectItemsInCart } from '../../redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';


const mapStateToProps = createStructuredSelector({
  itemsInCart: selectItemsInCart
});


export const CartDropdown = connect(
  mapStateToProps
)(({ itemsInCart }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        itemsInCart.length !== 0
          ? itemsInCart.map(itemInCart => <CartItem key={itemInCart.id} item={itemInCart} />)
          : <span className='empty-cart'>Your cart is empty.</span>
      }
    </div>
    <Button>Go to checkout</Button>
  </div>
));
