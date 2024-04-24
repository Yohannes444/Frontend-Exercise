import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  EDIT_USER_START,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
  LOGOUT_USER_START
} from "../actionTypes";

const initialState = {
  user: {}, // Initialize as an object
  isLoading: false,
  error: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_START: {
      return { ...state, isLoading: true };
    }
    case EDIT_USER_START: {
      return { ...state, isLoading: true };
    }case LOGOUT_USER_START:{
      return { ...state, isLoading: false, user: {} };
    }
    case LOGIN_USER_SUCCESS: {
      const updatedUser = { ...state.user, ...action.payload }; 
      return { ...state, isLoading: false, user: updatedUser };
    }
    case EDIT_USER_SUCCESS: {
      const updatedUser = { ...state.user, ...action.payload }; 
      return { ...state, isLoading: false, user: updatedUser };
    }
    case LOGIN_USER_FAILURE:{
      return { ...state, isLoading: false, error: action.payload };
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
