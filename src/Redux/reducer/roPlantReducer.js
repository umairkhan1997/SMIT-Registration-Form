import ActionTypes from "../constant/constant";
const initial_state = {
    roPlantBranchGets: [],
    RoPlantEstiCostGets: [],
    RoPlantLocationGets: []

};

const reducerRoPlant = (state = initial_state, action) => {
    switch (action.type) {
        case ActionTypes.roPlantBranchGet: {
            return { ...state, roPlantBranchGets: action.payload.data };
        }

        case ActionTypes.RoPlantEstiCostGet: {
            return { ...state, RoPlantEstiCostGets: action.payload.data };
        }

        case ActionTypes.RoPlantLocationGet: {
            return { ...state, RoPlantLocationGets: action.payload.data };
        }
        default: {
            return state;
        }
    }
};

export default reducerRoPlant;
