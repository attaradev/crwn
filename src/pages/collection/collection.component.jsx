import React from 'react';
import { CollectionItem } from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';


export const CollectionPage = ({ match }) => {
  const { collectionName } = match.params;

  return (
    <div className='category'>
      <h2>Category</h2>
    </div>
  )
};