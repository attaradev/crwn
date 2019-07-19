import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.itemsInCart
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  itemsInCart => itemsInCart.reduce(
    (total, { quantity }) => total + quatity,
    0
  )
);