import ActionTypes from "../constant/constant";
import api from '../../components/apiList/apiList'

// // const api = "https://swit-app.herokuapp.com/";
// const api = "http://localhost:5000/"

function JobBankHuntGet() {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(`${api}JobBank/JobBankJobHuntGet`, { headers })
            .then((res) =>
                res.json().then(async (response) => {
                    // allData=response
                    dispatch({ type: ActionTypes.JobBankHuntGet, payload: response });
                })
            )
            .catch((err) => {
            });
    };
}


function jobBankFormGet() {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(`${api}JobBank/jobBankFormGet`, { headers })
            .then((res) =>
                res.json().then(async (response) => {
                    dispatch({ type: ActionTypes.jobBankFormGet, payload: response });
                })
            )
            .catch((err) => {
            });
    };
}

export { JobBankHuntGet, jobBankFormGet };
