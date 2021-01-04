import ActionTypes from "../constant/constant";
import axios from 'axios';

const api = "https://swit-app.herokuapp.com/";
// const api = "http://localhost:3000/"


function smitNotificationGet() {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(`${api}smit/smitNotificationGet`, { headers })
            .then((res) =>
                res.json().then(async (response) => {
                    console.log(response, "data");
                    dispatch({ type: ActionTypes.smitNotificationGet, payload: response });
                })
            )
            .catch((err) => {
                console.log(err, "err");
            });
    };
}

export {
    smitNotificationGet
}