import ActionTypes from "../constant/constant";
import api from '../../components/apiList/apiList'

// // const api = "https://swit-app.herokuapp.com/";
// const api = "http://localhost:5000/"


function DonaListGet() {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(`${api}donation/DonaListGet`, { headers })
            .then((res) =>
                res.json().then(async (response) => {

                    dispatch({ type: ActionTypes.DonaListGet, payload: response.data });
                })
            )
            .catch((err) => {

            });
    };
}

export { DonaListGet };
