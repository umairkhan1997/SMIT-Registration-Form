import ActionTypes from "../constant/constant";
const initial_state = {
    QuranAppAndroidGets: [],
    QuranAppIosGets: []
};

const reducerQuranApp = (state = initial_state, action) => {
    switch (action.type) {
        case ActionTypes.QuranAppAndroidGet: {
            return { ...state, QuranAppAndroidGets: action.payload };
        }
        case ActionTypes.QuranAppIosGet: {
            return { ...state, QuranAppIosGets: action.payload };
        }
        default: {
            return state;
        }
    }
};

export default reducerQuranApp;