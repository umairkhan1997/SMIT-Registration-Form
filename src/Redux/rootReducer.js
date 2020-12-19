import { combineReducers } from "redux";
import homeReducer from "./reducer/homeReducer";
import reducerRoPlant from "./reducer/roPlantReducer";

export default combineReducers({
  root: homeReducer,
  reducerRoPlant,
});

// import {combineReducers} from 'redux';
// import reducer from './reducer';

// export default combineReducers({
//     root: reducer
// });
