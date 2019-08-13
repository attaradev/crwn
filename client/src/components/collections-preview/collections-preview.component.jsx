import React from 'react';
import { CollectionItem } from '../collection-item/collection-item.component';
import {
  CollectionsPreviewContainer,
  PreviewTitle,
  PreviewContainer
} from './collections-preview.styles';

export const CollectionsPreview = ({ title, items }) => (
  <CollectionsPreviewContainer>
    <PreviewTitle as='h1'>{title}</PreviewTitle>
    <PreviewContainer>
      {
        items
          .filter((item, idx) => idx < 4)
          .map((item) => <CollectionItem key={item.id} item={item} />)}
    </PreviewContainer>
  </CollectionsPreviewContainer>
);