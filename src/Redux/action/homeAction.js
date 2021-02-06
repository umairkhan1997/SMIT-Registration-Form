import ActionTypes from "../constant/constant";
import axios from 'axios';

const api = "https://swit-app.herokuapp.com/";
// const api = "http://localhost:3000/"


function jobFormSubmit(e) {
  return (dispatch) => {
    var formData = new FormData();
    for (const key of Object.keys(e.imgCollection)) {
      formData.append('imgCollection', e.imgCollection[key])
    }
    formData.append('fullName', e.fullName)
    formData.append('fatherName', e.fatherName)
    formData.append('occupation', e.occupation)
    formData.append('age', e.age)
    formData.append('favourite', false)
    formData.append('placeOfBirth', e.placeOfBirth)
    formData.append('date', e.date)
    formData.append('gender', e.gender)
    formData.append('nationality', e.nationality)
    formData.append('religion', e.religion)
    formData.append('cnic', e.cnic)
    formData.append('telNumber', e.telNumber)
    formData.append('mobNumber', e.mobNumber)
    formData.append('martialStatus', e.martialStatus)
    formData.append('residentType', e.residentType)
    formData.append('monthlyRent', e.monthlyRent)
    formData.append('disability', e.disability)
    formData.append('address', e.address)
    formData.append('jobExperience', e.jobExperience)
    formData.append('schoolName', e.schoolName)
    formData.append('schoolYeComp', e.schoolYeComp)
    formData.append('schoolMajCor', e.schoolMajCor)
    formData.append('schoolDegree', e.schoolDegree)
    formData.append('imgCollection', e.imgCollection)
    formData.append('SecondHighName', e.SecondHighName)
    formData.append('SecondYeComp', e.SecondYeComp)
    formData.append('SecondMajCor', e.SecondMajCor)
    formData.append('SecondDegree', e.SecondDegree)
    formData.append('colUniName', e.colUniName)
    formData.append('colUniYeComp', e.colUniYeComp)
    formData.append('colUniMajCor', e.colUniMajCor)
    formData.append('colUniDegree', e.colUniDegree)
    formData.append('instName', e.instName)
    formData.append('instYeComp', e.instYeComp)
    formData.append('instMajCor', e.instMajCor)
    formData.append('instDegree', e.instDegree)
    axios.post("http://localhost:3000/JobBank/jobBankFormAdd", formData, {
    }).then(res => {

    }).catch((err) => {

    })
  }
}


const jobOffFormSubmit = (obj) => {
  return async function (dispatch) {
    try {
      await fetch(`${api}JobBank/JobBankOffFormAdd`, {
        method: "POST",
        body: JSON.stringify({

          comName: obj.comName,
          natJob: obj.natJob,
          location: obj.location,
          approxSalary: obj.approxSalary,
          timePeriod: obj.timePeriod,
          hrContact: obj.hrContact,
          selectJbTyp: obj.selectJbTyp,
          approxDur: obj.approxDur,
          expReq: obj.expReq,
          jobDes: obj.jobDes,
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




function homeSlideImg() {
  var allData;
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}home/homeSliderImgGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          // allData=response
          dispatch({ type: ActionTypes.homeSlideImg, payload: response });
        })
      )
      .catch((err) => {
      });
  };
}

function homeIntroGet() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}home/homeIntroGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          dispatch({ type: ActionTypes.homeIntro, payload: response });
        })
      )
      .catch((err) => {
      });
  };
}

function projectCat() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}project/allProjectCategoryGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          dispatch({ type: ActionTypes.projectCat, payload: response });
        })
      )
      .catch((err) => {
      });
  };
}

function fieldEmpty() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.fieldEmpty });
  };
}

function getAllNews(a, b, e) {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };

    fetch(`${api}news/SaylaniNewsGet?page=${a}&&limit=${b}&&date=${e}`, {
      headers,
    })
      .then((res) =>
        res.json().then(async (response) => {
          dispatch({ type: ActionTypes.SaylaniNewsGet, payload: response });
        })
      )
      .catch((err) => {
      });
  };
}
function getAllHomeNews(a, b, e) {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };

    fetch(`${api}news/SaylaniNewsGet?page=${a}&&limit=${b}&&date=${e}`, {
      headers,
    })
      .then((res) =>
        res.json().then(async (response) => {
          dispatch({ type: ActionTypes.SaylaniHomeNewsGet, payload: response });
        })
      )
      .catch((err) => {
      });
  };
}

function getAllNewsSorted(e) {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };

    fetch(`${api}news/SaylaniNewsGet?date=${e}`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          if (response.result.length === 0) {
          } else {
            dispatch({ type: ActionTypes.SaylaniNewsGet, payload: response });
          }
        })
      )
      .catch((err) => {
      });
  };
}

function bookAllCat() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}Books/BooksAllGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          dispatch({ type: ActionTypes.bookAllCat, payload: response });
        })
      )
      .catch((err) => {
      });
  };
}
function bookAllSpec() {
  return (dispatch) => {
    const headers = { "Content-Type": "application/json" };
    fetch(`${api}Books/BookSpecialGet`, { headers })
      .then((res) =>
        res.json().then(async (response) => {
          dispatch({ type: ActionTypes.bookAllSpe, payload: response });
        })
      )
      .catch((err) => {
      });
  };
}

const onlineMasajidForm = (obj) => {
  return async function (dispatch) {
    try {
      await fetch("http://localhost:3000/OnlineMasjidReg/OnlineMasjidRegAdd", {
        method: "POST",
        body: JSON.stringify({
          stdName: obj.stdName,
          fthName: obj.fthName,
          stnAge: obj.stnAge,
          stnDob: obj.stnDob,
          stnGen: obj.stnGen,
          stnCour: obj.stnCour,
          stnEmail: obj.stnEmail,
          stnSkype: obj.stnSkype,
          stnNumber: obj.stnNumber,
          stnWtsApp: obj.stnWtsApp,
          stnImgUrl: obj.stnImgUrl,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) =>
          res.json().then(async (response) => {
            dispatch({ type: ActionTypes.onlineMasajidForms, payload: true });
          })
        )
        .catch((err) => {
        });
    } catch (err) {
    }
  };
};

const onlineQuranPakForm = (obj) => {
  return async function (dispatch) {
    try {
      await fetch("http://localhost:3000/OnlineQuranReg/OnlineQuranRegAdd", {
        method: "POST",
        body: JSON.stringify({
          stdName: obj.stdName,
          fthName: obj.fthName,
          stnAge: obj.stnAge,
          stnDob: obj.stnDob,
          stnGen: obj.stnGen,
          stnCour: obj.stnCour,
          stnEmail: obj.stnEmail,
          stnSkype: obj.stnSkype,
          stnNumber: obj.stnNumber,
          stnWtsApp: obj.stnWtsApp,
          stnImgUrl: obj.stnImgUrl,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) =>
          res.json().then(async (response) => {
            dispatch({ type: ActionTypes.onlineQuranPakForms, payload: true });
          })
        )
        .catch((err) => {
        });
    } catch (err) {
    }
  };
};

export {
  homeSlideImg,
  homeIntroGet,
  projectCat,
  bookAllCat,
  onlineMasajidForm,
  onlineQuranPakForm,
  bookAllSpec,
  getAllNews,
  getAllNewsSorted,
  fieldEmpty,
  jobFormSubmit,
  jobOffFormSubmit,
  getAllHomeNews
};
