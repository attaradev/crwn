import { ShopTypes } from './shop.actions';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  error: undefined
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopTypes.FETCH_COLLECTIONS:
      return { ...state, isFetching: true }
    case ShopTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, isFetching: false, collections: action.payload }
    case ShopTypes.FETCH_COLLECTIONS_FAIL:
      return { ...state, isFetching: false, error: action.payload }
    default:
      return state;
  }
};