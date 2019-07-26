import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { firestore, convertCollectionsSnapshotToMap } from '../../utils/firebase.utils';
import { CollectionPage } from '../collection/collection.component';
import { CollectionsOverview } from '../../components/collections-overview/collections-overview.component';
import { updateCollections } from '../../redux/shop/shop.actions';

const ShopContainer = styled.div`
  margin-bottom: 6rem;
  min-height: 100%;
`;

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections))
});

export const ShopPage = connect(
  null,
  mapDispatchToProps
)(({ match, updateCollections }) => {
  React.useEffect(() => {
    const collectionReference = firestore.collection('collections');

    collectionReference.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  });

  return (
    <ShopContainer>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionName`} component={CollectionPage} />
    </ShopContainer>
  )
});