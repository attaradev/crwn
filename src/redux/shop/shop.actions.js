import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../utils/firebase.utils';

export const ShopTypes = {
  FETCH_COLLECTIONS_START: 'FETCH_COLLECTIONS_START',
  FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS',
  FETCH_COLLECTIONS_FAIL: 'FETCH_COLLECTIONS_FAIL'
};

export const fetchCollectionsStart = () => ({
  type: ShopTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collections => ({
  type: ShopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

export const fetchCollectionsFail = error => ({
  type: ShopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: error
});

export const fetchCollectionsAsync = () => {
  return dispatch => {
    const collectionReference = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionReference
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFail(error.message)));
  };
};