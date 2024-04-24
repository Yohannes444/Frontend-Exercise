
import {  
    LOGOUT_USER_START,
    LOGOUT_USER_FAILURE,
    LOGOUT_USER_SUCCESS
   } from "../actionTypes";
  
    
    export const logoutUsers = (payload) =>({ type: LOGOUT_USER_START ,payload});
    export const logoutUsersSuccess = (payload) =>  ({
      type: LOGOUT_USER_SUCCESS ,
      payload,
    });
  
    export const logoutUsersFailure = (payload) => ({
      type: LOGOUT_USER_FAILURE ,
      payload,
    });
    