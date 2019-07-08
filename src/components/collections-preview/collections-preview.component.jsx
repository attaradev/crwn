import React from 'react';
import './collections-preview.scss';
import { CollectionItem } from '../collection-item/collection-item.component';

export const CollectionsPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...collectionsPreviewProps }) => <CollectionItem key={id} {...collectionsPreviewProps} />)}
    </div>
  </div>
);