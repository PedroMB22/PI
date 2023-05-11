import {
    GET_DOGS_REQUEST,
    GET_DOGS_SUCCESS,
    GET_DOGS_FAILURE,
  } from "../types";
  
  import { dogService } from "../services";
  
  export const dogsActions = {
    get,
  };
  
  function get() {
    return (dispatch) => {
      dispatch(request());
      return dogService.get().then(
        (response) => {
          dispatch(success(response.data));
        },
        (error) => {
          dispatch(failure(error.toString()));
        }
      );
    };
  
    function request() {
      return { type: GET_DOGS_REQUEST };
    }
    function success(data) {
      return { type: GET_DOGS_SUCCESS, data };
    }
    function failure(error) {
      return { type: GET_DOGS_FAILURE, error };
    }
  }