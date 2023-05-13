import {
  
    GET_DOGS_REQUEST,
    GET_DOGS_SUCCESS,
    GET_DOGS_FAILURE,
    POST_DOG_REQUEST,
    POST_DOG_SUCCESS,
    POST_DOG_FAILURE
  } from "../types";
  
  import { dogsStateModel } from "../states";
  const initialState = dogsStateModel;
  
  export function dogsReducer(state = initialState, action) {
    switch (action.type) {
    
      case GET_DOGS_REQUEST:
      case POST_DOG_REQUEST:  
        return {
          ...state,
          isLoading: true,
        };
  
      case GET_DOGS_SUCCESS:
      case POST_DOG_SUCCESS:
        return {
          ...state,
          data: action.data,
          isLoading: false,
        };
     
      case GET_DOGS_FAILURE:
      case POST_DOG_FAILURE:
        return {
          ...state,
          errors: {
            ...state.errors,
          },
          isLoading: false,
        };
     
      default:
        return state;
    }
  }