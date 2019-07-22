import React from 'react';
import { connect } from 'react-redux';
import { selectCollections } from './../../redux/shop/shop.selectors';
import { CollectionsPreview } from '../../components/collections-preview/collections-preview.component';
import './shop.styles.scss';

const mapStateToProps = state => ({
  collections: selectCollections(state)
})

export const ShopPage = connect(mapStateToProps)(({ collections }) => (
  <div className='shop'>
    {collections.map(({ id, ...collectionProps }) => <CollectionsPreview key={id} {...collectionProps} />)}
  </div>
));