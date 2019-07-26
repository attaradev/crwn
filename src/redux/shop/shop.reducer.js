import { ShopTypes } from './shop.actions';

const INITIAL_STATE = {};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopTypes.UPDATE_COLLECTIONS:
      return { state, collections: action.payload }
    default:
      return state;
  }
};