import ActionTypes from "../constant/constant";
const api = "https://swit-app.herokuapp.com/";
const istikharaAdd = (obj) => {
    return async function (dispatch) {
        try {
            await fetch(`${api}OnlineIsthikhara/OnlineIsthikharaAdd`, {
                method: "POST",
                body: JSON.stringify({

                    istType: obj.istType,
                    maleName: obj.maleName,
                    maleMotName: obj.maleMotName,
                    femName: obj.thisfemName,
                    femMotName: obj.femMotName,
                    contact: obj.contact,
                    istDetail: obj.istDetail,
                }),
                headers: { "Content-Type": "application/json" },
            })
                .then((res) =>
                    res.json().then(async (response) => {
                        //   dispatch({ type: ActionTypes.onlineMasajidForms, payload: true });
                    })
                )
                .catch((err) => {
                });
        } catch (err) {
        }
    };
};


export { istikharaAdd };