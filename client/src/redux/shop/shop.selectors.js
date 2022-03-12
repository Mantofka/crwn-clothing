import { createSelector } from "reselect";
import memoize from "lodash.memoize";

// Brings shop property from redux root.
const selectShop = (state) => state.shop;

// Gets collections property from redux.
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// Fetches all collections as an array of objects.
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => (collections ? Object.values(collections) : [])
);

// Brings collection by the giver collection url param.
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);

// Gets item (by url param) from currently visiting collection.
export const selectItemFromCollection = (collectionUrlParam, itemUrlParam) =>
  createSelector([selectCollection(collectionUrlParam)], (collection) =>
    collection.items.find((item) => item.id == itemUrlParam)
  );

// Checks whether collection is currently fetching.
export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

// Checks whether collection is loaded and prepared to display.
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
