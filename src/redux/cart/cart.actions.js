export const CartTypes = {
  TOGGLE_CART_HIDDEN: "TOGGLE_CART_HIDDEN",
  ADD_ITEM: 'ADD_ITEM'
};

export const toggleCartHidden = () => ({
  type: CartTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartTypes.ADD_ITEM,
  payload: item
});