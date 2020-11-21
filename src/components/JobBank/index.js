import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import MainHeader from "../Home/MainHeader";
import jobpic from "../../images/jobbank.jpg";
import img1 from "../../images/engineer.png";
import operator from "../../images/operator.png";
import manager from "../../images/manager.png";
import taxiDriver from "../../images/taxi-driver.png";
import JobContact from "./JobContact";

export default class JobBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobseekarForm: true,
      jobrecruter: false,
    };
  }

  render() {
    return (
      <div className="">
        {/* POPULAR JOBS START =============>>>>>>>>*/}
        <div>
          <h3 className="my-4" style={{ color: "dodgerblue" }}>
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
                  {/* <i class="fas fa-laptop-code"></i>operator */}
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
                <button className="vieMor my-3">Apply for job</button>
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

        {/* JOB SEEKER AND RECRUITER START =============>>>>>>>>*/}
        <div className="container my-5">
          <h3 style={{ color: "dodgerblue" }}>Featured Jobs</h3>
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
            <h2 className="py-5">JobHunt Site Stats</h2>
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
        {this.state.jobseekarForm ? (
          <div className="displayFullForm">
            <div style={{ overflow: "scroll", height: "100%" }}>
              <div>
                <h5>Job Seekar</h5>
                <button>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div>
                <div className="container">
                  <div className="p-3">
                    <h2>Personal Details</h2>
                  </div>
                  <div className="row">
                    <div className="col-md-6 py-3">
                      <input className="inp" placeholder="Enter Name" />
                    </div>
                    <div className="col-md-6 py-3">
                      <input className="inp" placeholder="Enter Father Name" />
                    </div>
                    <div className="col-md-6 py-3">
                      <select className="inp">
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="col-md-6 py-3">
                      <input type="date" className="inp" />
                    </div>
                    <div className="col-md-6 py-3">
                      <input className="inp" placeholder="Place Of Birth" />
                    </div>
                    <div className="col-md-6 py-3">
                      <input className="inp" placeholder="Nationality" />
                    </div>
                    <div className="col-md-6 py-3">
                      <input className="inp" placeholder="Religion" />
                    </div>
                    <div className="col-md-6 py-3">
                      <input className="inp" placeholder="CNIC Number" />
                    </div>
                    <div className="col-md-6 py-3">
                      <input className="inp" placeholder="Tell-Number" />
                    </div>
                    <div className="col-md-6 py-3">
                      <input className="inp" placeholder="Mobile Number" />
                    </div>
                    <div className="col-md-6 py-3">
                      <input className="inp" placeholder="Merital Status" />
                    </div>
                    <div className="col-md-6 py-3">
                      <select className="inp">
                        <option>Select Resident Type</option>
                        <option>Owner</option>
                        <option>On Rent</option>
                      </select>
                    </div>
                    <div className="col-md-6 py-3">
                      <input className="inp" placeholder="Monthly Rent" />
                    </div>
                    <div className="col-md-6 py-3">
                      <select className="inp">
                        <option>Disability</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    <div className="col-md-12 py-3">
                      <input className="inp" placeholder="Address" />
                    </div>
                    <div className="col-md-12 py-3">
                      <textarea
                        className="inp"
                        placeholder="Type Details"
                        rows="7"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ backgroundColor: "rgb(250,250,250)" }}
                class="modal-footer d-flex justify-content-center"
              >
                <button type="button" class="donate" data-dismiss="modal">
                  Close
                </button>
                {/* <button type="button" class="btn btn-primary">
                  Previous
                </button> */}
                <button type="button" class="donate">
                  Next
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
