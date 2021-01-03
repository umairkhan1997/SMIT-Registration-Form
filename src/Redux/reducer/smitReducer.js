import ActionTypes from "../constant/constant";
const initial_state = {
    smitNotificationGets: [],


};

const reducerSmit = (state = initial_state, action) => {
    switch (action.type) {
        case ActionTypes.smitNotificationGet: {
            return { ...state, smitNotificationGets: action.payload.data };
        }
        default: {
            return state;
        }
    }
};

export default reducerSmit;
