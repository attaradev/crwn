export const UserTypes = {
  SIGN_IN_WITH_GOOGLE: 'SIGN_IN_WITH_GOOGLE',
  SIGN_IN_WITH_EMAIL_AND_PASSWORD: 'SIGN_IN_WITH_EMAIL_AND_PASSWORD',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAIL: 'SIGN_IN_FAIL',
  CHECK_USER_SESSION: 'CHECK_USER_SESSION',
  SIGN_OUT: 'SIGN_OUT',
  SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAIL: 'SIGN_OUT_FAIL'
};

export const signInWithGoogle = () => ({
  type: UserTypes.SIGN_IN_WITH_GOOGLE,
});

export const signInWithEmailAndPassword = emailAndPassword => ({
  type: UserTypes.SIGN_IN_WITH_EMAIL_AND_PASSWORD,
  payload: emailAndPassword
});

export const signInSuccess = user => ({
  type: UserTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFail = error => ({
  type: UserTypes.SIGN_IN_FAIL,
  payload: error
});

export const signOut = () => ({
  type: UserTypes.SIGN_OUT
});

export const signOutSuccess = () => ({
  type: UserTypes.SIGN_OUT_SUCCESS
});

export const signOutFail = error => ({
  type: UserTypes.SIGN_OUT_FAIL,
  payload: error
});

export const checkUserSession = () => ({
  type: UserTypes.CHECK_USER_SESSION
});
