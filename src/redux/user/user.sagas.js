import { all, takeLatest, put, call } from 'redux-saga/effects';
import { auth, googleProvider, createUserProfileDocument } from '../../utils/firebase.utils';
import { UserTypes, signInWithGoogleSuccess, signInWithGoogleFail } from './user.actions';


function* signInWithGoogleAsync() {
  try {
    const userReference = yield call(auth.signInWithPopup, googleProvider);
    yield console.log(userReference);
    // yield put(googleLoginSuccess, {});
  } catch (error) {
    yield put(signInWithGoogleFail(error.message));
  }

}

export function* watchSignInWithGoogle() {
  yield takeLatest(UserTypes.SIGN_IN_WITH_GOOGLE, signInWithGoogleAsync);
}

export function* userSagas() {
  yield all([
    call(watchSignInWithGoogle)
  ])
}