import { CartTypes } from './cart.actions';
import { addItemToCart } from '../../utils/cart.utils';

const INITIAL_STATE = {
  hidden: true,
  itemsInCart: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case CartTypes.ADD_ITEM:
      return { ...state, itemsInCart: addItemToCart(state.itemsInCart, action.payload) }
    case CartTypes.REMOVE_ITEM_FROM_CART:
      return { ...state, itemsInCart: state.itemsInCart.filter(itemInCart => itemInCart.id !== action.payload.id) }
    default:
      return state;
  }
};
