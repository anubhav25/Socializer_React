import { takeLatest, put } from "redux-saga/effects";
import * as actions from "../actions";
function* login(action) {
  try {
    let res = yield fetch(actions.baseUri + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(action.payload)
    });
    res = yield res.json();
    if (res && res.response === "success" && res.user) {
      localStorage.setItem("user", btoa(btoa(JSON.stringify(res.user))));
      yield put({ type: actions._LOGIN_SUCCESS, payload: res.user });
    } else if (res && res.response === "fail" && res.message) {
      yield put({ type: actions._LOGIN_FAIL, payload: res.message });
    } else {
      yield put({ type: actions._LOGIN_FAIL, payload: "SERVER ERROR" });
    }
  } catch {
    yield put({
      type: actions._LOGIN_FAIL,
      payload: "SERVER ERROR"
    });
  }
}
function* logout() {
  try {
    localStorage.setItem("user", "");
    yield fetch(actions.baseUri + "/api/logout");
  } catch {}
}
function* changePassword(action) {
  try {
    let res = yield fetch(actions.baseUri + "/api/changepassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(action.payload)
    });
    res = yield res.json();
    if (res && res.response === "success") {
      yield put({
        type: actions._CHANGEPASSWORD_SUCCESS,
        payload: res.message
      });
    } else {
      yield put({ type: actions._CHANGEPASSWORD_FAIL, payload: res.message });
    }
  } catch {
    yield put({ type: actions._CHANGEPASSWORD_FAIL, payload: "SERVER ERROR" });
  }
}

export function* loginSaga() {
  yield takeLatest(actions.LOGIN, login);
}
export function* logoutSaga() {
  yield takeLatest(actions.LOGOUT, logout);
}
export function* changePassSaga() {
  yield takeLatest(actions.CHANGEPASSWORD, changePassword);
}
