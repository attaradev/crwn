export const ShopTypes = {
  FETCH_COLLECTIONS: 'FETCH_COLLECTIONS',
  FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS',
  FETCH_COLLECTIONS_FAIL: 'FETCH_COLLECTIONS_FAIL'
};

export const fetchCollections = () => ({
  type: ShopTypes.FETCH_COLLECTIONS
});

export const fetchCollectionsSuccess = collections => ({
  type: ShopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

export const fetchCollectionsFail = error => ({
  type: ShopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: error
});
