import { takeLatest, put } from "redux-saga/effects";
import * as actions from "../actions";
const baseUri = "https://mysocializer.herokuapp.com"; //"http://localhost:4000";
function* login(action) {
  console.log(action);
  try {
    let res = yield fetch(baseUri + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(action.payload)
    });
    res = yield res.json();
    yield put({ type: actions._LOGIN, payload: res });
  } catch {
    yield put({
      type: actions._LOGIN,
      payload: { response: "fail", message: "SERVER ERROR" }
    });
  }
}

export default function* authSaga() {
  yield takeLatest(actions.LOGIN, login);
}
