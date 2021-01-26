import ActionTypes from "../constant/constant";
const initial_state = {
    schoolCampusGets: [],
    schoolCountGet: [],
    schoolTeacherGet: [],
    schoolFeatureGets: []
};

const reducerSchoolGreen = (state = initial_state, action) => {
    switch (action.type) {
        case ActionTypes.schoolCampusGet: {
            return { ...state, schoolCampusGets: action.payload };
        }
        case ActionTypes.schoolCountGet: {
            console.log(action.payload, 'action.payload.data')
            return { ...state, schoolCountGets: action.payload };
        }
        case ActionTypes.schoolTeacherGet: {
            console.log(action.payload, 'action.payload.data')
            return { ...state, schoolTeacherGets: action.payload };
        }
        case ActionTypes.schoolFeatureGet: {
            console.log(action.payload, 'action.payload.data')
            return { ...state, schoolFeatureGets: action.payload };
        }
        default: {
            return state;
        }
    }
};

export default reducerSchoolGreen;