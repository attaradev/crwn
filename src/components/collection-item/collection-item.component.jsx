import React from 'react';
import { connect } from 'react-redux';
import { Button } from './../button/button.component';
import { addItemToCart } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
});

export const CollectionItem = connect(
  null,
  mapDispatchToProps
)(({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;

  const handleClick = () => addItemToCart(item);
  return (
    <div className='collection-item'>
      <div className='image'>
        <img src={imageUrl} alt={name} />
      </div>
      <div className='item-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{`$${price}`}</span>
      </div>
      <Button
        inverted
        onClick={handleClick}
      >
        Add to cart
    </Button>
    </div>
  )
});