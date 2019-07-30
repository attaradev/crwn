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
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};