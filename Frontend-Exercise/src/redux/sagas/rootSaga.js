import { CREATE_USER_START, GET_USERS_START, LOGIN_USER_START } from "../actionTypes";
import { takeEvery } from "redux-saga/effects";
import { getUsersHandler } from "./handlers/getUsers";
import { createUserHandler } from "./handlers/createUser";
import { userLoginHandler } from "./handlers/loginUser"

export function* watcherSaga() {
  yield takeEvery(GET_USERS_START, getUsersHandler);
  yield takeEvery(CREATE_USER_START, createUserHandler);
  yield takeEvery(LOGIN_USER_START, userLoginHandler)
}
