import { combineReducers } from "redux";
import homeReducer from "./reducer/homeReducer";
import reducerRoPlant from "./reducer/roPlantReducer";
import reducerJobBank from './reducer/jobBankReducer';
import reducerDonation from './reducer/donationReducer';
import reducerQuranApp from './reducer/QuranAppReducer';
import reducerSmit from './reducer/smitReducer'
import reducerMedia from './reducer/mediaReducer';
import reducerMedical from './reducer/medicalReducer';
import reducerSchoolGreen from './reducer/schoolGreenReducer'
export default combineReducers({
  root: homeReducer,
  reducerRoPlant,
  reducerJobBank,
  reducerDonation,
  reducerQuranApp,
  reducerSmit,
  reducerMedia,
  reducerMedical,
  reducerSchoolGreen
});

// import {combineReducers} from 'redux';
// import reducer from './reducer';

// export default combineReducers({
//     root: reducer
// });
