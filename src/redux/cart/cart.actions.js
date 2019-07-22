export const CartTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART'
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