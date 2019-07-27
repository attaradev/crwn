import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { CollectionPage } from '../collection/collection.component';
import { CollectionsOverview } from '../../components/collections-overview/collections-overview.component';
import { WithSpinner } from '../../components/with-spinner/with-spinner.component';
import { selectIsFetching } from '../../redux/shop/shop.selectors';
import { fetchCollectionsAsync } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


const ShopContainer = styled.div`
  margin-bottom: 6rem;
  min-height: 100%;
`;

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
});

export const ShopPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  ({ match, isFetching, fetchCollectionsAsync }) => {
    React.useEffect(() => {
      fetchCollectionsAsync();
    }, [fetchCollectionsAsync]);

    return (
      <ShopContainer>
        <Route
          exact
          path={`${match.path}`}
          render={
            (props) => <CollectionsOverviewWithSpinner
              isLoading={isFetching}
              {...props}
            />
          }
        />
        <Route
          path={`${match.path}/:collectionName`}
          render={(props) => <CollectionPageWithSpinner
            isLoading={isFetching}
            {...props}
          />}
        />
      </ShopContainer>
    )
  }
);