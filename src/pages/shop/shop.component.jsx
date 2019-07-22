import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { selectCollections } from './../../redux/shop/shop.selectors';
import { CollectionsOverview } from '../../components/collections-overview/collections-overview.component';
import './shop.styles.scss';

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export const ShopPage = connect(mapStateToProps)(({ match }) => (
  <div className='shop'>
    {/* <Route exact path={`${match.path}`} component={CollectionsOverview} /> */}
    <CollectionsOverview />
  </div>
));