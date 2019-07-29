export const UserTypes = {
  SIGN_IN_WITH_GOOGLE: 'SIGN_IN_WITH_GOOGLE',
  SIGN_IN_WITH_GOOGLE_SUCCESS: 'SIGN_IN_WITH_GOOGLE_SUCCESS',
  SIGN_IN_WITH_GOOGLE_FAIL: 'SIGN_IN_WITH_GOOGLE_FAIL',
  SIGN_IN_WITH_EMAIL: 'SIGN_IN_WITH_EMAIL',
  SIGN_IN_WITH_EMAIL_SUCCESS: 'SIGN_IN_WITH_EMAIL_SUCCESS',
  SIGN_IN_WITH_EMAIL_FAIL: 'SIGN_IN_WITH_EMAIL_FAIL'
};

export const signInWithGoogle = () => ({
  type: UserTypes.SIGN_IN_WITH_GOOGLE,
});

export const signInWithGoogleSuccess = user => ({
  type: UserTypes.SIGN_IN_WITH_GOOGLE_SUCCESS,
  payload: user
});

export const signInWithGoogleFail = error => ({
  type: UserTypes.SIGN_IN_WITH_GOOGLE_FAIL,
  payload: error
});

export const signInWithEmail = emailAndPassword => ({
  type: UserTypes.SIGN_IN_WITH_EMAIL,
  payload: emailAndPassword
});

export const signInWithEmailSuccess = user => ({
  type: UserTypes.SIGN_IN_WITH_EMAIL_SUCCESS,
  payload: user
});

export const signInWithEmailFail = error => ({
  type: UserTypes.SIGN_IN_WITH_EMAIL_FAIL,
  payload: error
});