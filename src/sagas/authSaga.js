import { takeLatest, put } from "redux-saga/effects";
import * as actions from "../actions";
const baseUri = "https://mysocializer.herokuapp.com"; //"http://localhost:4000";
function* login(action) {
  try {
    let res = yield fetch(baseUri + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(action.payload)
    });
    res = yield res.json();
    if (res && res.response === "success" && res.user) {
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

export default function* authSaga() {
  yield takeLatest(actions.LOGIN, login);
}
