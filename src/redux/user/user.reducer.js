import { UserTypes } from './user.actions';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: action.payload
      }
    case UserTypes.SIGN_IN_FAIL:
    case UserTypes.SIGN_OUT_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case UserTypes.SIGN_OUT_SUCCESS:
      return INITIAL_STATE
    default:
      return state;
  }
};