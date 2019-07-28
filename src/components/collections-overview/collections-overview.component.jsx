import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { CollectionsPreview } from '../collections-preview/collections-preview.component';


const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionsOverview = connect(mapStateToProps)(
  ({ collections }) => (
    <CollectionsOverviewContainer>
      {
        collections.map(
          ({ id, title, items }) => <CollectionsPreview
            key={id}
            title={title}
            items={items}
          />
        )
      }
    </CollectionsOverviewContainer>
  )
);