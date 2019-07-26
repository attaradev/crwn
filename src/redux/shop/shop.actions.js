export const ShopTypes = {
  UPDATE_COLLECTIONS: 'UPDATE_COLLECTIONS'
};

export const updateCollections = collections => ({
  type: ShopTypes.UPDATE_COLLECTIONS,
  payload: collections
});