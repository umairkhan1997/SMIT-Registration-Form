import { combineReducers } from "redux";
import homeReducer from "./reducer/homeReducer";

export default combineReducers({
  root: homeReducer,
});

// import {combineReducers} from 'redux';
// import reducer from './reducer';

// export default combineReducers({
//     root: reducer
// });
