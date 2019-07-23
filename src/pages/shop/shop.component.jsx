import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { selectCollectionsForPreview } from './../../redux/shop/shop.selectors';
import { CollectionPage } from '../collection/collection.component';
import { CollectionsOverview } from '../../components/collections-overview/collections-overview.component';

const ShopContainer = styled.div`
  margin-bottom: 6rem;
  min-height: 100%;
`;

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export const ShopPage = connect(mapStateToProps)(({ match }) => (
  <ShopContainer>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionName`} component={CollectionPage} />
  </ShopContainer>
));