import React from 'react';
import { connect } from 'react-redux';
import { Button } from './../button/button.component';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export const CollectionItem = connect(
  null,
  mapDispatchToProps
)(({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  const handleClick = () => addItem(item);
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