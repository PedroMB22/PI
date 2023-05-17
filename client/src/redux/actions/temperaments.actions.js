import {
    GET_TEMPERAMENTS_REQUEST,
    GET_TEMPERAMENTS_SUCCESS,
    GET_TEMPERAMENTS_FAILURE
  } from "../types";
  
  import { temperamentService } from "../services";
  
  export const temperamentsActions = {
    getTemperaments
  };
  
  function getTemperaments() {
    return (dispatch) => {
      dispatch(request());
      return temperamentService.getTemperaments().then(
        (response) => {
          console.log(response.data)
          dispatch(success(response.data));
        },
        (error) => {
          dispatch(failure(error.toString()));
        }
      );
    };
  
    function request() {
      return { type: GET_TEMPERAMENTS_REQUEST };
    }
  
    function success(data) {
      return { type: GET_TEMPERAMENTS_SUCCESS, data };
    }
    
  
    function failure(error) {
      return { type: GET_TEMPERAMENTS_FAILURE, error };
    }
  }
  