import { all } from 'redux-saga/effects';
import { watchFetchCollections } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';

export function* rootSaga() {
  yield all([
    watchFetchCollections(),
    userSagas()
  ]);
};