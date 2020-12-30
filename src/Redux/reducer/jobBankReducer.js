import ActionTypes from "../constant/constant";
const initial_state = {
    JobBankHuntGets: [],
    jobBankFormGets: []
};

const reducerJobBank = (state = initial_state, action) => {
    switch (action.type) {
        case ActionTypes.JobBankHuntGet: {
            return { ...state, JobBankHuntGets: action.payload.data };
        }
        case ActionTypes.jobBankFormGet: {
            return { ...state, jobBankFormGets: action.payload.data };
        }

        default: {
            return state;
        }
    }
};

export default reducerJobBank;
