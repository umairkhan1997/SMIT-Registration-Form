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
            return { ...state, schoolCountGets: action.payload };
        }
        case ActionTypes.schoolTeacherGet: {
            return { ...state, schoolTeacherGets: action.payload };
        }
        case ActionTypes.schoolFeatureGet: {
            return { ...state, schoolFeatureGets: action.payload };
        }
        default: {
            return state;
        }
    }
};

export default reducerSchoolGreen;