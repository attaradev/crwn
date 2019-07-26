import React from 'react';
import { connect } from 'react-redux';
import { CollectionItem } from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionContainer, CollectionItems, CollectionTitle } from './collection.styles';

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionName)(state)
})


export const CollectionPage = connect(mapStateToProps)(
  ({ collection: { title, items } }) => (
    <CollectionContainer>
      <CollectionTitle as='h2'>{title}</CollectionTitle>
      <CollectionItems>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </CollectionItems>
    </CollectionContainer>
  )
);