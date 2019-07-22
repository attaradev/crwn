import { createSelector } from 'reselect';
import { formatAsMoney } from '../../utils/cart.utils';

const selectCart = state => state.cart;

export const selectItemsInCart = createSelector(
  [selectCart],
  cart => cart.itemsInCart
);

export const selectItemsInCartCount = createSelector(
  [selectItemsInCart],
  itemsInCart => itemsInCart.reduce(
    (total, { quantity }) => total + quantity,
    0
  )
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartTotal = createSelector(
  [selectItemsInCart],
  itemsInCart => formatAsMoney(itemsInCart.reduce(
    (total, { quantity, price }) => total + (quantity * price),
    0
  ))
);