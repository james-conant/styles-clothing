import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

axios.defaults.headers.post["Content-Type"] = "application/json";

export function* fetchAllCollections({ payload }) {
  try {
    const { data } = yield axios.get("api/shop/", {
      params: {
        param: payload,
      },
    });
    yield put(fetchCollectionsSuccess(data));
  } catch (error) {
    put(fetchCollectionsFailure(error));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchAllCollections
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
