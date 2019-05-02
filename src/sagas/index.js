import { all, fork } from "redux-saga/effects";
import { authSaga } from "./authSaga";

function* mainSaga() {
  yield all([fork(authSaga)]);
}

export default mainSaga;
