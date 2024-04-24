
import {  EDIT_USER_START,EDIT_USER_FAILURE,EDIT_USER_SUCCESS } from "../actionTypes";

  
  export const editUsers = (payload) =>({ type: EDIT_USER_START ,payload});
  export const editUsersSuccess = (payload) => ({
    type: EDIT_USER_SUCCESS ,
    payload,
  });

  export const editUsersFailure = (payload) => ({
    type: EDIT_USER_FAILURE ,
    payload,
  });
  