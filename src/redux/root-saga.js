import { all } from 'redux-saga/effects';
import { watchFetchCollections } from './shop/shop.sagas';

export function* rootSaga() {
  yield all([
    watchFetchCollections()
  ]);
};