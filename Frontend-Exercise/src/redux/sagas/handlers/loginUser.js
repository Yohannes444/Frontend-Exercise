import { loginUsersFailure, loginUsersSuccess } from "../../actions/login";
import { call, put } from "redux-saga/effects";
import userLoginRequest from "../requests/loginUser";

export function* userLoginHandler(action) {
  
    const response = yield call(userLoginRequest,action.payload);
    console.log("response form loginHandler",response)
    if(response.statusText != 'Created'){
      yield put(loginUsersFailure(error.message));

    }else{
     yield put(loginUsersSuccess(response.data));
  }
  
}
