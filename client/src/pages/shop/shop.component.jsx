import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { CollectionsOverviewWithSpinner } from '../../containers/collections-overview-with-spinner/collections-overview-with-spinner.container';
import { CollectionWithSpinner } from '../../containers/collection-with-spinner/collection-with-spinner.container';
import { fetchCollections } from '../../redux/shop/shop.actions';



const ShopContainer = styled.div`
  margin-bottom: 6rem;
  min-height: 100%;
`;


const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections())
});

export const ShopPage = connect(
  null,
  mapDispatchToProps
)(
  ({ match, fetchCollections }) => {
    React.useEffect(() => {
      fetchCollections();
    }, [fetchCollections]);

    return (
      <ShopContainer>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewWithSpinner}
        />
        <Route
          path={`${match.path}/:collectionName`}
          component={CollectionWithSpinner}
        />
      </ShopContainer>
    )
  }
);