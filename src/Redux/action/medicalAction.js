import ActionTypes from "../constant/constant";
import axios from 'axios';

const api = "https://swit-app.herokuapp.com/";
// const api = "http://localhost:3000/"


function patientTreatedGet() {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(`${api}medical/patientTreatedGet`, { headers })
            .then((res) =>
                res.json().then(async (response) => {
                    dispatch({ type: ActionTypes.patientTreatedGet, payload: response });
                })
            )
            .catch((err) => {
                console.log(err, "err");
            });
    };
}

function medicalServiceAdd() {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(`${api}medical/medicalServiceGet`, { headers })
            .then((res) =>
                res.json().then(async (response) => {
                    console.log(response, "data");
                    dispatch({ type: ActionTypes.medicalServiceAdd, payload: response });
                })
            )
            .catch((err) => {
                console.log(err, "err");
            });
    };
}
function benificiariesCountGet() {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(`${api}medical/benificiariesCountGet`, { headers })
            .then((res) =>
                res.json().then(async (response) => {
                    console.log(response, "data");
                    dispatch({ type: ActionTypes.benificiariesCountGet, payload: response });
                })
            )
            .catch((err) => {
                console.log(err, "err");
            });
    };
}

function opdNameGet() {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(`${api}medical/opdNameGet`, { headers })
            .then((res) =>
                res.json().then(async (response) => {
                    console.log(response, "data");
                    dispatch({ type: ActionTypes.opdNameGet, payload: response });
                })
            )
            .catch((err) => {
                console.log(err, "err");
            });
    };
}

function opdListGet() {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(`${api}medical/opdListGet`, { headers })
            .then((res) =>
                res.json().then(async (response) => {
                    console.log(response, "data");
                    dispatch({ type: ActionTypes.opdListGet, payload: response });
                })
            )
            .catch((err) => {
                console.log(err, "err");
            });
    };
}
export {
    patientTreatedGet, medicalServiceAdd, benificiariesCountGet, opdNameGet, opdListGet
}