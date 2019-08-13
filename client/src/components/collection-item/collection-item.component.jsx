import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../button/button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { formatAsMoney } from '../../utils/cart.utils';
import {
  CollectionItemContainer,
  ImageContainer,
  Image,
  ItemFooter,
  ItemName,
  ItemPrice
} from './collection-item.styles';

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
    <CollectionItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <ItemFooter>
        <ItemName>{name}</ItemName>
        <ItemPrice>{`${formatAsMoney(price)}`}</ItemPrice>
      </ItemFooter>
      <Button
        inverted
        onClick={handleClick}
      >
        Add to cart
    </Button>
    </CollectionItemContainer>
  )
});