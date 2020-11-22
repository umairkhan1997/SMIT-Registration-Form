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

export { homeSlideImg };
