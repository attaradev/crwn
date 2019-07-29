import { all, takeLatest, put, call } from 'redux-saga/effects';
import { auth, googleProvider, createUserProfileDocument } from '../../utils/firebase.utils';
import { UserTypes, signInWithGoogleSuccess, signInWithGoogleFail, signInWithEmailFail } from './user.actions';


function* signInWithGoogleAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userReference = yield createUserProfileDocument(user);
    const userSnapshot = yield userReference.get();
    yield put(signInWithGoogleSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInWithGoogleFail(error.message));
  }

}

function* watchSignInWithGoogle() {
  yield takeLatest(UserTypes.SIGN_IN_WITH_GOOGLE, signInWithGoogleAsync);
}

function* signInWithEmailAsync(emailAndPassword) {
  try {

  } catch (error) {
    yield put(signInWithEmailFail(error.message));
  }
}

function* watchSignInWithEmail() {
  yield takeLatest(UserTypes.SIGN_IN_WITH_EMAIL, signInWithEmailAsync)
}

export function* userSagas() {
  yield all([
    call(watchSignInWithGoogle),
    call(watchSignInWithEmail)
  ]);
}