import { all, fork } from "redux-saga/effects";
import * as authSagas from "./authSaga";
import * as userSagas from "./userSaga";
function* mainSaga() {
  yield all(
    [...Object.values(authSagas), ...Object.values(userSagas)].map(fork)
  );
}

export default mainSaga;
