import ActionTypes from "../constant/constant";

const api = "https://swit-app.herokuapp.com/";
// const api = "http://localhost:3000/"

function mediaGet() {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(`${api}media/mediaAllVideoGet`, { headers })
            .then((res) =>
                res.json().then(async (response) => {

                    // allData=response
                    dispatch({ type: ActionTypes.mediaGet, payload: response });
                })
            )
            .catch((err) => {
            });
    };
}

export { mediaGet };