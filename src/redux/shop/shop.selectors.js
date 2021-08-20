import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// export const selectCollection = (collectionUrlParam) =>
//   createSelector(
//     [selectCollections],
//     (collections) => collections.find((collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
//   );

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) => {
    console.log(collections, collectionUrlParam);
    return collections[collectionUrlParam];
  })
);
