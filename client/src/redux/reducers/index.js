import { combineReducers } from 'redux';
import { dogsReducer } from './dogs.reducer';
import { temperamentsReducer } from './temperaments.reducer'; 
import { byIdReducer} from './dogsById.reducer';

export default combineReducers({
  dogsReducer, 
  temperamentsReducer, 
  byIdReducer
});
