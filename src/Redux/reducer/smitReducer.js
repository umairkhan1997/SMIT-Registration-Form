import ActionTypes from "../constant/constant";
const initial_state = {
    smitNotificationGets: [],
    smitFacultyGets: [],
    smitFacultyCourseGets: [],
    SmitCollaborationGets: [],
    smitWorkshopGet: [],
    SmitCounGets: []

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
        default: {
            return state;
        }
    }
};

export default reducerSmit;
