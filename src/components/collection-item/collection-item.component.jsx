import React from 'react';
import './collection-item.styles.scss';

export const CollectionItem = ({ name, imageUrl, price }) => (
  <div className='collection-item'>
    <div className='image'>
      <img src={imageUrl} alt={name} />
    </div>
    <div className='item-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);