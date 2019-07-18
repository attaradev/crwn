import { CartTypes } from './cart.actions';

const INITIAL_STATE = {
  hidden: true
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};
