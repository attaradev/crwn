import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { CollectionsPreview } from '../collections-preview/collections-preview.component';
import './collections-overview.styles.scss';

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export const CollectionsOverview = connect(mapStateToProps)(
  ({ collections }) => (
    <div className='collections-overview'>
      {
        collections.map(collection => <CollectionsPreview key={collection.id} title={collection.title} items={collection.items} />)
      }
    </div>
  )
);