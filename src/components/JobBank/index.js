import React, { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import img1 from "../../images/engineer.png";
import operator from "../../images/operator.png";
import manager from "../../images/manager.png";
import taxiDriver from "../../images/taxi-driver.png";
import JobContact from "./JobContact";
import { Link } from "react-router-dom";
import history from '../../history';

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
      <div className="">
        {/* POPULAR JOBS START =============>>>>>>>>*/}


        <div className="container my-4">
          <div className="row">
            <div className="col-md-6">
              <table className="showtable">
                <tr>
                  <td>JobHunt</td>
                  <td>Stats</td>
                </tr>
                <tr>
                  <td>Vision</td>
                  <td>5000</td>
                </tr>

                <tr>
                  <td>Jobs Placed</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Hired Candidates</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td>Companies</td>
                  <td>200</td>
                </tr>
              </table>
            </div>
            <div className="col-md-6 p-2">
              <iframe
                width="100%"
                height="320"
                src="https://www.youtube.com/embed/N4DIjxCGWVc"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>



        <div>
          <h3 className="my-4 text-center mt-5" style={{ color: "#0267b4" }}>
            Popular Categories
          </h3>
          <div className="container">
            <div className="row mt-4 justify-content-center">
              <div
                className="col-md-2 shadow divStl m-3 small text-center"
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
                className="col-md-2 shadow m-3 small text-center"
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
                className="col-md-2 shadow m-3 small text-center"
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
                className="col-md-2 shadow m-3 small text-center"
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
        <div className="container mt-5 d-flex justify-content-center">

          <div
            className="col-md-6 shadow  small "
            style={{ backgroundColor: "#f5f6f7", height: 140, display: 'flex', alignItems: 'center' }}

          >
            <a href="/job" style={{ display: 'flex', alignItems: 'center' }}>
              <p style={{ fontSize: "3.5em", marginTop: 15, color: '#0267b4' }}>
                <i class="fab fa-wpforms"></i>
              </p>
              <p style={{ fontSize: "2em", marginTop: 15, marginLeft: 20, color: '#0267b4' }}>Are you a Job Seeker ?</p>
            </a>
          </div>
          <div
            className="col-md-6 shadow  small "
            style={{ backgroundColor: "#f5f6f7", height: 140, display: 'flex', alignItems: 'center' }}

          >
            <a href="/job" style={{ display: 'flex', alignItems: 'center' }}>
              <p style={{ fontSize: "3.5em", marginTop: 15, color: '#0267b4' }}>
                <i class="fab fa-wpforms"></i>
              </p>
              <p style={{ fontSize: "2em", marginTop: 15, marginLeft: 20, color: '#0267b4' }}>Are you a Recruiter ?</p>
            </a>
          </div>
        </div>


        {
          this.state.jobseekarForm ? <div className='fullScreen'>
            <div className='container p-5'>
              <h1>Job Seekar</h1>
            </div>
          </div> : null
        }

        {/* JOB SEEKER AND RECRUITER START =============>>>>>>>>*/}
        <div className="container-fluid my-5 jobList">
          <div className="container ">
            <h3 style={{ color: "#1371b8", textAlign: "left" }} className="font-weight-bold  pt-5 pb-5">Featured Jobs</h3>
          </div>
          <div className="container ">
            <table
              style={{ width: "100%" }}
              className="jobTable table-responsive-sm"
            >
              <thead className="TheadStyle">
                <tr className="headName">
                  <th >Full Name</th>
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
                    <button className="viePro">   <i class="fas fa-id-card"></i> View</button>
                  </td>
                </tr>
                <tr>
                  <td>Kamran</td>
                  <td>Electrician</td>
                  <td>23</td>
                  <td>
                    <button className="viePro">   <i class="fas fa-id-card"></i> View</button>
                  </td>
                </tr>
                <tr>
                  <td>Kamran</td>
                  <td>Electrician</td>
                  <td>23</td>
                  <td>
                    <button className="viePro">   <i class="fas fa-id-card"></i> View</button>
                  </td>
                </tr>
                <tr>
                  <td>Kamran</td>
                  <td>Electrician</td>
                  <td>23</td>
                  <td>
                    <button className="viePro">   <i class="fas fa-id-card"></i> View</button>
                  </td>
                </tr>
                <tr>
                  <td>Kamran</td>
                  <td>Electrician</td>
                  <td>23</td>
                  <td>
                    <button className="viePro">   <i class="fas fa-id-card"></i> View</button>
                  </td>
                </tr>
                <tr>
                  <td>Kamran</td>
                  <td>Electrician</td>
                  <td>23</td>
                  <td>
                    <button className="viePro">   <i class="fas fa-id-card"></i> View</button>
                  </td>
                </tr>
                <tr>
                  <td>Kamran</td>
                  <td>Electrician</td>
                  <td>23</td>
                  <td>
                    <button className="viePro">   <i class="fas fa-id-card"></i> View</button>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        <JobContact />

      </div >
    );
  }
}
