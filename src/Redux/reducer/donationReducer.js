import ActionTypes from "../constant/constant";
const initial_state = {
    DonaListGets: [],
};

const reducerDonation = (state = initial_state, action) => {
    switch (action.type) {
        case ActionTypes.DonaListGet: {
            return { ...state, DonaListGets: action.payload[0].data };
        }
        default: {
            return state;
        }
    }
};

export default reducerDonation;