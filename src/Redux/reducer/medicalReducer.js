import ActionTypes from "../constant/constant";
const initial_state = {
    patientTreatedGets: [],
    medicalServiceAdds: [],
    benificiariesCountGets: [],
    opdNameGets: [],
    opdListGets: []
};

const reducerMedical = (state = initial_state, action) => {
    switch (action.type) {
        case ActionTypes.patientTreatedGet: {
            return { ...state, patientTreatedGets: action.payload.data };
        }

        case ActionTypes.medicalServiceAdd: {
            return { ...state, medicalServiceAdds: action.payload.data };
        }

        case ActionTypes.benificiariesCountGet: {
            return { ...state, benificiariesCountGets: action.payload.data };
        }

        case ActionTypes.opdNameGet: {
            return { ...state, opdNameGets: action.payload.data };
        }

        case ActionTypes.opdListGet: {
            return { ...state, opdListGets: action.payload.data };
        }
        default: {
            return state;
        }
    }
};

export default reducerMedical;
