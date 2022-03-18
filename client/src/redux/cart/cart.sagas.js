import { all, call, put, takeLatest, select } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearCart, updateCart } from "./cart.actions";
import { selectCartItems } from "./cart.selectors";
import { selectCurrentUser } from "../user/user.selector";
import CartActionTypes from "./cart.types";

import { retrieveCartItem, updateFirebaseCart } from "./cart.utils";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}
export function* fetchCartItemsFromFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser !== null) {
    const previousCartItems = yield select(selectCartItems);
    const cartItems = yield call(
      retrieveCartItem,
      currentUser.id,
      previousCartItems
    );
    yield put(updateCart(cartItems));
    yield call(updateFirebaseCart, currentUser.id, cartItems);
  }
}

export function* updateFirebaseCartItems() {
  const currentUser = yield select(selectCurrentUser);
  const cartItems = yield select(selectCartItems);
  if (currentUser !== null)
    yield call(updateFirebaseCart, currentUser.id, cartItems);
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onSignInSuccess() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, fetchCartItemsFromFirebase);
}

export function* onClearItemFromCart() {
  yield takeLatest(
    CartActionTypes.CLEAR_ITEM_FROM_CART,
    updateFirebaseCartItems
  );
}
export function* onRemoveItem() {
  yield takeLatest(CartActionTypes.REMOVE_ITEM, updateFirebaseCartItems);
}

export function* onAddItem() {
  yield takeLatest(CartActionTypes.ADD_ITEM, updateFirebaseCartItems);
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onSignInSuccess),
    call(onClearItemFromCart),
    call(onRemoveItem),
    call(onAddItem),
  ]);
}
