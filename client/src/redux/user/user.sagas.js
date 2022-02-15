import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

import UserActionTypes from "./user.types";

import {
  signUpFailure,
  signInFailure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  signOutFailure
} from "./user.actions";

axios.defaults.headers.post["Content-Type"] = "application/json";

export function* signUp({ payload: { email, password, username } }) {
  try {
    const { data } = yield axios.post("api/auth/register", { email, password, username });
    yield put(signUpSuccess(data));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { data } = yield axios.post("api/auth/login", { email, password });
    yield put(signInSuccess(data));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([call(onSignUpStart), call(onEmailSignInStart), call(onSignOutStart)]);
}
