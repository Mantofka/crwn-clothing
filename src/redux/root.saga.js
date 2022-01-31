import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shop.sagas";
import { onGoogleSignInStart, onEmailSignInStart } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([
    call(fetchCollectionsStart),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
  ]);
}
