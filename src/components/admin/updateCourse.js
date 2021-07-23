import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPen, FaToggleOff, FaToggleOn, FaPlus } from "react-icons/fa";
import { GoTrashcan } from "react-icons/go";
import Modal from "react-awesome-modal";
function UpdateForm() {


    const [cityList, setCityList] = useState([
        {
            city: "Select City",
            code: "",
        },
        {
            city: "karachi",
            code: "KH",
        },
        {
            city: "faisalabad",
            code: "FA",
        },
        {
            city: "islamabad",
            code: "IS",
        },
        {
            city: "hyderabad",
            code: "HD",
        },
        {
            city: "lahore",
            code: "LA",
        },
        {
            city: "quetta",
            code: "QA",
        },
    ]);
    const [courseLists, setCourseLists] = useState([
        {
            course: "Select Course",
            code: "",
        },
        {
            course: "Web And Mobile",
            code: "01",
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
    const [courseList, setCourseList] = useState([]);
    const [visible, setVisible] = useState(false);
    const [currentCourse, setCurrentCourse] = useState({});
    const [city, setCity] = useState("");
    const [course, setCourse] = useState("");
    const [batch, setBatch] = useState("");
    const [lastDate, setLastDate] = useState("");
    const [courseDura, setCourseDura] = useState("");
    const [courseStatus, setCourseStatus] = useState("");
    const [courseId, setCourseId] = useState("");
    const [year, setYear] = useState("21");
    const [cityCode, setCityCode] = useState("");

    const getCourseDetails = () => {
        axios
            .get("https://swit-app.herokuapp.com/smit/smitNotificationGet")
            .then((res) => {
                console.log(res);
                setCourseList(res.data.data);
            })
            .catch((err) => {
                console.log(err, 'err')
            })
            ;
    }

    useEffect(() => {
        getCourseDetails()
    }, [])

    const editCourse = (e) => {
        console.log(e, 'eee')
        setCurrentCourse(e);
        setVisible(true);
    }
    function saveCourse() {
        // const obj = {
        //     _id: e._id
        // };
        const options = {
            method: "PUT",
            headers: {
                Accept: "application/json",
            },
            data: currentCourse,
            url: "https://swit-app.herokuapp.com/smit/smitUpdateCourseAnounce",
        };
        axios(options)
            .then((res) => {
                console.log(res)
                alert('Course Updated Successfully');
                setVisible(false);
                getCourseDetails()
                setCurrentCourse({})
            })
            .catch((err) => {
                setVisible(false);
                alert('Course Not Updated Successfully')
                setCurrentCourse({})
            });
        //https://hbrm-lms.herokuapp.com/course/updateCourseAnounce
        // let api = "https://hbrm-lms.herokuapp.com/course/updateCourseAnounce";
        // axios.put(api, currentCourse).then((res) => {
        //   console.log("Updated", res);

        // });
        // console.log(currentCourse);
    }
    const deleteCourse = (e) => {
        const obj = {
            _id: e._id
        };
        const options = {
            method: "DELETE",
            headers: {
                Accept: "application/json",
            },
            data: obj,
            url: "https://swit-app.herokuapp.com/smit/smitDeleteCourseAnounce",
        };
        axios(options)
            .then((res) => {
                alert('Course Deleted Successfully');
                getCourseDetails()
            })
            .catch((err) => {
                alert('Course Not Deleted Successfully')
            });
    }
    console.log(currentCourse, 'courseList')
    return (
        <div>
            <div className="container">
                <div style={{ textAlign: "left" }} className="p-3">
                    <div className="d-flex justify-content-between py-3">
                        <h2 className="color title">Courses Detail</h2>
                        {/* <button
              onClick={() => addCourse()}
              className="btn btn-info rounded-pill"
            >
              <FaPlus />
            </button> */}
                    </div>
                    <div className="row">
                        {courseList && courseList.map((e, i) => {
                            return (

                                <div className="col-md-6 py-2">
                                    <div className="rounded border border-info shadow p-4">
                                        <h5 className="color text-decoration-underline">
                                            {e.courseName}{" "}
                                            <br />
                                            <span className="fs-5">Batch: {e.batchName}</span>
                                        </h5>
                                        <p></p>
                                        <p>City: {e.cityName}</p>
                                        <h6 style={{ textAlign: 'left' }}>Duration: {e.duration}</h6>
                                        <div className="bg-light p-3 shadow rounded d-flex justify-content-between">
                                            <div>
                                                <h5 className="mt-3">
                                                    Status : {e.viewForm ? "Open" : 'Closed'}
                                                </h5>
                                            </div>
                                            <h4>
                                                <button
                                                    className="btn btn-info shadow"
                                                    onClick={() => editCourse(e)}
                                                >
                                                    <FaPen />
                                                </button>
                                                <button
                                                    className="btn btn-danger shadow ml-1"
                                                    onClick={() => deleteCourse(e)}
                                                >
                                                    <GoTrashcan />
                                                </button>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Modal
                    visible={visible}
                    width="600"
                    effect="fadeInUp"
                    onClickAway={() => setVisible(false)}
                >
                    <div className="p-3">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="color title my-2">Course Name</p>
                                <input
                                    value={
                                        currentCourse.courseName
                                    }
                                    className="form-control"
                                    onChange={(e) => {
                                        setCurrentCourse({ ...currentCourse, courseName: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <p className="color title my-2">City Name</p>
                                <input
                                    className="form-control"
                                    value={
                                        currentCourse.cityName
                                    }
                                    onChange={(e) => {
                                        // currentCourse.courseName = e.target.value;
                                        setCurrentCourse({ ...currentCourse, cityName: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <p className="color title my-2">Course Code</p>
                                <input
                                    className="form-control"
                                    value={
                                        currentCourse.courseId
                                    }
                                    onChange={(e) => {
                                        // currentCourse.courseName = e.target.value;
                                        setCurrentCourse({ ...currentCourse, courseId: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <p className="color title my-2">City Code</p>
                                <input
                                    className="form-control"
                                    value={
                                        currentCourse.cityCode
                                    }
                                    onChange={(e) => {
                                        // currentCourse.courseName = e.target.value;
                                        setCurrentCourse({ ...currentCourse, cityCode: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <p className="color title my-2">Course Duration</p>
                                <input
                                    className="form-control"
                                    value={
                                        currentCourse.duration
                                    }
                                    onChange={(e) => {
                                        // currentCourse.courseName = e.target.value;
                                        setCurrentCourse({ ...currentCourse, duration: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <p className="color title my-2">Batch Name</p>
                                <input
                                    className="form-control"
                                    value={
                                        currentCourse.batchName
                                    }
                                    onChange={(e) => {
                                        // currentCourse.courseName = e.target.value;
                                        setCurrentCourse({ ...currentCourse, batchName: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <p className="color title my-2">Course Year</p>
                                <input
                                    className="form-control"
                                    value={
                                        currentCourse.year
                                    }
                                    onChange={(e) => {
                                        // currentCourse.courseName = e.target.value;
                                        setCurrentCourse({ ...currentCourse, year: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <p className="color title my-2">Course Year</p>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={
                                        currentCourse.admissionLastDate
                                    }
                                    onChange={(e) => {
                                        // currentCourse.courseName = e.target.value;
                                        setCurrentCourse({ ...currentCourse, admissionLastDate: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <p className="color title my-2">Course Status</p>
                                <div className="col-md-6">
                                    {currentCourse.viewForm ? (
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => {

                                                setCurrentCourse({ ...currentCourse, viewForm: false });
                                            }}
                                            buttonValue="Close Registration"
                                        >
                                            Open
                                        </button>
                                    ) : (
                                            <button
                                                className="btn btn-danger"

                                                onClick={() => {
                                                    setCurrentCourse({ ...currentCourse, viewForm: true });
                                                }}
                                                buttonValue="Open Registration"
                                            >
                                                Closed
                                            </button>
                                        )}
                                </div>
                            </div>
                        </div>
                        <div className="py-2 d-flex justify-content-between mt-5">
                            <button value="Save" className="btn btn-secondary" onClick={() => setVisible(false)} >
                                Cancel
                                </button>
                            <button value="Save" className="btn btn-success" onClick={() => saveCourse()} >
                                Update
                                </button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default UpdateForm;