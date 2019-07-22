import React from 'react';
import { createStructuredSelectors } from 'reselect';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { CollectionsPreview } from '../collections-preview/collections-preview.component';
import './collections-overview.styles.scss';

const mapStateToProps = createStructuredSelectors({
  collections: selectCollections
});

export const collectionsOverview = connect(mapStateToProps)(
  ({ collections, ...collectionProps }) => (
    <div className='collections-overview'>
      {
        collections.map(collection => <CollectionsPreview key={collection.id} {...collectionProps} />)
      }
    </div>
  )
);