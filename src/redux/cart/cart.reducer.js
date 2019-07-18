import { CartTypes } from './cart.actions';

const INITIAL_STATE = {
  hidden: true,
  itemsInCart: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case CartTypes.ADD_ITEM_TO_CART:
      return { ...state, itemsInCart: [...state.itemsInCart, action.payload] }
    default:
      return state;
  }
};
