import { combineReducers } from 'redux';
import { dogsReducer } from './dogs.reducer';
import { temperamentsReducer } from './temperaments.reducer'; 

export default combineReducers({
  dogsReducer, 
  temperamentsReducer, 
});
