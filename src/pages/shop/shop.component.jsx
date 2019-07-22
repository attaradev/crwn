import React from 'react';
import { connect } from 'react-redux';
import { selectCollections } from './../../redux/shop/shop.selectors';
import { CollectionsOverview } from '../../components/collections-overview/collections-overview.component';
import './shop.styles.scss';

const mapStateToProps = state => ({
  collections: selectCollections(state)
})

export const ShopPage = connect(mapStateToProps)(({ collections }) => (
  <div className='shop'>
    <CollectionsOverview />
  </div>
));