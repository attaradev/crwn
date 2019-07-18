import { CartTypes } from './cart.actions';

const INITIAL_STATE = {};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes:
      return {};
    default:
      return state;
  }
};
