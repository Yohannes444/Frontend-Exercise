import { editUsersFailure, editUsersSuccess } from "../../actions/editUser";
import { call, put } from "redux-saga/effects";
import editUser from "../requests/editUser";

export function* editUserHandler(action) {
  try {
    const response = yield call(editUser,action.payload);
    yield put(editUsersSuccess(response.data));
  } catch (error) {
    yield put(editUsersFailure(error.message));
  }
}
