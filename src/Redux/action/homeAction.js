import ActionTypes from "../constant/constant";

function homeSlideImg() {
  var allData;
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:3000/home/homeSliderImgGet", { headers })
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
    fetch("http://localhost:3000/home/homeIntroGet", { headers })
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
    fetch("http://localhost:3000/project/allProjectCategoryGet", { headers })
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

export { homeSlideImg, homeIntroGet, projectCat };
