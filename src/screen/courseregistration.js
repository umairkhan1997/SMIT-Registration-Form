import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import "./course.css";
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
      cyberSecurity: false,
      organizationName: "",
      chkOrganizationName: false,
      position: '',
      chkPosition: false,
      nameProfessional: '',
      chkNameProfessional: false,
      laptopAvailable: '',
      chkLaptopAvailable: false,
      memberInstitution: '',
      chkMemberInstitution: false,
      membershipNumber: '',
      chkMembershipNumber: false,
      totalExperience: '',
      chkTotalExperience: false,
      areaOfExperience: '',
      chkAreaOfExperience: false,
      rateSkills: '',
      chkRateSkills: false,
      styles: {
        slideInRight: {
          animation: "x 1.5s",
          animationName: Radium.keyframes(slideInRight, "slideInRight"),
        },
        slideInDown: {
          animation: "x 1s",
          animationName: Radium.keyframes(slideInDown, "slideInDown"),
        },
      },
    };
  }


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

    const { smitNotificationGets } = this.props;
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
      organizationName,
      position,
      nameProfessional,
      laptopAvailable,
      memberInstitution,
      membershipNumber,
      totalExperience,
      areaOfExperience,
      rateSkills,
    } = this.state;
    if (this.checkField(city)) {
      this.setState({ chkCity: true });
      window.scrollTo(0, 100);
      this.setState({ loading: false });
    } else if (this.checkField(course)) {
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
    }
    else if (this.checkField(organizationName) && course == 'DATA ANALYTICS BOOTCAMP') {
      this.setState({ chkOrganizationName: true });
      window.scrollTo(0, 100);
      this.setState({ loading: false });
    }
    else if (this.checkField(nameProfessional) && course == 'DATA ANALYTICS BOOTCAMP') {
      this.setState({ chkNameProfessional: true });
      window.scrollTo(0, 100);
      this.setState({ loading: false });
    }
    else if (this.checkField(position) && course == 'DATA ANALYTICS BOOTCAMP') {
      this.setState({ chkPosition: true });
      window.scrollTo(0, 100);
      this.setState({ loading: false });
    }
    else if (this.checkField(laptopAvailable) && course == 'DATA ANALYTICS BOOTCAMP') {
      this.setState({ chkLaptopAvailable: true });
      window.scrollTo(0, 100);
      this.setState({ loading: false });
    }
    else if (this.checkField(memberInstitution) && course == 'DATA ANALYTICS BOOTCAMP') {
      this.setState({ chkMemberInstitution: true });
      window.scrollTo(0, 100);
      this.setState({ loading: false });
    }
    else if (this.checkField(membershipNumber) && course == 'DATA ANALYTICS BOOTCAMP') {
      this.setState({ chkMembershipNumber: true });
      window.scrollTo(0, 100);
      this.setState({ loading: false });
    }
    else if (this.checkField(totalExperience) && course == 'DATA ANALYTICS BOOTCAMP') {
      this.setState({ chkTotalExperience: true });
      window.scrollTo(0, 200);
      this.setState({ loading: false });
    }
    else if (this.checkField(areaOfExperience) && course == 'DATA ANALYTICS BOOTCAMP') {
      this.setState({ chkAreaOfExperience: true });
      window.scrollTo(0, 300);
      this.setState({ loading: false });
    }
    else if (this.checkField(rateSkills) && course == 'DATA ANALYTICS BOOTCAMP') {
      this.setState({ chkRateSkills: true });
      window.scrollTo(0, 300);
      this.setState({ loading: false });
    }

    else if (this.checkField(fatherName)) {
      this.setState({ chkfatherName: true });
      window.scrollTo(0, 500);
      this.setState({ loading: false });
    } else if (this.checkField(ContactNumber) ||
      ContactNumber.length > 12 ||
      ContactNumber.length < 11) {
      this.setState({ chkContactNumber: true });
      window.scrollTo(0, 600);
      this.setState({ loading: false });
    } else if (this.checkField(cnic) ||
      cnic.length > 17 ||
      cnic.length < 13) {
      this.setState({ chkcnic: true });
      window.scrollTo(0, 600);
      this.setState({ loading: false });
    } else if (this.checkField(fatherCnic) ||
      fatherCnic.length > 17 ||
      fatherCnic.length < 13) {
      this.setState({ chkfatherCnic: true });
      window.scrollTo(0, 600);
      this.setState({ loading: false });
    } else if (this.checkField(email)) {
      this.setState({ chkemail: true });
      window.scrollTo(0, 600);
      this.setState({ loading: false });
    } else if (this.checkField(dob)) {
      this.setState({ chkdob: true });
      window.scrollTo(0, 700);
      this.setState({ loading: false });
    } else if (this.checkField(address)) {
      this.setState({ chkaddress: true });
      window.scrollTo(0, 700);
      this.setState({ loading: false });
    } else if (this.checkField(lastQualification)) {
      this.setState({ chklastQualification: true });
      window.scrollTo(0, 800);
      this.setState({ loading: false });
    } else if (this.checkField(profileImg)) {
      this.setState({ chkprofileImg: true });
      window.scrollTo(0, 900);
      this.setState({ loading: false });
    } else {
      // console.log('this.state.profileImg', this.state.profileImg)
      this.setState({ loading: true });
      var datas = smitNotificationGets.filter((name) => {
        return name.courseName.toLowerCase().indexOf(course.toLowerCase()) >= 0;
      });
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
      formData.append(
        "generatedId",
        datas[0].cityCode +
        datas[0].courseId +
        datas[0].year +
        datas[0].batchName
      );
      formData.append("organizationName", organizationName);
      formData.append("position", position);
      formData.append("nameProfessional", nameProfessional);
      formData.append("laptopAvailable", laptopAvailable);
      formData.append("memberInstitution", memberInstitution);
      formData.append("membershipNumber", membershipNumber);
      formData.append("totalExperience", totalExperience);
      formData.append("areaOfExperience", areaOfExperience);
      formData.append("rateSkills", rateSkills);
      // ${cityCode}${courseId}${year}${batchName}${rollNo}
      axios
        .post(
          "https://swit-app.herokuapp.com/smit/SmitAdmissFormadd",
          formData,
          {}
        )
        .then((res) => {
          // console.log(
          //   res,
          //   "resssss",
          //   datas[0].cityCode +
          //   datas[0].courseId +
          //   datas[0].year +
          //   datas[0].batchName +
          //   res.data.data.rollNo,
          //   datas
          // );

          const obj = {
            rollNo: res.data.data.rollNo,
            generatedId:
              datas[0].cityCode +
              datas[0].courseId +
              datas[0].year +
              datas[0].batchName +
              res.data.data.rollNo,
          };
          const options = {
            method: "POST",
            headers: {
              Accept: "application/json",
            },
            data: obj,
            url: "https://swit-app.herokuapp.com/smit/smitAdmissUpdateId",
          };
          axios(options)
            .then((res) => {
              // console.log(res, "resssssssssssssssssssss");
            })
            .catch((err) => {
              // console.log(err);
            });

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
            loading: false,
            organizationName: '',
            position: '',
            nameProfessional: '',
            laptopAvailable: '',
            memberInstitution: '',
            membershipNumber: '',
            totalExperience: '',
            areaOfExperience: '',
            rateSkills: '',

          });
          // console.log(res, this.state.profileImg[0], datas[0].courseId, datas[0].year)
          if (course == 'DATA ANALYTICS BOOTCAMP') {
            alert("Form Submitted");
          } else {
            this.toAdminCard(
              res,
              URL.createObjectURL(this.state.profileImg[0]),
              datas[0].courseId,
              datas[0].year,
              datas[0].cityCode
            );
            alert("Form Submitted");
          }
        })
        .catch((err) => {
          // console.log(err, "errerrerr")
          alert("Form not Submitted");

          this.setState({ loading: false });
        });
    }
  };

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
      city,
      loading,
      organizationName,
      position,
      rateSkills,
      totalExperience,
      areaOfExperience,
      membershipNumber,
      memberInstitution,
      laptopAvailable,
    } = this.state;
    const { smitNotificationGets } = this.props;
    // console.log(loading, "loadingloading");
    return (
      <>
        <div style={{ backgroundColor: "rgb(1 103 179)" }} className="py-5">
          <div className="container py-3">
            <h1 className="text-white">Course Registration Form</h1>
          </div>
          <div className="logoCircle" style={this.state.styles.slideInDown}>
            <img
              src={LOGO}
              className="main-logo"
              alt="LOGO"
              style={{ position: "absolute", top: 70 }}
            />
          </div>
        </div>

        <div>
          <div className="container p-5">
            <div className="row">
              <div className="col-md-6 py-4">
                <label className="color title">Select City</label>
                <select
                  className="jobInput"
                  // value={course}
                  onChange={(e) => {
                    this.setFieldVal(e.target.value, "city");
                    this.setState({ chkCity: false });
                  }}
                >
                  <option key={0} value="Karachi">
                    Karachi
                  </option>
                  {/* <option key={1} value="Hyderabad">
                    Hyderabad
                  </option> */}
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
                    if (e.target.value === "Cyber Security") {
                      this.setState({ cyberSecurity: true });
                    }
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
                      ) : null;
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
                  <option value="">Gender</option>
                  {this.state.cyberSecurity ? null : (
                    <option value="Male">Male</option>
                  )}
                  {this.state.course === "IT Essential" || this.state.course === "DATA ANALYTICS BOOTCAMP" ||
                    this.state.cyberSecurity ? (
                      <option value="Female">Female</option>
                    ) : null}
                </select>
                {this.state.chkgender ? (
                  <p className="text-danger">Select Gender</p>
                ) : null}
              </div>
              {this.state.course == 'DATA ANALYTICS BOOTCAMP' ?
                <>
                  <div className="col-md-6 py-4">
                    <label className="color title">Organization Name</label>
                    <input
                      className="jobInput"
                      placeholder="Enter Organization Name"
                      type="text"
                      value={organizationName}
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "organizationName");
                        this.setState({ chkOrganizationName: false });
                      }}
                    />
                    {this.state.chkOrganizationName ? (
                      <p className="text-danger">Field is Emply</p>
                    ) : null}
                  </div>
                  <div className="col-md-6 py-4">
                    <label className="color title">Select the name of the professional</label>
                    <select
                      className="jobInput"
                      // value={course}
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "nameProfessional");
                        this.setState({ chkNameProfessional: false });
                      }}
                    >
                      <option>Select</option>
                      <option key={0} value="Institute of Chartered Accountants of Pakistan">
                        Institute of Chartered Accountants of Pakistan
                  </option>
                      <option key={1} value="Institute of Cost and Management Accounts of Pakistan">
                        Institute of Cost and Management Accounts of Pakistan
                  </option>
                      <option key={0} value="Association of Chartered Certified Accountants">
                        Association of Chartered Certified Accountants
                  </option>
                      <option key={1} value="Chartered Institute of Management Accountants">
                        Chartered Institute of Management Accountants
                  </option>
                      <option key={0} value="Pakistan Institute of Public Finance Accountants">
                        Pakistan Institute of Public Finance Accountants
                  </option>
                      <option key={1} value="Other">
                        Other
                  </option>
                    </select>
                    {this.state.chkNameProfessional ? (
                      <p className="text-danger">Select First</p>
                    ) : null}
                  </div>
                  <div className="col-md-6 py-4">
                    <label className="color title">Current position / designation in the aforementioned organization</label>
                    <input
                      className="jobInput"
                      placeholder="Enter Current position / Designation"
                      type="text"
                      value={position}
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "position");
                        this.setState({ chkPosition: false });
                      }}
                    />
                    {this.state.chkPosition ? (
                      <p className="text-danger">Field is Emply</p>
                    ) : null}
                  </div>
                  <div className="col-md-6 py-4">
                    <label className="color title">Do you have a laptop available to use in the training</label>
                    <select
                      className="jobInput"
                      value={laptopAvailable}
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "laptopAvailable");
                        this.setState({ chkLaptopAvailable: false });
                      }}
                    >
                      <option>Select</option>
                      <option key={0} value="Yes">
                        Yes
                  </option>
                      <option key={1} value="No">
                        No
                  </option>
                    </select>
                    {this.state.chkLaptopAvailable ? (
                      <p className="text-danger">Select First</p>
                    ) : null}
                  </div>
                  <div className="col-md-6 py-4">
                    <label className="color title">Are you a member of professional institution</label>
                    <select
                      className="jobInput"
                      value={memberInstitution}
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "memberInstitution");
                        this.setState({ chkMemberInstitution: false });
                      }}
                    >
                      <option>Select</option>
                      <option key={0} value="Yes">
                        Yes
                  </option>
                      <option key={1} value="No">
                        No
                  </option>
                    </select>
                    {this.state.chkMemberInstitution ? (
                      <p className="text-danger">Select First</p>
                    ) : null}
                  </div>
                  <div className="col-md-6 py-4">
                    <label className="color title">Your Membership number </label>
                    <input
                      className="jobInput"
                      placeholder="Enter Your Membership number "
                      type="text"
                      value={membershipNumber}
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "membershipNumber");
                        this.setState({ chkMembershipNumber: false });
                      }}
                    />
                    {this.state.chkMembershipNumber ? (
                      <p className="text-danger">Field is Emply</p>
                    ) : null}
                  </div>
                  <div className="col-md-6 py-4">
                    <label className="color title">How many years of total experience do you have in the finance or related areas</label>
                    <input
                      className="jobInput"
                      placeholder="Enter total experience"
                      type="text"
                      value={totalExperience}
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "totalExperience");
                        this.setState({ chkTotalExperience: false });
                      }}
                    />
                    {this.state.chkTotalExperience ? (
                      <p className="text-danger">Field is Emply</p>
                    ) : null}
                  </div>
                  <div className="col-md-6 py-4">
                    <label className="color title">Current Area of Experience</label>
                    <select
                      className="jobInput"
                      style={{ marginTop: 32 }}
                      value={areaOfExperience}
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "areaOfExperience");
                        this.setState({ chkAreaOfExperience: false });
                      }}
                    >
                      <option>Select</option>
                      <option key={0} value="Finance / Accounting">
                        Finance / Accounting
                  </option>
                      <option key={1} value="Taxation">
                        Taxation
                  </option>
                      <option key={1} value="Audit">
                        Audit
                  </option>
                      <option key={1} value="Business Advisory">
                        Business Advisory
                  </option>
                      <option key={1} value="Other">
                        Other
                  </option>
                    </select>
                    {this.state.chkAreaOfExperience ? (
                      <p className="text-danger">Select First</p>
                    ) : null}
                  </div>

                  <div className="col-md-12 py-4">
                    <h4 className="color title">How do you rate your existing skills with reference to the subject training</h4>
                    <div className="row">

                      <div className="col-md-3">
                        <label>
                          <input
                            name="rateSkills"
                            type="radio"
                            value="1"
                            checked={rateSkills === "1"}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "rateSkills");
                              this.setState({ chkRateSkills: false });
                            }}
                          />{" "}
                      1
                    </label>
                      </div>
                      <div className="col-md-3">
                        <label>
                          <input
                            name="rateSkills"
                            type="radio"
                            value="2"
                            checked={rateSkills === "2"}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "rateSkills");
                              this.setState({ chkRateSkills: false });
                            }}
                          />{" "}
                      2
                    </label>
                      </div>
                      <div className="col-md-3">
                        <label>
                          <input
                            name="rateSkills"
                            type="radio"
                            value="3"
                            checked={rateSkills === "3"}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "rateSkills");
                              this.setState({ chkRateSkills: false });
                            }}
                          />{" "}
                      3
                    </label>
                      </div>
                      <div className="col-md-3">
                        <label>
                          <input
                            name="rateSkills"
                            type="radio"
                            value="4"
                            checked={rateSkills === "4"}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "rateSkills");
                              this.setState({ chkRateSkills: false });
                            }}
                          />{" "}
                      4
                    </label>
                      </div>
                      <div className="col-md-3">
                        <label>
                          <input
                            name="rateSkills"
                            type="radio"
                            value="5"
                            checked={rateSkills === "5"}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "rateSkills");
                              this.setState({ chkRateSkills: false });
                            }}
                          />{" "}
                      5
                    </label>
                      </div>

                    </div>
                    {this.state.chkRateSkills ? (
                      <p className="text-danger">Select First</p>
                    ) : null}
                  </div>
                </> :
                null}
              {/* <div className="col-md-6 py-4">
                    <label className="color title">How do you rate your existing skills with reference to the subject training ?</label>
                    <select
                      className="jobInput"
                      // value={course}
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "rateSkills");
                        this.setState({ chkRateSkills: false });
                      }}
                    >
                      <option>Select</option>
                      <option key={0} value="Basic ">
                        Basic
                  </option>
                      <option key={1} value="1">
                        1
                  </option>
                      <option key={1} value="2">
                        2
                  </option>
                      <option key={1} value="3">
                        3
                  </option>
                      <option key={1} value="4">
                        4
                  </option>
                      <option key={1} value="5">
                        5
                  </option>
                      <option key={1} value="Expert">
                        Expert
                  </option>
                    </select>
                    {this.state.chkRateSkills ? (
                      <p className="text-danger">Select First</p>
                    ) : null}
                  </div> */}
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
                  maxLength="12"
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
                  maxLength="15"
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
                  maxLength="15"
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
                <label className="color title">
                  Full and Permanent Address
                </label>
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
                <label className="color title">
                  Passport Size Profile Image
                </label>
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
                    I hereby, solemnly declare that the data and facts mentioned
                    herein are true and correct to the best of my knowledge.
                    Further, I will abide by my all the establish and future
                    regulation and policies of SWIT
                  </li>
                  <li>
                    I hereby accept the responsibilites of the good conduct and
                    guarantee that I will not be involved in any other activity,
                    polical or ethic, but learning during my stay in the
                    program.
                  </li>
                  <li>
                    Defiance will render my admission cancelled at any point in
                    time.
                  </li>
                  <li>
                    Upon completion of course, I will complete the required
                    project by SWIT.
                  </li>
                </ol>
              </div>
              <div className="col-md-12 py-4">
                {this.state.loading ? (
                  <div
                    className="spinner-border"
                    role="status"
                    style={{ marginLeft: "50%" }}
                  >
                    <span className="visually-hidden"></span>
                  </div>
                ) : (
                    <button
                      className="prevbtn btn-block"
                      onClick={() => this.Submit()}
                    >
                      Submit
                    </button>
                  )}
              </div>
            </div>
          </div>
          {/* )} */}
        </div>
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
export default withRouter(
  connect(mapStateToProp, mapDispatchToProp)(CourseRegistration)
);