import React, { useState, useEffect } from "react";
import axios from "axios";
function OpenForm() {
  const [cityList, setCityList] = useState([
    {
      city: "Select City",
      code: "",
    },
    {
      city: "Karachi",
      code: "KH",
    },
    {
      city: "Faisalabad",
      code: "FA",
    },
    {
      city: "Islamabad",
      code: "IS",
    },
    {
      city: "Hyderabad",
      code: "HD",
    },
    {
      city: "Lahore",
      code: "LA",
    },
    {
      city: "Quetta",
      code: "QA",
    },
  ]);
  const [courseList, setCourseList] = useState([
    {
      course: "Select Course",
      code: "",
    },
    {
      course: "Web and Mobile",
      code: "01",
    },
    {
      course: "AI and Chatbot",
      code: "23",
    },
    {
      course: "Graphic Designing",
      code: "02",
    },
    {
      course: "IT Essential",
      code: "03",
    },
    {
      course: "Textile Training",
      code: "04",
    },
    {
      course: "Certified Computerized Accountancy",
      code: "05",
    },
    {
      course: "Cyber Security",
      code: "06",
    },
    {
      course: "Mobile Repairing",
      code: "07",
    },
    {
      course: "CCNA",
      code: "08",
    },
    {
      course: "Video Editing",
      code: "09",
    },

    {
      course: "Network Essential",
      code: "10",
    },
    {
      course: "Microsoft Office Specialist",
      code: "11",
    },
    {
      course: "CCA",
      code: "12",
    },
    {
      course: "CCO",
      code: "12",
    },
    {
      course: "Artificial Intellegence",
      code: "13",
    },
    {
      course: "Cloud Native",
      code: "14",
    },
    {
      course: "Internet of things",
      code: "15",
    },
    {
      course: "Blockchain technology",
      code: "16",
    },
    {
      course: "Advance Dashboard",
      code: "17",
    },
    {
      course: "Digital Marketing",
      code: "18",
    },
    {
      course: "Robotics",
      code: "19",
    },
    {
      course: "Database Administration",
      code: "20",
    },
    {
      course: "Bike repairing",
      code: "21",
    },
    {
      course: "RO Plant",
      code: "22",
    },

  ]);
  const [city, setCity] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [courseDura, setCourseDura] = useState("");
  const [courseStatus, setCourseStatus] = useState("");
  const [courseId, setCourseId] = useState("");
  const [year, setYear] = useState("21");
  const [cityCode, setCityCode] = useState("");
  const [gender, setGender] = useState("");
  const [chkGender, setChkGender] = useState(false)
  const [genderArr, setGenderArr] = useState([]);
  const [address, setAddress] = useState("");
  const [chkAddress, setChkAddress] = useState(false)
  const [chkCity, setChkCity] = useState(false)
  const [chkCourse, setChkCourse] = useState(false)
  const [chkBatch, setChkbatch] = useState(false)
  const [chkLastDate, setChkLastDate] = useState(false)
  const [chkCourseStatus, setChkCourseStatus] = useState(false)
  const [chkCourseDura, setChkCourseDura] = useState(false)
  const [loading, setLoading] = useState(false);

  const setCityData = (e) => { setCity(cityList[e]['city']); setCityCode(cityList[e]['code']) }
  const setCourseData = (e) => { setCourse(courseList[e]['course']); setCourseId(courseList[e]['code']) };

  const addCourse = () => {
    setLoading(true);
    if (!city || city == "Select City") {
      setLoading(false);
      setChkCity(true)
    }
    else if (!course || course == "Select Course") {
      setLoading(false);
      setChkCourse(true)
    }
    else if (!batch) {
      setLoading(false);
      setChkbatch(true)
    }
    else if (!lastDate) {
      setLoading(false);
      setChkLastDate(true)
    }
    else if (!courseDura) {
      setLoading(false);
      setChkCourseDura(true)
    }
    else if (!courseStatus) {
      setLoading(false);
      setChkCourseStatus(true)
    }
    else if (genderArr.length == 0) {
      setLoading(false);
      setChkGender(true)
    }
    else if (!address) {
      setLoading(false);
      setChkAddress(true)
    }
    else {
      const obj = {
        cityName: city,
        courseName: course,
        batchName: batch,
        viewForm: courseStatus,
        courseId,
        year,
        duration: courseDura,
        admissionLastDate: lastDate, cityCode,
        gender: genderArr,
        address
      };
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        data: obj,
        url: "https://swit-app.herokuapp.com/smit/SaylaniNotificationAdd",
      };
      axios(options)
        .then((res) => {
          setLoading(false);
          alert('Course Added Successfully');
          setCity("")
          setCourse("")
          setBatch("")
          setLastDate("")
          setCourseDura("")
          setCourseStatus("")
          setCourseId("")
          setCityCode("")
          setGenderArr([]);
          setAddress('')
        })
        .catch((err) => {
          setLoading(false);
          alert('Course Not Added Successfully')
        });
    }
  }
  const addGenderSlots = () => {
    if (!gender) {
      setChkGender(true)
    }
    else {
      // console.log(gender);
      setGenderArr([...genderArr, gender]);
      setGender('');

    }
  }

  const editGender = (ind) => {
    let arr = genderArr;
    arr.splice(ind, 1)
    setGenderArr(arr);
  }


  // console.log(gender, genderArr, 'asdhask');




  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 p-5 text-white text-center">
          <h1 className="color title">Open New Course Admissions</h1>
        </div>
        <div className="col-md-6 py-3">
          <p className="color title">Select City</p>
          <select className="inp" onChange={(e) => { setCityData(e.target.value); setChkCity(false) }} value={city}>
            {cityList.map((e, i) => {
              return <option key={i} value={i}>{e.city.charAt(0).toUpperCase() + e.city.slice(1)}</option>;
            })}
          </select>
          {chkCity ? (
            <p className="text-danger">Select City</p>
          ) : null}
        </div>
        <div className="col-md-6 py-3">
          <p className="color title">Select Course</p>
          <select className="inp" onChange={(e) => { setCourseData(e.target.value); setChkCourse(false) }} value={course}>
            {courseList.map((e, i) => {
              return <option key={i} value={i}>{e.course.charAt(0).toUpperCase() + e.course.slice(1)}</option>;
            })}
          </select>
          {chkCourse ? (
            <p className="text-danger">Select Course</p>
          ) : null}
        </div>
        <div className="col-md-6 py-3">
          <p className="color title">Enter Batch Number</p>
          <input
            type="number"
            value={batch}
            className="inp"
            placeholder="Enter Batch Number 01"
            onChange={(e) => { setBatch(e.target.value); setChkbatch(false) }}
          />
          {chkBatch ? (
            <p className="text-danger">Enter Batch No Like 01</p>
          ) : null}
        </div>
        <div className="col-md-6 py-3">
          <p className="color title">Last Date of Admission</p>
          <input type="date" value={lastDate} className="inp" placeholder="Enter Batch Number" onChange={(e) => { setLastDate(e.target.value); setChkLastDate(false) }} />
          {chkLastDate ? (
            <p className="text-danger">Enter Date</p>
          ) : null}
        </div>
        <div className="col-md-12 py-3">
          <div className="row">
            <div className="col-md-6">
              <p className="color title">Course Duration</p>
              <select className="inp" onChange={(e) => { setCourseDura(e.target.value); setChkCourseDura(false) }} value={courseDura} >
                <option value="">Select Month</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
              {chkCourseDura ? (
                <p className="text-danger">Select Duration</p>
              ) : null}
            </div>
            <div className="col-md-6">
              <p className="color title"> Course Status</p>
              <select className="inp" onChange={(e) => { setCourseStatus(e.target.value); setChkCourseStatus(false) }} value={courseStatus}>
                <option value="">Select Status</option>
                <option value={true}>Open</option>
                <option value={false}>Closed</option>
              </select>
              {chkCourseStatus ? (
                <p className="text-danger">Select Course Status</p>
              ) : null}
            </div>
          </div>

          {/* STARTING */}
          <div>

            <div className="col-md-5 py-3 row">
              <div className="col-md-10">

                <p className="color title">Add Gender</p>
                <input type="text"
                  value={gender}
                  className="inp" placeholder="Enter Gender"
                  onChange={(e) => { setGender(e.target.value); }}
                />
              </div>
              <div className="col-md-2">
                <button className="btn btn-success"
                  onClick={() => { addGenderSlots(); setChkGender(false) }}
                  style={{ width: 80, height: 48, marginTop: 45 }}
                >Add</button>
              </div>
              {chkGender ? (
                <p className="text-danger">Enter Gender</p>
              ) : null}
            </div>
            <div className="col-md-10">
              <p className="color title">Gender List</p>
              <div className="row ">
                {
                  genderArr && genderArr.map((val, ind) => {
                    return <span key={ind} className='row' style={{ marginRight: 10 }}><li className="mr-2 mt-3">{ind + 1}) {val}</li><i
                      onClick={() => { editGender(ind) }}
                      className="fa fa-times mr-4 mt-4 " style={{ color: 'red', fontSize: 10 }} aria-hidden="true"></i></span>
                  })
                }
              </div>
              {/* setState({...state,courseSlots:state.courseSlots.slice(state.courseSlots.indexOf(val, 1))}) */}
            </div>
          </div>
          {/* ENDING */}
          <div className="row">
            <div className="col-md-6 py-3">
              <p className="color title">Enter Address</p>
              <input
                type="text"
                value={address}
                className="inp"
                placeholder="Enter Address"
                onChange={(e) => { setAddress(e.target.value); setChkAddress(false) }}
              />
              {chkAddress ? (
                <p className="text-danger">Enter Address</p>
              ) : null}
            </div>
            <div className="mt-5 ml-5" >
              {loading ? (
                <div
                  className="spinner-border"
                  role="status"
                >
                  <span className="visually-hidden"></span>
                </div>
              ) : (
                  <button className="prevbtn" style={{ width: 150, height: 40, marginTop: 20 }} onClick={() => { addCourse() }} >add Course</button>
                )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default OpenForm;
