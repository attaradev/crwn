import { all, call, put, takeLatest } from 'redux-saga/effects';

import { UserTypes } from '../user/user.actions';
import { clearCart } from './cart.actions';


function* clearCartOnSignOutSucess() {
  yield put(clearCart())
}

function* watchSignOutSuccess() {
  yield takeLatest(UserTypes.SIGN_OUT_SUCCESS, clearCartOnSignOutSucess);
}

export function* cartSagas() {
  yield all([
    call(watchSignOutSuccess)
  ]);
}