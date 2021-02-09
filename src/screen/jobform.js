import React from "react";
import MainHeader from "../components/Home/MainHeader";
import { connect } from "react-redux";
import { jobFormSubmit, jobOffFormSubmit } from "../Redux/action/homeAction";

class JobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobseekarForm: true,
      jobRequriter: false,
      step1: "formTag",
      step2: "formTagdisable",
      step3: "formTagdisable",
      step1show: true,
      step2show: false,
      step3show: false,
      nextbtn: true,
      prevbtn: false,
      showScreen: true,
      chkfullname: false,
      fullName: "",
      chkfatherName: false,
      fatherName: "",
      placeOfBirth: "",
      chkplaceOfBirth: false,
      chknationality: false,
      nationality: "",
      chkreligion: false,
      religion: "",
      chkcnic: false,
      cnic: "",
      chktelNumber: false,
      telNumber: "",
      chkmobNumber: false,
      mobNumber: "",
      chkmartialStatus: false,
      martialStatus: "",
      chkresidentType: false,
      residentType: "",
      chkmonthlyRent: false,
      monthlyRent: "",
      chkdisability: false,
      disability: "",
      chkaddress: false,
      address: "",
      chkjobExperience: false,
      jobExperience: "",
      chkgender: false,
      gender: "",
      chkdate: false,
      date: "",
      chkschoolName: false,
      chkschoolYeComp: false,
      chkschoolMajCor: false,
      chkschoolDegree: false,
      schoolName: "",
      schoolYeComp: "",
      schoolMajCor: "",
      schoolDegree: "",
      imgCollection: "",
      SecondHighName: "",
      SecondYeComp: "",
      SecondMajCor: "",
      SecondDegree: "",
      colUniName: "",
      colUniYeComp: "",
      colUniMajCor: "",
      colUniDegree: "",
      instName: "",
      instYeComp: "",
      instMajCor: "",
      instDegree: "",
      comName: "",
      natJob: "",
      location: "",
      approxSalary: "",
      timePeriod: "",
      hrContact: "",
      selectJbTyp: "",
      approxDur: "",
      expReq: "",
      jobDes: "",
      occupation: "",
      age: "",
      chkOccupation: false,
      chkage: false,
    };
    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange(e) {
    this.setState({ imgCollection: e.target.files });
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
  firstNext = () => {
    const {
      fullName,
      fatherName,
      placeOfBirth,
      date,
      gender,
      nationality,
      religion,
      cnic,
      telNumber,
      mobNumber,
      martialStatus,
      residentType,
      monthlyRent,
      disability,
      address,
      jobExperience,
      occupation,
      age,
    } = this.state;
    if (this.checkField(fullName)) {
      this.setState({ chkfullname: true });
      window.scrollTo(0, 100);
    } else if (this.checkField(fatherName)) {
      this.setState({ chkfatherName: true });

      window.scrollTo(0, 100);
    } else if (this.checkField(occupation)) {
      this.setState({ chkOccupation: true });
      window.scrollTo(0, 100);
    } else if (this.checkField(age)) {
      this.setState({ chkage: true });
      window.scrollTo(0, 100);
    } else if (this.checkField(gender)) {
      this.setState({ chkgender: true });
      window.scrollTo(0, 100);
    } else if (this.checkField(date)) {
      this.setState({ chkdate: true });
      window.scrollTo(0, 100);
    } else if (this.checkField(placeOfBirth)) {
      this.setState({ chkplaceOfBirth: true });
      window.scrollTo(0, 100);
    } else if (this.checkField(nationality)) {
      this.setState({ chknationality: true });
      window.scrollTo(0, 100);
    } else if (this.checkField(religion)) {
      this.setState({ chkreligion: true });
      window.scrollTo(0, 200);
    } else if (this.checkField(cnic)) {
      this.setState({ chkcnic: true });
      window.scrollTo(0, 200);
    } else if (this.checkField(telNumber)) {
      this.setState({ chktelNumber: true });
      window.scrollTo(0, 300);
    } else if (this.checkField(mobNumber)) {
      this.setState({ chkmobNumber: true });
      window.scrollTo(0, 300);
    } else if (this.checkField(martialStatus)) {
      this.setState({ chkmartialStatus: true });
      window.scrollTo(0, 300);
    } else if (this.checkField(residentType)) {
      this.setState({ chkresidentType: true });
      window.scrollTo(0, 300);
    } else if (this.checkField(monthlyRent)) {
      this.setState({ chkmonthlyRent: true });
      window.scrollTo(0, 400);
    } else if (this.checkField(disability)) {
      this.setState({ chkdisability: true });
      window.scrollTo(0, 400);
    } else if (this.checkField(address)) {
      this.setState({ chkaddress: true });
      window.scrollTo(0, 500);
    } else if (this.checkField(jobExperience)) {
      this.setState({ chkjobExperience: true });
      window.scrollTo(0, 500);
    } else {
      this.setState({
        step1: "formTagdisable",
        step2: "formTag",
        step3: "formTagdisable",
        step1show: false,
        step2show: true,
        step3show: false,
        nextbtn: true,
        prevbtn: true,
      });
    }
  };

  secNext = () => {
    const { schoolName, schoolYeComp, schoolMajCor, schoolDegree } = this.state;
    if (this.checkField(schoolName)) {
      this.setState({ chkschoolName: true });
    } else if (this.checkField(schoolYeComp)) {
      this.setState({ chkschoolYeComp: true });
    } else if (this.checkField(schoolMajCor)) {
      this.setState({ chkschoolMajCor: true });
    } else if (this.checkField(schoolDegree)) {
      this.setState({ chkschoolDegree: true });
    } else {
      this.setState({
        step1: "formTagdisable",
        step2: "formTagdisable",
        step3: "formTag",
        step1show: false,
        step2show: false,
        step3show: true,
        nextbtn: false,
        prevbtn: true,
      });
    }
  };

  submitForm = () => {
    const {
      fullName,
      fatherName,
      placeOfBirth,
      date,
      gender,
      nationality,
      religion,
      cnic,
      telNumber,
      mobNumber,
      martialStatus,
      residentType,
      monthlyRent,
      disability,
      address,
      jobExperience,
      schoolName,
      schoolYeComp,
      schoolMajCor,
      schoolDegree,
      imgCollection,
      SecondHighName,
      SecondYeComp,
      SecondMajCor,
      SecondDegree,
      colUniName,
      colUniYeComp,
      colUniMajCor,
      colUniDegree,
      instName,
      instYeComp,
      instMajCor,
      instDegree,
      occupation,
      age,
    } = this.state;
    const obj = {
      fullName,
      fatherName,
      placeOfBirth,
      date,
      gender,
      nationality,
      religion,
      cnic,
      telNumber,
      mobNumber,
      martialStatus,
      residentType,
      monthlyRent,
      disability,
      address,
      jobExperience,
      schoolName,
      schoolYeComp,
      schoolMajCor,
      schoolDegree,
      imgCollection,
      SecondHighName,
      SecondYeComp,
      SecondMajCor,
      SecondDegree,
      colUniName,
      colUniYeComp,
      colUniMajCor,
      colUniDegree,
      instName,
      instYeComp,
      instMajCor,
      instDegree,
      occupation,
      age,
    };

    if (this.checkField(this.state.imgCollection)) {
      this.setState({ chkimgCollection: true });
    } else {
      this.props.jobFormSubmit(obj);
      alert("Successfull submit");
      this.setState({
        fullName: "",
        fatherName: "",
        placeOfBirth: "",
        date: "",
        gender: "",
        nationality: "",
        religion: "",
        cnic: "",
        telNumber: "",
        mobNumber: "",
        martialStatus: "",
        residentType: "",
        monthlyRent: "",
        disability: "",
        address: "",
        jobExperience: "",
        schoolName: "",
        schoolYeComp: "",
        schoolMajCor: "",
        schoolDegree: "",
        imgCollection: "",
        SecondHighName: "",
        SecondYeComp: "",
        SecondMajCor: "",
        SecondDegree: "",
        colUniName: "",
        colUniYeComp: "",
        colUniMajCor: "",
        colUniDegree: "",
        instName: "",
        instYeComp: "",
        instMajCor: "",
        instDegree: "",
        step1: "formTag",
        step2: "formTagdisable",
        step3: "formTagdisable",
        occupation: "",
        age: "",
        step1show: true,
        step2show: false,
        step3show: false,
        nextbtn: true,
        prevbtn: false,
      });
    }
  };
  subJob = () => {
    const {
      comName,
      natJob,
      location,
      approxSalary,
      timePeriod,
      hrContact,
      selectJbTyp,
      approxDur,
      expReq,
      jobDes,
    } = this.state;
    const obj = {
      comName,
      natJob,
      location,
      approxSalary,
      timePeriod,
      hrContact,
      selectJbTyp,
      approxDur,
      expReq,
      jobDes,
    };
    if (this.checkField(comName)) {
      this.setState({ chkcomName: true });
      window.scrollTo(0, 100);
    } else if (this.checkField(natJob)) {
      this.setState({ chknatJob: true });
      window.scrollTo(0, 100);
    } else if (this.checkField(location)) {
      this.setState({ chklocation: true });
      window.scrollTo(0, 100);
    } else if (this.checkField(approxSalary)) {
      this.setState({ chkapproxSalary: true });
      window.scrollTo(0, 100);
    } else if (this.checkField(timePeriod)) {
      this.setState({ chktimePeriod: true });
      window.scrollTo(0, 100);
    } else if (this.checkField(hrContact)) {
      this.setState({ chkhrContact: true });
      window.scrollTo(0, 100);
    } else if (this.checkField(selectJbTyp)) {
      this.setState({ chkselectJbTyp: true });
      window.scrollTo(0, 200);
    } else if (this.checkField(approxDur) && selectJbTyp == "Temporary") {
      this.setState({ chkapproxDur: true });
      window.scrollTo(0, 200);
    } else if (this.checkField(expReq)) {
      this.setState({ chkexpReq: true });
      window.scrollTo(0, 300);
    } else if (this.checkField(jobDes)) {
      this.setState({ chkjobDes: true });
      window.scrollTo(0, 300);
    } else {
      this.props.jobOffFormSubmit(obj);
      alert("Successfull submit");
      this.setState({
        comName: "",
        natJob: "",
        location: "",
        approxSalary: "",
        timePeriod: "",
        hrContact: "",
        selectJbTyp: "",
        approxDur: "",
        expReq: "",
        jobDes: "",
      });
    }
  };

  render() {
    const {
      showScreen,
      fullName,
      fatherName,
      placeOfBirth,
      date,
      gender,
      nationality,
      religion,
      cnic,
      telNumber,
      mobNumber,
      martialStatus,
      residentType,
      monthlyRent,
      disability,
      address,
      jobExperience,
      schoolName,
      schoolYeComp,
      schoolMajCor,
      schoolDegree,
      imgCollection,
      SecondHighName,
      SecondYeComp,
      SecondMajCor,
      SecondDegree,
      colUniName,
      colUniYeComp,
      colUniMajCor,
      colUniDegree,
      instName,
      instYeComp,
      instMajCor,
      instDegree,
      comName,
      natJob,
      location,
      approxSalary,
      timePeriod,
      hrContact,
      selectJbTyp,
      approxDur,
      expReq,
      jobDes,
      occupation,
      age,
    } = this.state;
    return (
      <div
        style={{
          backgroundColor: "#dfeaff",
          height: "100%",
          minHeight: "100vh",
        }}
      >
        <MainHeader />

        <div className="container">
          <div className="row">
            <div className="col-md-6 p-3 pt-5">
              <div
                onClick={() => this.setState({ showScreen: true })}
                className="selectBtn"
                style={{
                  backgroundColor: showScreen ? "#0069d9" : "white",
                  color: showScreen ? "white" : "#0069d9",
                }}
              >
                Form of Job Seeker
              </div>
            </div>
            <div className="col-md-6 p-3 pt-5">
              <div
                onClick={() => this.setState({ showScreen: false })}
                className="selectBtn"
                style={{
                  backgroundColor: !showScreen ? "#0069d9" : "white",
                  color: !showScreen ? "white" : "#0069d9",
                }}
              >
                Form of Job Recruiter
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          {!showScreen ? (
            <div>
              <div className="row">
                <div className="col-md-4">
                  <div className="formTag">
                    <h2>Reqruiter Form</h2>
                  </div>
                </div>
              </div>
              <div className="formClose p-5 shadow">
                <div className="row">
                  <div className="col-md-6 py-3">
                    <input
                      className="jobInput"
                      placeholder="Company or Individual Name"
                      value={comName}
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "comName");
                        this.setState({ chkcomName: false });
                      }}
                    />
                    {this.state.chkcomName ? (
                      <p className="text-danger">Field is Emply</p>
                    ) : null}
                  </div>
                  <div className="col-md-6 py-3">
                    <input
                      className="jobInput"
                      placeholder="Nature Of Job"
                      value={natJob}
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "natJob");
                        this.setState({ chknatJob: false });
                      }}
                    />
                    {this.state.chknatJob ? (
                      <p className="text-danger">Field is Emply</p>
                    ) : null}
                  </div>

                  <div className="col-md-6 py-3">
                    <input
                      className="jobInput"
                      placeholder="Location"
                      value={location}
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "location");
                        this.setState({ chklocation: false });
                      }}
                    />
                    {this.state.chklocation ? (
                      <p className="text-danger">Field is Emply</p>
                    ) : null}
                  </div>
                  <div className="col-md-6 py-3">
                    <input
                      className="jobInput"
                      placeholder="Approx Sallary"
                      value={approxSalary}
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "approxSalary");
                        this.setState({ chkapproxSalary: false });
                      }}
                    />
                    {this.state.chkapproxSalary ? (
                      <p className="text-danger">Field is Emply</p>
                    ) : null}
                  </div>
                  <div className="col-md-6 py-3">
                    <input
                      className="jobInput"
                      placeholder="Time period to fill vacancy and  Start Date"
                      value={timePeriod}
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "timePeriod");
                        this.setState({ chktimePeriod: false });
                      }}
                    />
                    {this.state.chktimePeriod ? (
                      <p className="text-danger">Field is Emply</p>
                    ) : null}
                  </div>

                  <div className="col-md-6 py-3">
                    <input
                      className="jobInput"
                      placeholder="HR or Personal Contact Number"
                      value={hrContact}
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "hrContact");
                        this.setState({ chkhrContact: false });
                      }}
                    />
                    {this.state.chkhrContact ? (
                      <p className="text-danger">Field is Emply</p>
                    ) : null}
                  </div>

                  <div className="col-md-6 py-3">
                    <select
                      className="jobInput"
                      value={selectJbTyp}
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "selectJbTyp");
                        this.setState({ chkselectJbTyp: false });
                      }}
                    >
                      <option>Select Job Type</option>
                      <option value="Permenent">Permenent</option>
                      <option value="Temporary">Temporary</option>
                    </select>
                    {this.state.chkselectJbTyp ? (
                      <p className="text-danger">Select any Option</p>
                    ) : null}
                  </div>
                  {selectJbTyp == "Temporary" ? (
                    <div className="col-md-6 py-3">
                      <input
                        className="jobInput"
                        placeholder="Approx Duration"
                        value={approxDur}
                        onChange={(e) => {
                          this.setFieldVal(e.target.value, "approxDur");
                          this.setState({ chkapproxDur: false });
                        }}
                      />
                      {selectJbTyp == "Temporary" && this.state.chkapproxDur ? (
                        <p className="text-danger">Field is Emply</p>
                      ) : null}
                    </div>
                  ) : null}
                  <div className="col-md-6 py-3">
                    <select
                      className="jobInput"
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "expReq");
                        this.setState({ chkexpReq: false });
                      }}
                    >
                      <option>Experiance Required</option>
                      <option value="fresh">Fresh</option>
                      <option value="1 year">More then 1 year</option>
                      <option value="2 year">More then 2 year</option>
                      <option value="3 year">More then 3 year</option>
                      <option value="5 year">More then 5 year</option>
                    </select>
                    {this.state.chkexpReq ? (
                      <p className="text-danger">Select any Option</p>
                    ) : null}
                  </div>

                  <div className="col-md-12 py-3">
                    <textarea
                      className="jobInputTextarea"
                      placeholder="Job Description"
                      rows="7"
                      value={jobDes}
                      onChange={(e) => {
                        this.setFieldVal(e.target.value, "jobDes");
                        this.setState({ chkjobDes: false });
                      }}
                    ></textarea>
                    {this.state.chkjobDes ? (
                      <p className="text-danger">Select any Option</p>
                    ) : null}
                  </div>

                  <div className="col-md-12 py-3">
                    <button
                      class="btn-block prevbtn"
                      onClick={() => this.subJob()}
                    >
                      Post Job <i class="fas fa-paste"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {showScreen ? (
            <div>
              <div>
                <div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className={this.state.step1}>
                        <h2>Personal Details</h2>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={this.state.step2}>
                        <h2>Professional Details</h2>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={this.state.step3}>
                        <h2>Upload Resume</h2>
                      </div>
                    </div>
                  </div>

                  {this.state.step1show ? (
                    <div className="formClose p-5">
                      <div className="row">
                        <div className="col-md-6 py-3">
                          <input
                            className="jobInput"
                            type="text"
                            placeholder="Enter Full Name"
                            value={fullName}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "fullName");
                              this.setState({ chkfullname: false });
                            }}
                          />
                          {this.state.chkfullname ? (
                            <p className="text-danger">Field is Emply</p>
                          ) : null}
                        </div>
                        <div className="col-md-6 py-3">
                          <input
                            className="jobInput"
                            type="text"
                            placeholder="Enter Father Name"
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
                        <div className="col-md-6 py-3">
                          <input
                            className="jobInput"
                            type="text"
                            placeholder="Enter your Occupation"
                            value={occupation}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "occupation");
                              this.setState({ chkOccupation: false });
                            }}
                          />
                          {this.state.chkOccupation ? (
                            <p className="text-danger">Field is Emply</p>
                          ) : null}
                        </div>
                        <div className="col-md-6 py-3">
                          <input
                            className="jobInput"
                            type="number"
                            placeholder="Enter Age"
                            value={age}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "age");
                              this.setState({ chkage: false });
                            }}
                          />
                          {this.state.chkage ? (
                            <p className="text-danger">Field is Emply</p>
                          ) : null}
                        </div>
                        <div className="col-md-6 py-3">
                          <select
                            className="jobInput"
                            value={gender}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "gender");
                              this.setState({ chkgender: false });
                            }}
                          >
                            <option>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                          {this.state.chkgender ? (
                            <p className="text-danger">Select Gender</p>
                          ) : null}
                        </div>
                        <div className="col-md-6 py-3">
                          <input
                            type="date"
                            placeholder="Date of Birth"
                            className="jobInput"
                            value={date}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "date");
                              this.setState({ chkdate: false });
                            }}
                          />
                          {this.state.chkdate ? (
                            <p className="text-danger">Select Date</p>
                          ) : null}
                        </div>
                        <div className="col-md-6 py-3">
                          <input
                            className="jobInput"
                            type="text"
                            value={placeOfBirth}
                            placeholder="Place Of Birth"
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "placeOfBirth");
                              this.setState({ chkplaceOfBirth: false });
                            }}
                          />
                          {this.state.chkplaceOfBirth ? (
                            <p className="text-danger">Field is Emply</p>
                          ) : null}
                        </div>
                        <div className="col-md-6 py-3">
                          <input
                            className="jobInput"
                            placeholder="Nationality"
                            value={nationality}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "nationality");
                              this.setState({ chknationality: false });
                            }}
                          />
                          {this.state.chknationality ? (
                            <p className="text-danger">Field is Emply</p>
                          ) : null}
                        </div>
                        <div className="col-md-6 py-3">
                          <input
                            className="jobInput"
                            placeholder="Religion"
                            value={religion}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "religion");
                              this.setState({ chkreligion: false });
                            }}
                          />
                          {this.state.chkreligion ? (
                            <p className="text-danger">Field is Emply</p>
                          ) : null}
                        </div>
                        <div className="col-md-6 py-3">
                          <input
                            className="jobInput"
                            type="number"
                            placeholder="CNIC Number"
                            value={cnic}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "cnic");
                              this.setState({ chkcnic: false });
                            }}
                          />
                          {this.state.chkcnic ? (
                            <p className="text-danger">Field is Emply</p>
                          ) : null}
                        </div>
                        <div className="col-md-6 py-3">
                          <input
                            className="jobInput"
                            type="number"
                            placeholder="Tell-Number"
                            value={telNumber}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "telNumber");
                              this.setState({ chktelNumber: false });
                            }}
                          />
                          {this.state.chktelNumber ? (
                            <p className="text-danger">Field is Emply</p>
                          ) : null}
                        </div>
                        <div className="col-md-6 py-3">
                          <input
                            className="jobInput"
                            type="number"
                            placeholder="Mobile Number"
                            value={mobNumber}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "mobNumber");
                              this.setState({ chkmobNumber: false });
                            }}
                          />
                          {this.state.chkmobNumber ? (
                            <p className="text-danger">Field is Emply</p>
                          ) : null}
                        </div>
                        <div className="col-md-6 py-3">
                          <input
                            className="jobInput"
                            placeholder="Martial Status"
                            value={martialStatus}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "martialStatus");
                              this.setState({ chkmartialStatus: false });
                            }}
                          />
                          {this.state.chkmartialStatus ? (
                            <p className="text-danger">Field is Emply</p>
                          ) : null}
                        </div>
                        <div className="col-md-6 py-3">
                          <select
                            className="jobInput"
                            value={residentType}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "residentType");
                              this.setState({ chkresidentType: false });
                            }}
                          >
                            <option>Select Resident Type</option>
                            <option value="owner">Owner</option>
                            <option value="onRent">On Rent</option>
                          </select>
                          {this.state.chkresidentType ? (
                            <p className="text-danger">Select Residence</p>
                          ) : null}
                        </div>
                        <div className="col-md-6 py-3">
                          <input
                            className="jobInput"
                            type="number"
                            value={monthlyRent}
                            placeholder="Monthly Rent"
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "monthlyRent");
                              this.setState({ chkmonthlyRent: false });
                            }}
                          />
                          {this.state.chkmonthlyRent ? (
                            <p className="text-danger">Field is Emply</p>
                          ) : null}
                        </div>
                        <div className="col-md-6 py-3">
                          <select
                            className="jobInput"
                            value={disability}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "disability");
                              this.setState({ chkdisability: false });
                            }}
                          >
                            <option>Disability</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                          {this.state.chkmonthlyRent ? (
                            <p className="text-danger">Select any Option</p>
                          ) : null}
                        </div>
                        <div className="col-md-12 py-3">
                          <input
                            className="jobInput"
                            value={address}
                            placeholder="Address"
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "address");
                              this.setState({ chkaddress: false });
                            }}
                          />
                          {this.state.chkaddress ? (
                            <p className="text-danger">Field is Emply</p>
                          ) : null}
                        </div>
                        <div className="col-md-12 py-3">
                          <textarea
                            className="jobInputTextarea"
                            placeholder="Mention your experience here "
                            rows="7"
                            value={jobExperience}
                            onChange={(e) => {
                              this.setFieldVal(e.target.value, "jobExperience");
                              this.setState({ chkjobExperience: false });
                            }}
                          ></textarea>
                          {this.state.chkjobExperience ? (
                            <p className="text-danger">Field is Emply</p>
                          ) : null}
                        </div>
                        <div className="col-md-6 py-3">
                          {this.state.prevbtn ? (
                            <button class="btn-block prevbtn">Previous</button>
                          ) : null}
                        </div>
                        <div className="col-md-6 py-3">
                          <button
                            onClick={() => this.firstNext()}
                            class="btn-block prevbtn"
                          >
                            Next <i class="fas fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {this.state.step2show ? (
                    <div className="formClose p-5">
                      <div>
                        <p
                          style={{ color: "#0267b4" }}
                          className="font-weight-bold"
                        >
                          Primary School Detail
                        </p>
                        <div className="row">
                          <div className="col-md-3 py-3">
                            <input
                              className="jobInput"
                              placeholder="School Name"
                              value={schoolName}
                              onChange={(e) => {
                                this.setFieldVal(e.target.value, "schoolName");
                                this.setState({ chkschoolName: false });
                              }}
                            />
                            {this.state.chkschoolName ? (
                              <p className="text-danger">Select any Option</p>
                            ) : null}
                          </div>
                          <div className="col-md-3 py-3">
                            <input
                              className="jobInput"
                              type="number"
                              placeholder="Year of Completion"
                              value={schoolYeComp}
                              onChange={(e) => {
                                this.setFieldVal(
                                  e.target.value,
                                  "schoolYeComp"
                                );
                                this.setState({ chkschoolYeComp: false });
                              }}
                            />
                            {this.state.chkschoolYeComp ? (
                              <p className="text-danger">Select any Option</p>
                            ) : null}
                          </div>

                          <div className="col-md-3 py-3">
                            <input
                              className="jobInput"
                              placeholder="Major Course"
                              value={schoolMajCor}
                              onChange={(e) => {
                                this.setFieldVal(
                                  e.target.value,
                                  "schoolMajCor"
                                );
                                this.setState({ chkschoolMajCor: false });
                              }}
                            />
                            {this.state.chkschoolMajCor ? (
                              <p className="text-danger">Select any Option</p>
                            ) : null}
                          </div>
                          <div className="col-md-3 py-3">
                            <input
                              className="jobInput"
                              placeholder="Degree"
                              value={schoolDegree}
                              onChange={(e) => {
                                this.setFieldVal(
                                  e.target.value,
                                  "schoolDegree"
                                );
                                this.setState({ chkschoolDegree: false });
                              }}
                            />
                            {this.state.chkschoolDegree ? (
                              <p className="text-danger">Select any Option</p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div>
                        <p
                          style={{ color: "#0267b4" }}
                          className="font-weight-bold mt-4"
                        >
                          Secondary High School
                        </p>
                        <div className="row">
                          <div className="col-md-3 py-3">
                            <input
                              className="jobInput"
                              value={SecondHighName}
                              placeholder="Secondary High Name"
                              onChange={(e) => {
                                this.setFieldVal(
                                  e.target.value,
                                  "SecondHighName"
                                );
                              }}
                            />
                          </div>
                          <div className="col-md-3 py-3">
                            <input
                              className="jobInput"
                              value={SecondYeComp}
                              type="number"
                              placeholder="Year of Completion"
                              onChange={(e) => {
                                this.setFieldVal(
                                  e.target.value,
                                  "SecondYeComp"
                                );
                              }}
                            />
                          </div>

                          <div className="col-md-3 py-3">
                            <input
                              className="jobInput"
                              value={SecondMajCor}
                              placeholder="Major Course"
                              onChange={(e) => {
                                this.setFieldVal(
                                  e.target.value,
                                  "SecondMajCor"
                                );
                              }}
                            />
                          </div>
                          <div className="col-md-3 py-3">
                            <input
                              className="jobInput"
                              value={SecondDegree}
                              placeholder="Degree"
                              onChange={(e) => {
                                this.setFieldVal(
                                  e.target.value,
                                  "SecondDegree"
                                );
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <p
                          style={{ color: "#0267b4" }}
                          className="font-weight-bold mt-4"
                        >
                          College / University
                        </p>
                        <div className="row">
                          <div className="col-md-3 py-3">
                            <input
                              className="jobInput"
                              value={colUniName}
                              placeholder="College / University Name"
                              onChange={(e) => {
                                this.setFieldVal(e.target.value, "colUniName");
                              }}
                            />
                          </div>
                          <div className="col-md-3 py-3">
                            <input
                              className="jobInput"
                              value={colUniYeComp}
                              type="number"
                              placeholder="Year of Completion"
                              onChange={(e) => {
                                this.setFieldVal(
                                  e.target.value,
                                  "colUniYeComp"
                                );
                              }}
                            />
                          </div>

                          <div className="col-md-3 py-3">
                            <input
                              className="jobInput"
                              value={colUniMajCor}
                              placeholder="Major Course"
                              onChange={(e) => {
                                this.setFieldVal(
                                  e.target.value,
                                  "colUniMajCor"
                                );
                              }}
                            />
                          </div>
                          <div className="col-md-3 py-3">
                            <input
                              className="jobInput"
                              value={colUniDegree}
                              placeholder="Degree"
                              onChange={(e) => {
                                this.setFieldVal(
                                  e.target.value,
                                  "colUniDegree"
                                );
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <p
                          style={{ color: "#0267b4" }}
                          className="font-weight-bold mt-4"
                        >
                          Business / Technical Institute
                        </p>
                        <div className="row">
                          <div className="col-md-3 py-3">
                            <input
                              className="jobInput"
                              value={instName}
                              placeholder="Institute Name"
                              onChange={(e) => {
                                this.setFieldVal(e.target.value, "instName");
                              }}
                            />
                          </div>
                          <div className="col-md-3 py-3">
                            <input
                              className="jobInput"
                              value={instYeComp}
                              type="number"
                              placeholder="Year of Completion"
                              onChange={(e) => {
                                this.setFieldVal(e.target.value, "instYeComp");
                              }}
                            />
                          </div>

                          <div className="col-md-3 py-3">
                            <input
                              className="jobInput"
                              value={instMajCor}
                              placeholder="Major Course"
                              onChange={(e) => {
                                this.setFieldVal(e.target.value, "instMajCor");
                              }}
                            />
                          </div>
                          <div className="col-md-3 py-3">
                            <input
                              className="jobInput"
                              value={instDegree}
                              placeholder="Degree"
                              onChange={(e) => {
                                this.setFieldVal(e.target.value, "instDegree");
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div className="col-md-6 py-3">
                          {this.state.prevbtn ? (
                            <button
                              onClick={() =>
                                this.setState({
                                  step1: "formTag",
                                  step2: "formTagdisable",
                                  step3: "formTagdisable",
                                  step1show: true,
                                  step2show: false,
                                  step3show: false,
                                  nextbtn: true,
                                  prevbtn: false,
                                })
                              }
                              class="btn-block prevbtn"
                            >
                              <i class="fas fa-arrow-left"></i> Previous
                            </button>
                          ) : null}
                        </div>
                        <div className="col-md-6 py-3">
                          {this.state.nextbtn ? (
                            <button
                              onClick={() => {
                                this.secNext();
                              }}
                              class="btn-block prevbtn"
                            >
                              Next <i class="fas fa-arrow-right"></i>
                            </button>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {this.state.step3show ? (
                    <div className="formClose p-5">
                      <div className="row">
                        <div className="col-md-12 py-3">
                          <label style={{ color: "#0267b4" }} className="lab">
                            Upload Resume
                          </label>
                          <input
                            className="Image"
                            type="file"
                            name="imgCollection"
                            onChange={this.onFileChange}
                            accept="image/*"
                          />
                        </div>
                        {this.state.chkimgCollection ? (
                          <p className="text-danger">Select any Option</p>
                        ) : null}
                        {/* <div className="col-md-12 py-3">
                                                <button className='prevbtn'>Upload Resume</button>
                                            </div> */}
                        <div className="col-md-6 py-3">
                          {this.state.prevbtn ? (
                            <button
                              onClick={() =>
                                this.setState({
                                  step1: "formTagdisable",
                                  step2: "formTag",
                                  step3: "formTagdisable",
                                  step1show: false,
                                  step2show: true,
                                  step3show: false,
                                  nextbtn: true,
                                  prevbtn: true,
                                })
                              }
                              class="btn-block prevbtn"
                            >
                              <i class="fas fa-arrow-left"></i> Previous
                            </button>
                          ) : null}
                        </div>
                        <div className="col-md-6 py-3">
                          <button
                            onClick={() => {
                              this.submitForm();
                            }}
                            class="btn-block prevbtn"
                          >
                            <i class="fas fa-check"></i> Submit Response
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {};
}
function mapDispatchToProp(dispatch) {
  return {
    jobFormSubmit: (e) => {
      dispatch(jobFormSubmit(e));
    },
    jobOffFormSubmit: (e) => {
      dispatch(jobOffFormSubmit(e));
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(JobForm);
