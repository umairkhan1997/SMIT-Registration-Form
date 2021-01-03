import ActionTypes from "../constant/constant";

// const api = "https://swit-app.herokuapp.com/";
const api = "http://localhost:3000/";

function QuranAppAndroidGet() {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(`${api}QuranAppTaf/QuranAppAndroidGet`, { headers })
            .then((res) =>
                res.json().then(async (response) => {
                    console.log(response, "data");
                    // allData=response
                    dispatch({ type: ActionTypes.QuranAppAndroidGet, payload: response.data });
                })
            )
            .catch((err) => {
                console.log(err, "err");
            });
    };
}

function QuranAppIosGet() {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(`${api}QuranAppTaf/QuranAppIosGet`, { headers })
            .then((res) =>
                res.json().then(async (response) => {
                    console.log(response, "data");
                    // allData=response
                    dispatch({ type: ActionTypes.QuranAppIosGet, payload: response.data });
                })
            )
            .catch((err) => {
                console.log(err, "err");
            });
    };
}



export { QuranAppAndroidGet, QuranAppIosGet };
