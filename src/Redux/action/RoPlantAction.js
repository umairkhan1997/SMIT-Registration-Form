import ActionTypes from "../constant/constant";

const api = "https://swit-app.herokuapp.com/";
// const api = "http://localhost:3000/"

function roPlantBranchGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}roPlant/RoPlantBranchGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          console.log(response, "data");
          // allData=response
          dispatch({ type: ActionTypes.roPlantBranchGet, payload: response });
        })
      )
      .catch((err) => {
        console.log(err, "err");
      });
  };
}

function RoPlantEstiCostGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}roPlant/RoPlantEstiCostGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          console.log(response, "data");
          // allData=response
          dispatch({ type: ActionTypes.RoPlantEstiCostGet, payload: response });
        })
      )
      .catch((err) => {
        console.log(err, "err");
      });
  };
}

function RoPlantLocationGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}roPlant/RoPlantLocationGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          console.log(response, "data");
          // allData=response
          dispatch({ type: ActionTypes.RoPlantLocationGet, payload: response });
        })
      )
      .catch((err) => {
        console.log(err, "err");
      });
  };
}

export { roPlantBranchGet, RoPlantEstiCostGet, RoPlantLocationGet };
