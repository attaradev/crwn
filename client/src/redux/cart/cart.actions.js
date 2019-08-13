export const CartTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
  DECREASE_ITEM: 'DECREASE_ITEM',
  INCREASE_ITEM: 'INCREASE_ITEM',
  CLEAR_CART: 'CLEAR_CART'
};

export const toggleCartHidden = () => ({
  type: CartTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartTypes.ADD_ITEM,
  payload: item
});

export const removeItemFromCart = item => ({
  type: CartTypes.REMOVE_ITEM_FROM_CART,
  payload: item
});

export const decreaseItem = item => ({
  type: CartTypes.DECREASE_ITEM,
  payload: item
});

export const increaseItem = item => ({
  type: CartTypes.INCREASE_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: CartTypes.CLEAR_CART
});