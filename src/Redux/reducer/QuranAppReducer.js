import ActionTypes from "../constant/constant";
const initial_state = {
    QuranAppAndroidGets: [],
    QuranAppIosGets: []
};

const reducerQuranApp = (state = initial_state, action) => {
    switch (action.type) {
        case ActionTypes.QuranAppAndroidGet: {
            console.log(action.payload, 'action.payload')
            return { ...state, QuranAppAndroidGets: action.payload };
        }
        case ActionTypes.QuranAppIosGet: {
            console.log(action.payload, 'action.payload')
            return { ...state, QuranAppIosGets: action.payload };
        }
        default: {
            return state;
        }
    }
};

export default reducerQuranApp;