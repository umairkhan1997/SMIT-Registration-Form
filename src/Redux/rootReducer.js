import { combineReducers } from "redux";
import homeReducer from "./reducer/homeReducer";
import reducerRoPlant from "./reducer/roPlantReducer";
import reducerJobBank from './reducer/jobBankReducer';
import reducerDonation from './reducer/donationReducer';


export default combineReducers({
  root: homeReducer,
  reducerRoPlant,
  reducerJobBank,
  reducerDonation
});

// import {combineReducers} from 'redux';
// import reducer from './reducer';

// export default combineReducers({
//     root: reducer
// });
