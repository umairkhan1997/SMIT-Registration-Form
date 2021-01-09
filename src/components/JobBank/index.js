import React, { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import img1 from "../../images/engineer.png";
import operator from "../../images/operator.png";
import manager from "../../images/manager.png";
import taxiDriver from "../../images/taxi-driver.png";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  JobBankHuntGet,
  jobBankFormGet,
} from "../../Redux/action/JobBankAction";

class JobBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobseekarForm: false,
      jobrecruter: false,
    };
  }
  jobFormPg = () => {
    this.props.history.push("/job");
  };
  componentDidMount() {
    this.props.JobBankHuntGet();
    this.props.jobBankFormGet();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {/* JOB SEEKER AND RECRUITER START =============>>>>>>>>*/}
        <div
          style={{
            backgroundImage:
              "url('https://miro.medium.com/max/4356/1*nlQxJsWScn0G_mkK86vxXg.png')",
            backgroundSize: "cover",
          }}
          className="py-5"
        >
          <div className="container my-5 py-5 d-flex justify-content-end">
            <div className="mainCoverCard text-dark p-5">
              <p style={{ fontSize: "3.5em" }}>
                <i className="fab fa-wpforms"></i>
              </p>
              <p style={{ fontSize: "2em" }}>
                Are you a Job Seeker? or Recruiter?
              </p>
              <button
                className="btn btn-outline-dark rounded-pill px-5"
                onClick={this.jobFormPg}
              >
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Intro =============>>>>>>>>*/}

        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-md-6 p-2">
              <div className="py-5 px-4 bg-white shadow rounded introCard">
                <h2>Introduction</h2>
              </div>
            </div>
            <div className="col-md-6 p-2">
              <iframe
                className="video"
                width="100%"
                src="https://www.youtube.com/embed/nlsxd4g0ASA"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="allowfullscreen"
              ></iframe>
            </div>
          </div>
        </div>

        {/* JOB SEEKER AND RECRUITER START =============>>>>>>>>*/}
        <div style={{ backgroundColor: "#dce9f7" }} className="py-5 shadow">
          <div className="container">
            <div className="row">
              {this.props.JobBankHuntGets &&
                this.props.JobBankHuntGets.map((i, ind) => {
                  return (
                    <div key={ind} className="col-md-3 py-3">
                      <p style={{ fontSize: "1.5em" }}>{i.catName}</p>
                      <h3
                        className="shadow p-3 rounded text-white"
                        style={{ backgroundColor: "rgba(0,0,0,.4)" }}
                      >
                        {i.count}
                      </h3>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div>
          <h3 className="my-4 text-center mt-5" style={{ color: "#0267b4" }}>
            Popular Categories
          </h3>
          <div className="container">
            <div className="row ">
              <div className="col-md-3 p-4 categoryCard">
                <div className="p-3 text-center backgroundLight rounded border">
                  <img width="80%" src={manager} alt="Supervisor" />
                  <p style={{ fontSize: "1.5em" }}>Supervisor</p>
                </div>
              </div>
              <div className="col-md-3 p-4 categoryCard">
                <div className="p-3 text-center backgroundLight rounded border">
                  <img width="80%" src={operator} alt="Operator" />
                  <p style={{ fontSize: "1.5em" }}>Operator</p>
                </div>
              </div>
              <div className="col-md-3 p-4 categoryCard">
                <div className="p-3 text-center backgroundLight rounded border">
                  <img width="80%" src={taxiDriver} alt="driver" />
                  <p style={{ fontSize: "1.5em" }}>Driver</p>
                </div>
              </div>
              <div className="col-md-3 p-4 categoryCard">
                <div className="p-3 text-center backgroundLight rounded border">
                  <img width="80%" src={img1} alt="Labour" />
                  <p style={{ fontSize: "1.5em" }}>Labour</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {this.state.jobseekarForm ? (
          <div className="fullScreen">
            <div className="container p-5">
              <h1>Job Seekar</h1>
            </div>
          </div>
        ) : null}

        {/* JOB SEEKER AND RECRUITER START =============>>>>>>>>*/}
        <div className="jobList">
          <div className="container my-5">
            <div className="displayheading">
              <h3>Featured Jobs</h3>
            </div>
            <div className="container">
              <table className="jobTable table-responsive-sm">
                <thead className="TheadStyle">
                  <tr className="headName">
                    <td>Full Name</td>
                    <td>Occupation</td>
                    <td>Age</td>
                    <td>Gender</td>
                    <td>Residence</td>
                  </tr>
                </thead>
                <tbody>
                  {this.props.jobBankFormGets &&
                    this.props.jobBankFormGets.map((i, ind) => {
                      return i.favourite ? (
                        <tr key={ind}>
                          <td>{i.fullName}</td>
                          <td>{i.occupation}</td>
                          <td>{i.age}</td>
                          <td>{i.gender}</td>
                          <td>{i.placeOfBirth}</td>
                        </tr>
                      ) : null;
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    JobBankHuntGets: state.reducerJobBank.JobBankHuntGets,
    jobBankFormGets: state.reducerJobBank.jobBankFormGets,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    JobBankHuntGet: () => {
      dispatch(JobBankHuntGet());
    },
    jobBankFormGet: () => {
      dispatch(jobBankFormGet());
    },
  };
}
export default withRouter(connect(mapStateToProp, mapDispatchToProp)(JobBank));
