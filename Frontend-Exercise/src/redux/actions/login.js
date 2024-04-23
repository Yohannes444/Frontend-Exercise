import {
    LOGIN_USERS_FAILURE,
    LOGIN_USERS_START,
    LOGIN_USERS_SUCCESS,
  } from "../actionTypes";
  
  export const loginUsers = () => ({ type: LOGIN_USERS_START });
  export const loginUsersSuccess = (payload) => ({
    type: LOGIN_USERS_SUCCESS,
    payload,
  });
  export const loginUsersFailure = (payload) => ({
    type: LOGIN_USERS_FAILURE,
    payload,
  });
  