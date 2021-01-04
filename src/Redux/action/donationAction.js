import ActionTypes from "../constant/constant";


const api = "https://swit-app.herokuapp.com/";
// const api = "http://localhost:3000/"


function DonaListGet() {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(`${api}donation/DonaListGet`, { headers })
            .then((res) =>
                res.json().then(async (response) => {
                    console.log(response, "data");
                    dispatch({ type: ActionTypes.DonaListGet, payload: response.data });
                })
            )
            .catch((err) => {
                console.log(err, "err");
            });
    };
}

export { DonaListGet };