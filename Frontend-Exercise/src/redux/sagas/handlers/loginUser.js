import { loginUsersFailure, loginUsersSuccess } from "../../actions/login";
import { call, put } from "redux-saga/effects";
import userLogin from "../requests/loginUser";

export function* userLoginHandler() {
  try {
    const response = yield call(userLogin);
    yield put(loginUsersSuccess(response.data));
  } catch (error) {
    yield put(loginUsersFailure(error.message));
  }
}
