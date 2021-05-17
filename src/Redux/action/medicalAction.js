import ActionTypes from "../constant/constant";
import axios from 'axios';

import api from '../../components/apiList/apiList'

// // const api = "https://swit-app.herokuapp.com/";
// const api = "http://localhost:5000/"


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
            });
    };
}

function medicalServiceAdd() {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(`${api}medical/medicalServiceGet`, { headers })
            .then((res) =>
                res.json().then(async (response) => {
                    dispatch({ type: ActionTypes.medicalServiceAdd, payload: response });
                })
            )
            .catch((err) => {
            });
    };
}
function benificiariesCountGet() {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(`${api}medical/benificiariesCountGet`, { headers })
            .then((res) =>
                res.json().then(async (response) => {
                    dispatch({ type: ActionTypes.benificiariesCountGet, payload: response });
                })
            )
            .catch((err) => {
            });
    };
}

function opdNameGet() {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(`${api}medical/opdNameGet`, { headers })
            .then((res) =>
                res.json().then(async (response) => {
                    dispatch({ type: ActionTypes.opdNameGet, payload: response });
                })
            )
            .catch((err) => {
            });
    };
}

function opdListGet() {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(`${api}medical/opdListGet`, { headers })
            .then((res) =>
                res.json().then(async (response) => {
                    dispatch({ type: ActionTypes.opdListGet, payload: response });
                })
            )
            .catch((err) => {
            });
    };
}
export {
    patientTreatedGet, medicalServiceAdd, benificiariesCountGet, opdNameGet, opdListGet
}