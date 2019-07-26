import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);


export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionName => (
  createSelector(
    [selectCollections],
    collections => collections ? collections[collectionName] : []
  )
);