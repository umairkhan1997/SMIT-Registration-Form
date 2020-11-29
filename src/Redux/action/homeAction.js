import ActionTypes from "../constant/constant";

const api = "http://localhost:3000/"


function homeSlideImg() {
  var allData;
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}home/homeSliderImgGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          console.log(response, "data");
          // allData=response
          dispatch({ type: ActionTypes.homeSlideImg, payload: response });
        })
      )
      .catch((err) => {
        console.log(err, "err");
      });
  };
}

function homeIntroGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}home/homeIntroGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          console.log(response, "data");
          dispatch({ type: ActionTypes.homeIntro, payload: response });
        })
      )
      .catch((err) => {
        console.log(err, "err");
      });
  };
}


function projectCat() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}project/allProjectCategoryGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          console.log(response, "data");
          dispatch({ type: ActionTypes.projectCat, payload: response });
        })
      )
      .catch((err) => {
        console.log(err, "err");
      });
  };
}


function bookAllCat() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}Books/BooksAllGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          console.log(response, "data");
          dispatch({ type: ActionTypes.bookAllCat, payload: response });
        })
      )
      .catch((err) => {
        console.log(err, "err");
      });
  };
}


const onlineMasajidForm = (obj) => {
  return async function (dispatch) {
    try {
      await fetch("http://localhost:3000/OnlineMasjidReg/OnlineMasjidRegAdd", {
        method: "POST",
        body: JSON.stringify({
          stdName: obj.stdName,
          fthName: obj.fthName,
          stnAge: obj.stnAge,
          stnDob: obj.stnDob,
          stnGen: obj.stnGen,
          stnCour: obj.stnCour,
          stnEmail: obj.stnEmail,
          stnSkype: obj.stnSkype,
          stnNumber: obj.stnNumber,
          stnWtsApp: obj.stnWtsApp,
          stnImgUrl: obj.stnImgUrl,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) =>
          res.json().then(async (response) => {
            console.log(response, "data");
            dispatch({ type: ActionTypes.onlineMasajidForms, payload: true });
          })
        )
        .catch((err) => {
          console.log(err, "err");
        });

    } catch (err) {
      console.error(err);
    }
  }
}

const onlineQuranPakForm = (obj) => {
  return async function (dispatch) {
    try {
      await fetch("http://localhost:3000/OnlineQuranReg/OnlineQuranRegAdd", {
        method: "POST",
        body: JSON.stringify({
          stdName: obj.stdName,
          fthName: obj.fthName,
          stnAge: obj.stnAge,
          stnDob: obj.stnDob,
          stnGen: obj.stnGen,
          stnCour: obj.stnCour,
          stnEmail: obj.stnEmail,
          stnSkype: obj.stnSkype,
          stnNumber: obj.stnNumber,
          stnWtsApp: obj.stnWtsApp,
          stnImgUrl: obj.stnImgUrl,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) =>
          res.json().then(async (response) => {
            console.log(response, "data");
            dispatch({ type: ActionTypes.onlineQuranPakForms, payload: true });
          })
        )
        .catch((err) => {
          console.log(err, "err");
        });

    } catch (err) {
      console.error(err);
    }
  }
}

export { homeSlideImg, homeIntroGet, projectCat, bookAllCat, onlineMasajidForm, onlineQuranPakForm };
