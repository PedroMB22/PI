import {
    GET_DOGSBYID_REQUEST,
    GET_DOGSBYID_SUCCESS,
    GET_DOGSBYID_FAILURE,
    } from "../types";
    import { dogsStateModel } from "../states";
    const initialState = {
      ...dogsStateModel,
      data: null,
    };
export function byIdReducer (state = initialState, action) {
    switch (action.type) {
      case GET_DOGSBYID_REQUEST: 
        return {
          ...state,
          isLoading: true,
        };
  
    case GET_DOGSBYID_SUCCESS:
            console.log(action.data);
            return {
              ...state,
              isLoading: false,
              data: action.data,
              error: null
            };
        
  
      case GET_DOGSBYID_FAILURE:
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
  