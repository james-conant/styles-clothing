import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

// redux already has a shallow equality check for the integer and wont re-render but keeping reduce function here.
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumilatedQuantity, cartItem) => {
      return accumilatedQuantity + cartItem.quantity;
    }, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems], 
  (cartItems) =>
  cartItems.reduce((accumilatedTotal, cartItem) => {
    return accumilatedTotal + cartItem.price * cartItem.quantity;
  }, 0)
);
