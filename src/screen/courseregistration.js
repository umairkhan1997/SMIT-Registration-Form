import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import "./course.css";
import MainHeader from "../components/Home/MainHeader";
import axios from "axios";
import { connect } from "react-redux";
import { stdData } from "../Redux/action/smitAction";
import { withRouter } from "react-router";
import AdmitCard from "./admitCard";
import { smitNotificationGet } from "../Redux/action/smitAction";
import LOGO from "../images/logo.jpg";
import { slideInRight, slideInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";
class CourseRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: true,
      fullName: "",
      gender: "",
      fatherName: "",
      ContactNumber: "",
      cnic: "",
      fatherCnic: "",
      email: "",
      dob: "",
      address: "",
      lastQualification: "",
      chkfullName: false,
      chkgender: false,
      chkfatherName: false,
      chkContactNumber: false,
      chkcnic: false,
      chkfatherCnic: false,
      chkemail: false,
      chkdob: false,
      chkaddress: false,
      profileImg: "",
      chkprofileImg: false,
      chklastQualification: false,
      cond: false,
      stdData: "",
      loading: false,
      course: "",
      chkcourse: false,
      chkCity: false,
      city: "Karachi",
      styles: {
        slideInRight: {
          animation: "x 1.5s",
          animationName: Radium.keyframes(slideInRight, "slideInRight")
        },
        slideInDown: {
          animation: "x 1s",
          animationName: Radium.keyframes(slideInDown, "slideInDown")
        }
      }
    };
  }

  // componentWillMount() {
  //   if (!this.props.location.state) {
  //     this.props.history.push("/smit");
  //   }
  // }

  onSiteChanged = (e) => {
    this.setState({
      lastQualification: e.target.value,
    });
  };
  componentDidMount() {
    this.props.smitNotificationGet();
  }
  setFieldVal = (a, b) => {
    this.setState({ [b]: a });
  };

  checkField = (a) => {
    if (a != "") {
      return false;
    }
    return true;
  };

  toAdminCard = (e, a, b, c, d) => {

    this.props.stdData(e, a, b, c, d);
    this.props.history.push("/admitcard");
  };
  checkNumber = (e, reference) => {
    let b = e.target.value;
    let phoneno = /^[0-9-+]+$/;
    if (b.match(phoneno)) {
      return true;
    } else {
      alert("Please Enter Number Not Characer or any of these(. @ , - _)");
      return false;
    }
  };
  onFileChange(e) {
    this.setState({ profileImg: e.target.files });
  }
  // Submit = () => {
  //   console.log(this.state, 'Submit this.state')
  // }
  Submit = () => {
    this.setState({ loading: true });
    const { smitNotificationGets } = this.props
    // const { filteredName } = this.props.location.state;
    let {
      city,
      course,
      fullName,
      gender,
      fatherName,
      ContactNumber,
      cnic,
      fatherCnic,
      email,
      dob,
      address,
      lastQualification,
      profileImg,
    } = this.state;
    if (this.checkField(city)) {
      this.setState({ chkCity: true });
      window.scrollTo(0, 100);
      this.setState({ loading: false });
    }
    else if (this.checkField(course)) {
      this.setState({ chkcourse: true });
      window.scrollTo(0, 100);
      this.setState({ loading: false });
    }
    else if (this.checkField(fullName)) {
      this.setState({ chkfullName: true });
      window.scrollTo(0, 100);
      this.setState({ loading: false });
    } else if (this.checkField(gender)) {
      this.setState({ chkgender: true });
      window.scrollTo(0, 100);
      this.setState({ loading: false });
    } else if (this.checkField(fatherName)) {
      this.setState({ chkfatherName: true });
      window.scrollTo(0, 300);
      this.setState({ loading: false });
    } else if (this.checkField(ContactNumber)) {
      this.setState({ chkContactNumber: true });
      window.scrollTo(0, 300);
      this.setState({ loading: false });
    } else if (this.checkField(cnic)) {
      this.setState({ chkcnic: true });
      window.scrollTo(0, 300);
      this.setState({ loading: false });
    } else if (this.checkField(fatherCnic)) {
      this.setState({ chkfatherCnic: true });
      window.scrollTo(0, 300);
      this.setState({ loading: false });
    } else if (this.checkField(email)) {
      this.setState({ chkemail: true });
      window.scrollTo(0, 300);
      this.setState({ loading: false });
    } else if (this.checkField(dob)) {
      this.setState({ chkdob: true });
      window.scrollTo(0, 300);
      this.setState({ loading: false });
    } else if (this.checkField(address)) {
      this.setState({ chkaddress: true });
      window.scrollTo(0, 300);
      this.setState({ loading: false });
    } else if (this.checkField(lastQualification)) {
      this.setState({ chklastQualification: true });
      window.scrollTo(0, 500);
      this.setState({ loading: false });
    } else if (this.checkField(profileImg)) {
      this.setState({ chkprofileImg: true });
      window.scrollTo(0, 700);
      this.setState({ loading: false });
    } else {
      this.setState({ loading: false });
      // console.log('this.state.profileImg', this.state.profileImg)

      var datas = smitNotificationGets
        .filter((name) => {
          return (
            name.cityName
              .toLowerCase()
              .indexOf(city.toLowerCase()) >= 0
          );
        })
      // console.log(datas[0].cityName, 'datasdatas')
      var formData = new FormData();
      for (const key of Object.keys(this.state.profileImg)) {
        formData.append("imgCollection", this.state.profileImg[key]);
      }
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("gender", gender);
      formData.append("fatherName", fatherName);
      formData.append("ContactNumber", ContactNumber);
      formData.append("cnic", cnic);
      formData.append("fatherCnic", fatherCnic);
      formData.append("dob", dob);
      formData.append("address", address);
      formData.append("lastQualification", lastQualification);
      formData.append("batchName", datas[0].batchName);
      formData.append("cityName", datas[0].cityName);
      formData.append("courseName", datas[0].courseName);
      formData.append("generatedId", datas[0].cityCode + datas[0].courseId + datas[0].year + datas[0].batchName);
      // ${cityCode}${courseId}${year}${batchName}${rollNo}
      axios
        .post(
          "https://swit-app.herokuapp.com/smit/SmitAdmissFormadd",
          formData,
          {}
        )
        .then((res) => {
          console.log(res, 'resssss', datas[0].cityCode + datas[0].courseId + datas[0].year + datas[0].batchName + res.data.data.rollNo)

          // var formDatas = new FormData();
          // formDatas.append("rollNo", res.data.data.rollNo)
          // formDatas.append("generatedId", datas[0].cityCode + datas[0].courseId + datas[0].year + datas[0].batchName + res.data.data.rollNo);
          // axios
          //   .post(
          //     "http://localhost:3000/smit/smitAdmissUpdateId",
          //     formDatas,
          //     {}
          //   )
          const obj = {
            rollNo: res.data.data.rollNo,
            generatedId: datas[0].cityCode + datas[0].courseId + datas[0].year + datas[0].batchName + res.data.data.rollNo
          }
          const options = {
            method: "POST",
            headers: {
              "Accept": "application/json"
            },
            data: obj,
            url: "http://localhost:3000/smit/smitAdmissUpdateId",
          };
          axios(options)
            .then((res) => {
              console.log(res, 'resssssssssssssssssssss')
            }).catch((err) => { console.log(err) })

          window.scrollTo(0, 100);
          this.setState({
            fullName: "",
            gender: "",
            fatherName: "",
            ContactNumber: "",
            cnic: "",
            fatherCnic: "",
            email: "",
            dob: "",
            address: "",
            lastQualification: "",
          });
          // console.log(res, this.state.profileImg[0], datas[0].courseId, datas[0].year)
          this.toAdminCard(
            res,
            URL.createObjectURL(this.state.profileImg[0]),
            datas[0].courseId,
            datas[0].year,
            datas[0].cityCode
          );
          alert("Form Submitted");

        })
        .catch((err) => {
          // console.log(err, "errerrerr")
          alert("Form not Submitted");
          this.setState({ loading: false });
        });
    }
    this.setState({ loading: false });
  };
  // searchStringInArray = (str, strArray) => {
  //   var __FOUND = strArray.find(function (post, index) {

  //     if (post.cityName == str)
  //       console.log(__FOUND, '__FOUND')
  //     //   // return __FOUND;
  //   });
  //   return __FOUND;
  // }
  // changeCourse = () => {
  //   const { city } = this.state;
  //   let that = this;
  //   var __FOUND = this.props.smitNotificationGets.find(function (post, index) {
  //     if (post.cityName == city) {
  //       // console.log(__FOUND, '__FOUND')
  //       // return post.courseName;
  //       return that.setState({ course: post.courseName })
  //     }
  //   });
  //   console.log(__FOUND)
  //   // const courseSleect = this.searchStringInArray(this.state.city, this.props.smitNotificationGets)
  //   // console.log(courseSleect, 'courseSleect');
  // }
  render() {
    const {
      fullName,
      gender,
      fatherName,
      ContactNumber,
      cnic,
      fatherCnic,
      email,
      dob,
      address,
      lastQualification,
      city
    } = this.state;
    const { smitNotificationGets } = this.props
    // console.log(this.state, "smitNotificationGets", smitNotificationGets)
    return (
      <>
        {/* <MainHeader /> */}
        <div style={{ backgroundColor: "rgb(1 103 179)" }} className="py-5">
          <div className="container py-3">
            <h1 className="text-white">Course Registration Form</h1>
          </div>
          <div className="logoCircle"
            style={this.state.styles.slideInDown}
          >
            <img src={LOGO} className="main-logo" alt="LOGO" style={{ position: 'absolute', top: 70 }} />
          </div>
        </div>
        {/* {this.props.location.state &&
          this.props.location.state.filteredName.viewForm ? ( */}
        <div>
          {/* {this.state.loading ? (
            <div
              class="spinner-border text-primary"
              style="width: 3rem; height: 3rem;"
              role="status"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "50px",
                height: "50px",
              }}
            >
              <span class="sr-only">Loading...</span>
            </div>
          ) : ( */}
          <div className="container p-5">
            {/* <p>
                  <button
                    className="prevbtn"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Download Admit card
                  </button>
                </p>
                <div className="collapse" id="collapseExample">
                  <div className="card card-body">
                    <form>
                      <input
                        size="13"
                        className="jobInput"
                        type="text"
                        onChange={(e) => this.checkNumber(e)}
                        placeholder="Enter CNIC"
                      />
                      <button className="prevbtn my-3 btn-block ">
                        <i class="fas fa-search"></i> Search
                      </button>
                    </form>
                  </div>
                </div> */}
            <div className="row">
              <div className="col-md-6 py-4">
                <label className="color title" >Select City</label>
                <select
                  className="jobInput"
                  // value={course}
                  onChange={(e) => {
                    this.setFieldVal(e.target.value, "city");
                    // this.changeCourse()
                    this.setState({ chkCity: false });
                  }}
                >
                  {smitNotificationGets
                    .map((filteredName, i) => {
                      return filteredName.viewForm ? (
                        <option key={i}>{filteredName.cityName}</option>
                      ) : (
                          <option key={i}>No City Available</option>
                        );
                    })}
                </select>
                {this.state.chkCity ? (
                  <p className="text-danger">Select City</p>
                ) : null}
              </div>
              <div className="col-md-6 py-4  ">
                <label className="color title">Select Course</label>
                <select
                  className="jobInput"
                  // value={course}
                  onChange={(e) => {
                    this.setFieldVal(e.target.value, "course");
                    this.setState({ chkcourse: false });
                  }}
                >
                  <option>Select</option>
                  {smitNotificationGets
                    .filter((name) => {
                      return (
                        name.cityName
                          .toLowerCase()
                          .indexOf(city.toLowerCase()) >= 0
                      );
                    })
                    .map((filteredName, i) => {
                      return filteredName.viewForm ? (
                        <option key={i}>{filteredName.courseName}</option>
                      ) : (
                          <option key={i}>No Courses Available</option>
                        );
                    })}
                </select>

                {this.state.chkcourse ? (
                  <p className="text-danger">Select Course</p>
                ) : null}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 py-4">
                <label className="color title">Full Name</label>
                <input
                  className="jobInput"
                  placeholder="Enter Full Name"
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    this.setFieldVal(e.target.value, "fullName");
                    this.setState({ chkfullName: false });
                  }}
                />
                {this.state.chkfullName ? (
                  <p className="text-danger">Field is Emply</p>
                ) : null}
              </div>
              <div className="col-md-6 py-4">
                <label className="color title">Gender</label>
                <select
                  className="jobInput"
                  value={gender}
                  onChange={(e) => {
                    this.setFieldVal(e.target.value, "gender");
                    this.setState({ chkgender: false });
                  }}
                >
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                {this.state.chkgender ? (
                  <p className="text-danger">Select Gender</p>
                ) : null}
              </div>
              <div className="col-md-6 py-4">
                <label className="color title">Father Name</label>
                <input
                  className="jobInput"
                  placeholder="Father Name"
                  type="text"
                  value={fatherName}
                  onChange={(e) => {
                    this.setFieldVal(e.target.value, "fatherName");
                    this.setState({ chkfatherName: false });
                  }}
                />
                {this.state.chkfatherName ? (
                  <p className="text-danger">Field is Emply</p>
                ) : null}
              </div>
              <div className="col-md-6 py-4">
                <label className="color title">Contact Number</label>
                <input
                  className="jobInput"
                  placeholder="03xx-xxxxxxx"
                  type="text"
                  maxLength="11"
                  value={ContactNumber}
                  onChange={(e) => {
                    this.setFieldVal(e.target.value, "ContactNumber");
                    this.setState({ chkContactNumber: false });
                    this.checkNumber(e);
                  }}
                />
                {this.state.chkContactNumber ? (
                  <p className="text-danger">Field is Emply</p>
                ) : null}
              </div>
              <div className="col-md-6 py-4">
                <label className="color title">CNIC</label>
                <input
                  className="jobInput"
                  placeholder="e.g 42101-1111111-1"
                  type="text"
                  value={cnic}
                  maxLength="13"
                  onChange={(e) => {
                    this.setFieldVal(e.target.value, "cnic");
                    this.setState({ chkcnic: false });
                    this.checkNumber(e, 13);
                  }}
                />
                {this.state.chkcnic ? (
                  <p className="text-danger">Field is Emply</p>
                ) : null}
              </div>
              <div className="col-md-6 py-4">
                <label className="color title">Father's CNIC</label>
                <input
                  className="jobInput"
                  placeholder="e.g 42101-1111111-1"
                  type="text"
                  maxLength="13"
                  value={fatherCnic}
                  onChange={(e) => {
                    this.setFieldVal(e.target.value, "fatherCnic");
                    this.setState({ chkfatherCnic: false });
                    this.checkNumber(e, 13);
                  }}
                />
                {this.state.chkfatherCnic ? (
                  <p className="text-danger">Field is Emply</p>
                ) : null}
              </div>
              <div className="col-md-6 py-4">
                <label className="color title">Email</label>

                <input
                  className="jobInput"
                  placeholder="example@gmail.com"
                  tyoe="email"
                  style={{ marginTop: 10 }}
                  value={email}
                  onChange={(e) => {
                    this.setFieldVal(e.target.value, "email");
                    this.setState({ chkemail: false });
                  }}
                />
                {this.state.chkemail ? (
                  <p className="text-danger">Field is Emply</p>
                ) : null}
              </div>
              <div className="col-md-6 py-4">
                <label className="color title">DOB ( Date of Birth )</label>
                <br />
                <br />
                <input
                  type="date"
                  className="dob"
                  style={{ width: "100%" }}
                  value={dob}
                  onChange={(e) => {
                    this.setFieldVal(e.target.value, "dob");
                    this.setState({ chkdob: false });
                  }}
                />
                {this.state.chkdob ? (
                  <p className="text-danger">Field is Emply</p>
                ) : null}
              </div>
              <div className="col-md-12 py-4">
                <label className="color title">Full and Permanent Address</label>
                <input
                  className="jobInput"
                  placeholder=""
                  type="text"
                  value={address}
                  onChange={(e) => {
                    this.setFieldVal(e.target.value, "address");
                    this.setState({ chkaddress: false });
                  }}
                />
                {this.state.chkaddress ? (
                  <p className="text-danger">Field is Emply</p>
                ) : null}
              </div>
              <div className="col-md-12 py-4">
                <h4 className="color title">Last Qualification</h4>
                <div className="row">
                  <div className="col-md-3">
                    <label>
                      <input
                        name="qualification"
                        type="radio"
                        value="Matric"
                        checked={lastQualification === "Matric"}
                        onChange={(e) => {
                          this.onSiteChanged(e);
                          this.setState({ chklastQualification: false });
                        }}
                      />{" "}
                          Matric
                        </label>
                  </div>
                  <div className="col-md-3">
                    <label>
                      <input
                        name="qualification"
                        type="radio"
                        value="Intermediate"
                        checked={lastQualification === "Intermediate"}
                        onChange={(e) => {
                          this.onSiteChanged(e);
                          this.setState({ chklastQualification: false });
                        }}
                      />{" "}
                          Intermediate
                        </label>
                  </div>
                  <div className="col-md-3">
                    <label>
                      <input
                        name="qualification"
                        type="radio"
                        value="Graduate"
                        checked={lastQualification === "Graduate"}
                        onChange={(e) => {
                          this.onSiteChanged(e);
                          this.setState({ chklastQualification: false });
                        }}
                      />{" "}
                          Graduate
                        </label>
                  </div>
                  <div className="col-md-3">
                    <label>
                      <input
                        name="qualification"
                        type="radio"
                        value="Undergraduate"
                        checked={lastQualification === "Undergraduate"}
                        onChange={(e) => {
                          this.onSiteChanged(e);
                          this.setState({ chklastQualification: false });
                        }}
                      />{" "}
                          Undergraduate
                        </label>
                  </div>
                  <div className="col-md-3">
                    <label>
                      <input
                        name="qualification"
                        type="radio"
                        value="Masters"
                        checked={lastQualification === "Masters"}
                        onChange={(e) => {
                          this.onSiteChanged(e);
                          this.setState({ chklastQualification: false });
                        }}
                      />{" "}
                          Masters
                        </label>
                  </div>
                  <div className="col-md-3">
                    <label>
                      <input
                        name="qualification"
                        type="radio"
                        value="PHD"
                        checked={lastQualification === "PHD"}
                        onChange={(e) => {
                          this.onSiteChanged(e);
                          this.setState({ chklastQualification: false });
                        }}
                      />{" "}
                          PHD
                        </label>
                  </div>
                </div>
                {this.state.chklastQualification ? (
                  <p className="text-danger">Field is Emply</p>
                ) : null}
              </div>
              <div className="col-md-12 py-4">
                <label className="color title">Passport Size Profile Image</label>
                <input
                  type="file"
                  className="uploadCV"
                  name="profileImg"
                  onChange={(e) => {
                    this.onFileChange(e);
                    this.setState({ chkprofileImg: false });
                  }}
                />
                {this.state.chkprofileImg ? (
                  <p className="text-danger">Field is Emply</p>
                ) : null}
              </div>
              <div>
                <ol>
                  <li>
                    I hereby, solemnly declare that the data and facts
                    mentioned herein are true and correct to the best of my
                    knowledge. Further, I will abide by my all the establish
                    and future regulation and policies of SWIT
                      </li>
                  <li>
                    I hereby accept the responsibilites of the good conduct
                    and guarantee that I will not be involved in any other
                    activity, polical or ethic, but learning during my stay
                    in the program.
                      </li>
                  <li>
                    Defiance will render my admission cancelled at any point
                    in time.
                      </li>
                  <li>
                    Upon completion of course, I will complete the required
                    project by SWIT.
                      </li>
                </ol>
              </div>
              <div className="col-md-12 py-4">

                {this.state.loading ? (
                  <div className="spinner-border" role="status" style={{ marginLeft: '50%' }}>
                    <span className="visually-hidden"></span>
                  </div>
                ) :
                  <button
                    className="prevbtn btn-block"
                    onClick={() => this.Submit()}
                  >
                    Submit
                    </button>
                }
              </div>
            </div>
          </div>
          {/* )} */}
        </div>
        {/* ) : (
            <div className="container p-5">
              <p className="text-muted" style={{ fontSize: "3em" }}>
                Registration has been closed
            </p>
              <p className="text-muted" style={{ fontSize: "2em" }}>
                For More Details Please Visit{" "}
                <a href="https://www.facebook.com/SaylaniMassTraining/">
                  Saylani Mass Training
              </a>
              </p>
              <p className="text-muted">Created by M Umair</p>
            </div>
          )} */}
        {this.state.cond ? <AdmitCard data={this.state.stdData} /> : null}
      </>
    );
  }
}

function mapStateToProp(state) {
  return {
    smitNotificationGets: state.reducerSmit.smitNotificationGets,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    stdData: (e, a, b, c, d) => {
      dispatch(stdData(e, a, b, c, d));
    },
    smitNotificationGet: () => {
      dispatch(smitNotificationGet());
    },
  };
}
export default
  withRouter(
    connect(mapStateToProp, mapDispatchToProp)(CourseRegistration)
  );
