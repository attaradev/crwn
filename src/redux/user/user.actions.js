export const UserTypes = {
  SIGN_IN_WITH_GOOGLE: 'SIGN_IN_WITH_GOOGLE',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAIL: 'SIGN_IN_FAIL'
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
