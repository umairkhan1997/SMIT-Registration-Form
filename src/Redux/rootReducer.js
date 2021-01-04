import { combineReducers } from "redux";
import homeReducer from "./reducer/homeReducer";
import reducerRoPlant from "./reducer/roPlantReducer";
import reducerJobBank from './reducer/jobBankReducer';
import reducerDonation from './reducer/donationReducer';
import reducerQuranApp from './reducer/QuranAppReducer';
import reducerSmit from './reducer/smitReducer'
export default combineReducers({
  root: homeReducer,
  reducerRoPlant,
  reducerJobBank,
  reducerDonation,
  reducerQuranApp,
  reducerSmit
});

// import {combineReducers} from 'redux';
// import reducer from './reducer';

// export default combineReducers({
//     root: reducer
// });
