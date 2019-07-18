export const CartTypes = {
  TOGGLE_CART_HIDDEN: "TOGGLE_CART_HIDDEN",
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART'
};

export const toggleCartHidden = () => ({
  type: CartTypes.TOGGLE_CART_HIDDEN
});

export const addItemToCart = item => ({
  type: CartTypes.ADD_ITEM_TO_CART,
  payload: item
});