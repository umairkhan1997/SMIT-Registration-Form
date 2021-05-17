import ActionTypes from "../constant/constant";


import api from '../../components/apiList/apiList'

// // const api = "https://swit-app.herokuapp.com/";
// const api = "http://localhost:5000/"


function schoolCampusGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}greenhouse/schoolCampusGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          dispatch({
            type: ActionTypes.schoolCampusGet,
            payload: response.data,
          });
        })
      )
      .catch((err) => {

      });
  };
}

function schoolCountGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}greenhouse/schoolCountGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          dispatch({
            type: ActionTypes.schoolCountGet,
            payload: response.data,
          });
        })
      )
      .catch((err) => {

      });
  };
}

function schoolTeacherGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}greenhouse/schoolTeacherGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          dispatch({
            type: ActionTypes.schoolTeacherGet,
            payload: response.data,
          });
        })
      )
      .catch((err) => {

      });
  };
}

function schoolFeatureGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}greenhouse/schoolFeatureGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          dispatch({
            type: ActionTypes.schoolFeatureGet,
            payload: response.data,
          });
        })
      )
      .catch((err) => {
      });
  };
}

export { schoolCampusGet, schoolCountGet, schoolTeacherGet, schoolFeatureGet };
