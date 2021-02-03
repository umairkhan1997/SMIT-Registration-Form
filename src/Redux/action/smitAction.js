import ActionTypes from "../constant/constant";
import axios from 'axios';

const api = "https://swit-app.herokuapp.com/";
// const api = "http://localhost:3000/"

// const api = "https://swit-app.herokuapp.com/";
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

function smitFacultyGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}smit/smitTeachersGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          // console.log(response, "data");
          dispatch({ type: ActionTypes.smitFacultyGet, payload: response });
        })
      )
      .catch((err) => {
        console.log(err, "err");
      });
  };
}

function smitFacultyCourseGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}smit/smitFacultyCourseGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          // console.log(response, "data");
          dispatch({
            type: ActionTypes.smitFacultyCourseGet,
            payload: response,
          });
        })
      )
      .catch((err) => {
        console.log(err, "err");
      });
  };
}

function SmitCollaborationGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}smit/SmitCollaborationGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          // console.log(response, "data");
          dispatch({
            type: ActionTypes.SmitCollaborationGet,
            payload: response,
          });
        })
      )
      .catch((err) => {
        console.log(err, "err");
      });
  };
}

function smitWorkshopGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}smit/smitWorkshopGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          // console.log(response, "data");
          dispatch({ type: ActionTypes.smitWorkshopGet, payload: response });
        })
      )
      .catch((err) => {
        console.log(err, "err");
      });
  };
}

function SmitCounGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}smit/SmitCounGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          // console.log(response, "data");
          dispatch({ type: ActionTypes.SmitCounGet, payload: response });
        })
      )
      .catch((err) => {
        console.log(err, "err");
      });
  };
}

function smitSuccessStoriesGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}smit/smitSuccessStoriesGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          // console.log(response, "data");
          dispatch({ type: ActionTypes.SmitsucessGet, payload: response });
        })
      )
      .catch((err) => {
        console.log(err, "err");
      });
  };
}

function smitCoursesGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}smit/smitCoursesGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          console.log(response, "data");
          dispatch({ type: ActionTypes.smitCoursesGet, payload: response });
        })
      )
      .catch((err) => {
        console.log(err, "err");
      });
  };
}

function stdData(e,a,b,c){
  console.log(e,a,b,c,'action aaaaaaaa')
  return (dispatch)=>{
    dispatch({ type: ActionTypes.stdData, payload: e,data:a,b:b,c:c });
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
  stdData
};
