import ActionTypes from "../constant/constant";
const initial_state = {
    mediaGets: [],


};

const reducerMedia = (state = initial_state, action) => {
    switch (action.type) {
        case ActionTypes.mediaGet: {
            console.log(action.payload)
            return { ...state, mediaGets: action.payload.data };
        }
        default: {
            return state;
        }
    }
};

export default reducerMedia;
