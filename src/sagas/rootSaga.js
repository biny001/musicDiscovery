import { all } from "redux-saga/effects";
import { watchDataRequests } from "./getSaga";

export default function* rootSaga() {
  yield all([watchDataRequests()]);
}
