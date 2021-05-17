import ActionTypes from "../constant/constant";

import api from '../../components/apiList/apiList'

// // const api = "https://swit-app.herokuapp.com/";
// const api = "http://localhost:5000/"

function roPlantBranchGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}roPlant/RoPlantBranchGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          // allData=response
          dispatch({ type: ActionTypes.roPlantBranchGet, payload: response });
        })
      )
      .catch((err) => {
      });
  };
}

function RoPlantEstiCostGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}roPlant/RoPlantEstiCostGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          // allData=response
          dispatch({ type: ActionTypes.RoPlantEstiCostGet, payload: response });
        })
      )
      .catch((err) => {
      });
  };
}

function RoPlantLocationGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}roPlant/RoPlantLocationGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          // allData=response
          dispatch({ type: ActionTypes.RoPlantLocationGet, payload: response });
        })
      )
      .catch((err) => {
      });
  };
}

export { roPlantBranchGet, RoPlantEstiCostGet, RoPlantLocationGet };
