import ActionTypes from "../constant/constant";
const initial_state = {
    smitNotificationGets: [],
    smitFacultyGets: [],
    smitFacultyCourseGets: [],
    SmitCollaborationGets: [],
    smitWorkshopGet: [],
    SmitCounGets: [],
    SmitsucessGets: [],
    smitCoursesGets: [],
    stdDatas:[],
    stdDatasImg:[],
    courseId:'',
    year:''

};

const reducerSmit = (state = initial_state, action) => {
    switch (action.type) {
        case ActionTypes.smitNotificationGet: {
            return { ...state, smitNotificationGets: action.payload.data };
        }
        case ActionTypes.smitFacultyGet: {
            return { ...state, smitFacultyGets: action.payload.data };
        }
        case ActionTypes.smitFacultyCourseGet: {
            return { ...state, smitFacultyCourseGets: action.payload.data };
        }
        case ActionTypes.SmitCollaborationGet: {
            return { ...state, SmitCollaborationGets: action.payload.data };
        }
        case ActionTypes.smitWorkshopGet: {
            return { ...state, smitWorkshopGets: action.payload.data };
        }
        case ActionTypes.SmitCounGet: {
            return { ...state, SmitCounGets: action.payload.data };
        }

        case ActionTypes.SmitsucessGet: {
            return { ...state, SmitsucessGets: action.payload.data };
        }
        case ActionTypes.smitCoursesGet: {
            return { ...state, smitCoursesGets: action.payload.data };
        }
        case ActionTypes.stdData: {
            return { ...state, stdDatas: action.payload,stdDatasImg:action.data,courseId:action.b,year:action.c };
        }

        default: {
            return state;
        }
    }
};

export default reducerSmit;
