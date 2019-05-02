import { takeLatest, put } from "redux-saga/effects";
import * as actions from "../actions";

function* login(action) {
  yield put({ type: actions._LOGIN, payload: action.payload });
}

export default function* authSaga() {
  yield takeLatest(actions.LOGIN, login);
}
