import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  ShopTypes,
  fetchCollectionsSuccess,
  fetchCollectionsFail
} from './shop.actions';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../utils/firebase.utils';

function* fetchCollectionsAsync() {
  try {
    const collectionReference = yield firestore.collection('collections');
    const snapshot = yield collectionReference.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFail(error.message));
  }
};

function* watchFetchCollections() {
  yield takeLatest(
    ShopTypes.FETCH_COLLECTIONS,
    fetchCollectionsAsync
  );
};

export function* shopSagas() {
  yield all([
    call(watchFetchCollections)
  ])
}