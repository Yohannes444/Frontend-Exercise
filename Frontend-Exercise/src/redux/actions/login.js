
import {  
  LOGIN_USER_START,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS
 } from "../actionTypes";

  
  export const loginUsers = (payload) =>({ type: LOGIN_USER_START ,payload});
  export const loginUsersSuccess = (payload) =>  ({
    type: LOGIN_USER_SUCCESS ,
    payload,
  });

  export const loginUsersFailure = (payload) => ({
    type: LOGIN_USER_FAILURE ,
    payload,
  });
  