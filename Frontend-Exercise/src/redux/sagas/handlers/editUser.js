import { editUsersFailure, editUsersSuccess } from "../../actions/editUser";
import { call, put } from "redux-saga/effects";
import editUserRequest from "../requests/editUser";

export function* editUserHandler(action) {
  
    const response = yield call(editUserRequest,action.payload);
   
    if (response.status != 200){
      yield put(editUsersFailure(error.message));
    }else{
      yield put(editUsersSuccess(response.data));
    }
 
}
