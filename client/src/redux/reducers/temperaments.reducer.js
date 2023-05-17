import {
    GET_TEMPERAMENTS_REQUEST,
    GET_TEMPERAMENTS_SUCCESS,
    GET_TEMPERAMENTS_FAILURE
  } from "../types";
  
  import { temperamentsStateModel } from "../states";
  const initialState = temperamentsStateModel;
  
  export function temperamentsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_TEMPERAMENTS_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
  
      case GET_TEMPERAMENTS_SUCCESS:
        return {
          ...state,
          data: action.data,
          isLoading: false,
        };
  
      case GET_TEMPERAMENTS_FAILURE:
        return {
          ...state,
          errors: action.error,
          isLoading: false,
        };
  
      default:
        return state;
    }
  }
  