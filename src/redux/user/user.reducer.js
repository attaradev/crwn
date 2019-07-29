import { UserTypes } from './user.actions';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.SIGNIN_WITH_GOOGLE_SUCCESS:
    case UserTypes.SIGNIN_WITH_EMAIL_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: action.payload
      }
    case UserTypes.SIGNIN_WITH_GOOGLE_FAIL:
    case UserTypes.SIGNIN_WITH_EMAIL_FAIL:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};