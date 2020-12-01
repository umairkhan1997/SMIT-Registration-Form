import React, { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import img1 from "../../images/engineer.png";
import operator from "../../images/operator.png";
import manager from "../../images/manager.png";
import taxiDriver from "../../images/taxi-driver.png";
import JobContact from "./JobContact";
import { Link } from "react-router-dom";
export default class JobBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobseekarForm: false,
      jobrecruter: false,
    };
  }
  jobFormPg = () => {
    this.props.history.push('/job')
  }
  render() {

    return (
      <div className="text-center">
        {/* POPULAR JOBS START =============>>>>>>>>*/}
        <div>
          <h3 className="my-4 font-weight-bold" style={{ color: "#0267b4" }}>
            Popular Categories
          </h3>
          <div className="container">
            <div className="row mt-4 justify-content-center">
              <div
                className="col-md-2 shadow divStl m-3 small"
                style={{ backgroundColor: "#f5f6f7" }}
              >
                <p style={{ fontSize: "3.5em" }}>
                  <img
                    src={manager}
                    style={{ marginTop: 20 }}
                    width="80px"
                    height="80px"
                  />
                </p>
                <p style={{ fontSize: "1.5em" }}>Supervisor</p>
              </div>

              <div
                className="col-md-2 shadow m-3 small"
                style={{ backgroundColor: "#f5f6f7" }}
              >
                <p style={{ fontSize: "3.5em" }}>
                  <img
                    src={operator}
                    style={{ marginTop: 20 }}
                    width="80px"
                    height="80px"
                  />
                </p>
                <p style={{ fontSize: "1.5em" }}>Operator</p>
              </div>
              <div
                className="col-md-2 shadow m-3 small"
                style={{ backgroundColor: "#f5f6f7" }}
              >
                <p style={{ fontSize: "3.5em" }}>
                  <img
                    src={taxiDriver}
                    style={{ marginTop: 20 }}
                    width="80px"
                    height="80px"
                  />
                </p>
                <p style={{ fontSize: "1.5em" }}>Driver</p>
              </div>
              <div
                className="col-md-2 shadow m-3 small"
                style={{ backgroundColor: "#f5f6f7" }}
              >
                <p style={{ fontSize: "3.5em" }}>
                  {/* <i class="fas fa-laptop-code"></i> */}
                  <img
                    src={img1}
                    style={{ marginTop: 20 }}
                    width="80px"
                    height="80px"
                  />
                </p>
                <p style={{ fontSize: "1.5em" }}>Labour</p>
              </div>
            </div>
          </div>
        </div>

        {/* JOB SEEKER AND RECRUITER START =============>>>>>>>>*/}
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-6 jobse shadow text-center">
              <div className="p-5">
                <h4 className="font-weight-bold">I AM JOBSEEKER!</h4>
                <h6>Do you need a Job ?</h6>
                <h6>
                  So we do have a suitable Job according to your requirment
                </h6>
                <Link to='/job'>
                  <button className="vieMor my-3" >Apply for job</button>
                </Link >
              </div>
            </div>
            <div className="col-md-6 jobre shadow text-center">
              <div className="p-5">
                <h4 className="font-weight-bold">I AM RECRUITER!</h4>
                <h6>Do you have a Job ?</h6>
                <h6>
                  So we do have a suitable employee according to your requirment
                </h6>
                <button className="vieMor my-3">Register new job</button>
              </div>
            </div>
          </div>
        </div>

        {this.state.jobseekarForm ? <div className='fullScreen'>
          <div className='container p-5'>
            <h1>Job Seekar</h1>
          </div>
        </div> : null}

        {/* JOB SEEKER AND RECRUITER START =============>>>>>>>>*/}
        <div className="container my-5">
          <h3 style={{ color: "#1371b8", textAlign: "center" }} className="font-weight-bold">Featured Jobs</h3>
        </div>
        <div className="container">
          <table
            style={{ width: "100%" }}
            className="jobTable table-responsive-sm"
          >
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Occupation</th>
                <th>Age</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kamran</td>
                <td>Electrician</td>
                <td>23</td>
                <td>
                  <button className="viePro">View Profile</button>
                </td>
              </tr>
              <tr>
                <td>Kamran</td>
                <td>Electrician</td>
                <td>23</td>
                <td>
                  <button className="viePro">View Profile</button>
                </td>
              </tr>
              <tr>
                <td>Kamran</td>
                <td>Electrician</td>
                <td>23</td>
                <td>
                  <button className="viePro">View Profile</button>
                </td>
              </tr>
              <tr>
                <td>Kamran</td>
                <td>Electrician</td>
                <td>23</td>
                <td>
                  <button className="viePro">View Profile</button>
                </td>
              </tr>
              <tr>
                <td>Kamran</td>
                <td>Electrician</td>
                <td>23</td>
                <td>
                  <button className="viePro">View Profile</button>
                </td>
              </tr>
              <tr>
                <td>Kamran</td>
                <td>Electrician</td>
                <td>23</td>
                <td>
                  <button className="viePro">View Profile</button>
                </td>
              </tr>
              <tr>
                <td>Kamran</td>
                <td>Electrician</td>
                <td>23</td>
                <td>
                  <button className="viePro">View Profile</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="vieMor">View More</button>
        </div>

        {/* COUNT OF JOBS================> */}
        <div className="countDiv">
          <div className="container">
            <h2 className="py-5 font-weight-bold" style={{ color: '#1371b8' }}>JobHunt Site Stats</h2>
            <div className="row">
              <div className="col-md-4 p-5">
                <h2 style={{ color: "dodgerblue" }}>500</h2>
                <h3>Jobs Placed</h3>
              </div>
              <div className="col-md-4 p-5">
                <h2 style={{ color: "dodgerblue" }}>400</h2>
                <h3>Hired Candidates</h3>
              </div>
              <div className="col-md-4 p-5">
                <h2 style={{ color: "dodgerblue" }}>200</h2>
                <h3>Companies</h3>
              </div>
            </div>
          </div>
        </div>

        <JobContact />

      </div>
    );
  }
}
