import {
  
    GET_DOGS_REQUEST,
    GET_DOGS_SUCCESS,
    GET_DOGS_FAILURE,
  } from "../types";
  
  import { dogsStateModel } from "../states";
  const initialState = dogsStateModel;
  
  export function dogsReducer(state = initialState, action) {
    switch (action.type) {
    
      case GET_DOGS_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
  
      case GET_DOGS_SUCCESS:
        return {
          ...state,
          data: action.data,
          isLoading: false,
        };
     
      case GET_DOGS_FAILURE:
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