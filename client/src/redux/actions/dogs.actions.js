import {
  GET_DOGS_REQUEST,
  GET_DOGS_SUCCESS,
  GET_DOGS_FAILURE,
  POST_DOG_REQUEST,
  POST_DOG_SUCCESS,
  POST_DOG_FAILURE
} from "../types";

import { dogService } from "../services";

export const dogsActions = {
  get,
  post
};

function get() {
  return (dispatch) => {
    dispatch(request());
    return dogService.get().then(
      (response) => {
        console.log("response en get actions",response.data)
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
    function post(dog) {
        return (dispatch) => {
      dispatch(request());
      return dogService.post(dog).then(
          (response) => {
            console.log(response.data);
              dispatch(success(response.data));
            },
            (error) => {
                dispatch(failure(error.toString()));
            }
            );
        };
  
function request() {
  return { type: POST_DOG_REQUEST };
}

function success(data) {
  return { type: POST_DOG_SUCCESS, data };
}

function failure(error) {
  return { type: POST_DOG_FAILURE, error };
}
}