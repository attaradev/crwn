export const addItemToCart = (itemsInCart, itemToAdd) => {
  const existingItem = itemsInCart.find(item => item.id === itemToAdd.id);

  if (existingItem) {
    return itemsInCart.map(itemInCart => itemInCart.id === itemToAdd.id
      ? { ...itemInCart, quantity: itemInCart.quantity + 1 }
      : itemInCart
    );
  }

  return [...itemsInCart, { ...itemToAdd, quantity: 1 }];
}

export const formatAsMoney = amount => amount.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
});