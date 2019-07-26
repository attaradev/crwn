import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { firestore, convertCollectionsSnapshotToMap } from '../../utils/firebase.utils';
import { CollectionPage } from '../collection/collection.component';
import { CollectionsOverview } from '../../components/collections-overview/collections-overview.component';
import { WithSpinner } from '../../components/with-spinner/with-spinner.component';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


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
)(
  ({ match, updateCollections }) => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      const collectionReference = firestore.collection('collections');

      collectionReference.onSnapshot(async snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        setLoading(false);
      });
    });

    return (
      <ShopContainer>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner loading={loading} {...props} />} />
        <Route path={`${match.path}/:collectionName`} render={(props) => <CollectionPageWithSpinner loading={loading} {...props} />} />
      </ShopContainer>
    )
  }
);