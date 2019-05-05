import { takeLatest, put } from "redux-saga/effects";
import * as actions from "../actions";

export function* searchSaga() {
  yield takeLatest(actions.SEARCH, search);
}
export function* getUserSaga() {
  yield takeLatest(actions.GETUSER, getuser);
}

function* search(action) {
  try {
    let res = yield fetch(actions.baseUri + "/api/search/" + action.payload);
    res = yield res.json();
    if (res && res.length === 0) {
      yield put({
        type: actions._SEARCH_FAIL,
        payload: "No such User Found"
      });
    } else if (res && res.length > 0) {
      yield put({ type: actions._SEARCH_SUCCESS, payload: res });
    } else {
      yield put({
        type: actions._SEARCH_FAIL,
        payload: "SERVER ERROR"
      });
    }
  } catch {
    yield put({
      type: actions._SEARCH_FAIL,
      payload: "SERVER ERROR"
    });
  }
}

function* getuser(action) {
  try {
    let res = yield fetch(actions.baseUri + "/api/user/" + action.payload);
    res = yield res.json();
    if (res && res.username) {
      yield put({
        type: actions._GETUSER_SUCCESS,
        payload: res
      });
    } else {
      throw new Error();
    }
  } catch {
    yield put({
      type: actions._GETUSER_FAIL,
      payload: "SERVER ERROR"
    });
  }
}
