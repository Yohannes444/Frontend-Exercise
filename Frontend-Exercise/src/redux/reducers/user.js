import {
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    EDIT_USER_START,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILURE,
  } from "../actionTypes";
  
  const initialState = {
    user: null,
    isLoading: false,
    error: null,
  };
  
  const reducers = (state = initialState, action) => {
    switch (action.type) {
      
      case LOGIN_USER_START: {
        return { ...state, isLoading: true };
      }
      case LOGIN_USER_SUCCESS: {
        const updatedUsers = [...state.user, action.payload];
        return { ...state, isLoading: false, user: updatedUsers };
      }
      case LOGIN_USER_FAILURE: {
        return { ...state, isLoading: false, error: action.payload };
      }
      case EDIT_USER_START: {
        return { ...state, isLoading: true };
      }
      case EDIT_USER_SUCCESS: {
        const updatedUsers = [...state.user, action.payload];
        return { ...state, isLoading: false, user: updatedUsers };
      }
      case EDIT_USER_FAILURE: {
        return { ...state, isLoading: false, error: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  
  export default reducers;
  