import ActionTypes from "../constant/constant";
import api from '../../components/apiList/apiList'

// // const api = "https://swit-app.herokuapp.com/";
// const api = "http://localhost:5000/"



function smitNotificationGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}smit/smitNotificationGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          dispatch({ type: ActionTypes.smitNotificationGet, payload: response });
        })
      )
      .catch((err) => {
      });
  };
}

function smitFacultyGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}smit/smitTeachersGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          dispatch({ type: ActionTypes.smitFacultyGet, payload: response });
        })
      )
      .catch((err) => {
      });
  };
}

function smitFacultyCourseGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}smit/smitFacultyCourseGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          dispatch({
            type: ActionTypes.smitFacultyCourseGet,
            payload: response,
          });
        })
      )
      .catch((err) => {
      });
  };
}

function SmitCollaborationGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}smit/SmitCollaborationGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          dispatch({
            type: ActionTypes.SmitCollaborationGet,
            payload: response,
          });
        })
      )
      .catch((err) => {
      });
  };
}

function smitWorkshopGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}smit/smitWorkshopGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          dispatch({ type: ActionTypes.smitWorkshopGet, payload: response });
        })
      )
      .catch((err) => {
      });
  };
}

function SmitCounGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}smit/SmitCounGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          dispatch({ type: ActionTypes.SmitCounGet, payload: response });
        })
      )
      .catch((err) => {
      });
  };
}

function smitSuccessStoriesGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}smit/smitSuccessStoriesGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          dispatch({ type: ActionTypes.SmitsucessGet, payload: response });
        })
      )
      .catch((err) => {

      });
  };
}

function smitCoursesGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}smit/smitCoursesGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          dispatch({ type: ActionTypes.smitCoursesGet, payload: response });
        })
      )
      .catch((err) => {
      });
  };
}

function stdData(e, a, b, c, d) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.stdData, payload: e, data: a, b: b, c: c, d: d });
  }
}

function searchStdData(data) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.searchStdData, payload: data });
  }
}

export {
  smitCoursesGet,
  smitNotificationGet,
  smitFacultyGet,
  smitFacultyCourseGet,
  SmitCollaborationGet,
  smitWorkshopGet,
  SmitCounGet,
  smitSuccessStoriesGet,
  stdData,
  searchStdData
};
