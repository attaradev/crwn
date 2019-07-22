import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { Button } from '../button/button.component';
import { CartItem } from '../cart-item/cart-item.component';
import { selectItemsInCart } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss';


const mapStateToProps = createStructuredSelector({
  itemsInCart: selectItemsInCart
});


export const CartDropdown = withRouter(
  connect(
    mapStateToProps
  )(({ itemsInCart, history, dispatch }) => {
    const handleClick = () => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    };

    return (
      <div className='cart-dropdown' >
        <div className='cart-items'>
          {
            itemsInCart.length !== 0
              ? itemsInCart.map(itemInCart => <CartItem key={itemInCart.id} item={itemInCart} />)
              : <span className='empty-cart'>Your cart is empty.</span>
          }
        </div>
        <Button
          onClick={handleClick}
        >Go to checkout</Button>
      </div>)
  }));
