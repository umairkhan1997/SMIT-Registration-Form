import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import MainHeader from "../Home/MainHeader";
import jobpic from "../../images/jobbank.jpg";
import img1 from "../../images/engineer.png";
import operator from "../../images/operator.png";
import manager from "../../images/manager.png";
import taxiDriver from "../../images/taxi-driver.png";
import JobContact from './JobContact';
export default class JobBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="">
        {/* POPULAR JOBS START =============>>>>>>>>*/}
        <div>
          <h3 className="mt-4 font-weight-bold">Popular Categories</h3>
          <div className="container-fluid">
            <div className="row mt-4 justify-content-center">
              <div
                className="col-md-2 shadow divStl m-3"
                style={{ backgroundColor: "#f5f6f7" }}
              >
                <p style={{ fontSize: "3.5em" }}>
                  <img src={manager} width="80px" height="80px" />
                </p>
                <p style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                  Supervisor
                </p>
              </div>

              <div
                className="col-md-2 shadow m-3"
                style={{ backgroundColor: "#f5f6f7" }}
              >
                <p style={{ fontSize: "3.5em" }}>
                  {/* <i class="fas fa-laptop-code"></i>operator */}
                  <img src={operator} width="80px" height="80px" />
                </p>
                <p style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                  Operator
                </p>
              </div>
              <div
                className="col-md-2 shadow m-3"
                style={{ backgroundColor: "#f5f6f7" }}
              >
                <p style={{ fontSize: "3.5em" }}>
                  <img src={taxiDriver} width="80px" height="80px" />
                </p>
                <p style={{ fontSize: "1.5em", fontWeight: "bold" }}>Driver</p>
              </div>
              <div
                className="col-md-2 shadow m-3"
                style={{ backgroundColor: "#f5f6f7" }}
              >
                <p style={{ fontSize: "3.5em" }}>
                  {/* <i class="fas fa-laptop-code"></i> */}
                  <img src={img1} width="80px" height="80px" />
                </p>
                <p style={{ fontSize: "1.5em", fontWeight: "bold" }}>Labour</p>
              </div>
            </div>
          </div>
        </div>

      {/* JOB SEEKER AND RECRUITER START =============>>>>>>>>*/}
      <div className='container-fluid mt-5' >
        <div className='row'>
        <div className='col-md-6 jobse shadow text-center'>
<div  className="p-5">
<h4 className='font-weight-bold'>I AM JOBSEEKER!</h4>
<h6 >Do you need a Job ?</h6>
<h6>So we do have a suitable Job according to your requirment</h6>
<button className='btn btn-outline-dark mt-3'>Apply for job</button>
</div>
</div>
<div className='col-md-6 jobre shadow text-center' >
<div  className="p-5">
<h4 className='font-weight-bold'>I AM RECRUITER!</h4>
<h6>Do you have a Job ?</h6>
<h6>So we do have a suitable employee according to your requirment</h6>
<button className='btn btn-outline-dark mt-3'>Register new job</button>
</div>
</div>
</div>
      </div>

{/* JOB SEEKER AND RECRUITER START =============>>>>>>>>*/}
<div className='container mt-5'>
  <h4 className='text-left font-weight-bold'>Featured Jobs</h4>
</div>
<div className='container mt-1 feaDiv  mb-5'>
<div className='row'>
<div className='col-md-12  featDiv '>
<div className='row mb-5 mt-4'>
  <div className='col-md-3'><h4 className='text-capitalize font-weight-bold'>Full Name</h4></div>
  <div className='col-md-3 text-left '><h4 className='text-capitalize font-weight-bold'>Occupation</h4></div>
  <div className='col-md-3 text-left '><h4 className='text-capitalize font-weight-bold'>Age</h4></div>
</div>
<div className='row mb-3'>
  <div className='col-md-3'><h6 className='text-capitalize '>Umair Khan</h6></div>
  <div className='col-md-3 text-left '><h6 className='text-capitalize '>Electrician</h6></div>
  <div className='col-md-3 text-left '><h6 className='text-capitalize '>23</h6></div>
  <div className='col-md-3 '><button className='viePro' >View Profile</button></div>
</div>
<div className='row mb-3'>
  <div className='col-md-3'><h6 className='text-capitalize '>Umair Khan</h6></div>
  <div className='col-md-3 text-left '><h6 className='text-capitalize '>Electrician</h6></div>
  <div className='col-md-3 text-left '><h6 className='text-capitalize '>23</h6></div>
  <div className='col-md-3 '><button className='viePro' >View Profile</button></div>
</div>
<div className='row mb-3'>
  <div className='col-md-3'><h6 className='text-capitalize '>Umair Khan</h6></div>
  <div className='col-md-3 text-left '><h6 className='text-capitalize '>Electrician</h6></div>
  <div className='col-md-3 text-left '><h6 className='text-capitalize '>23</h6></div>
  <div className='col-md-3 '><button className='viePro' >View Profile</button></div>
</div>
<div className='row mb-3'>
  <div className='col-md-3'><h6 className='text-capitalize '>Umair Khan</h6></div>
  <div className='col-md-3 text-left '><h6 className='text-capitalize '>Electrician</h6></div>
  <div className='col-md-3 text-left '><h6 className='text-capitalize '>23</h6></div>
  <div className='col-md-3 '><button className='viePro' >View Profile</button></div>
</div>
<div className='row mb-3'>
  <div className='col-md-3'><h6 className='text-capitalize '>Umair Khan</h6></div>
  <div className='col-md-3 text-left '><h6 className='text-capitalize '>Electrician</h6></div>
  <div className='col-md-3 text-left '><h6 className='text-capitalize '>23</h6></div>
  <div className='col-md-3 '><button className='viePro' >View Profile</button></div>
</div>

<div className='row mb-3'>
  <div className='col-md-3'><h6 className='text-capitalize '>Umair Khan</h6></div>
  <div className='col-md-3 text-left '><h6 className='text-capitalize '>Electrician</h6></div>
  <div className='col-md-3 text-left '><h6 className='text-capitalize '>23</h6></div>
  <div className='col-md-3 '><button className='viePro' >View Profile</button></div>
</div>
<div className='row mb-3'>
  <div className='col-md-3'><h6 className='text-capitalize '>Umair Khan</h6></div>
  <div className='col-md-3 text-left '><h6 className='text-capitalize '>Electrician</h6></div>
  <div className='col-md-3 text-left '><h6 className='text-capitalize '>23</h6></div>
  <div className='col-md-3 '><button className='viePro' >View Profile</button></div>
</div>

<div className='row mb-3'>
  <div className='col-md-3'><h6 className='text-capitalize '>Umair Khan</h6></div>
  <div className='col-md-3 text-left '><h6 className='text-capitalize '>Electrician</h6></div>
  <div className='col-md-3 text-left '><h6 className='text-capitalize '>23</h6></div>
  <div className='col-md-3 '><button className='viePro' >View Profile</button></div>
</div>
<div className='row mb-3'>
  <div className='col-md-3'><h6 className='text-capitalize '>Umair Khan</h6></div>
  <div className='col-md-3 text-left '><h6 className='text-capitalize '>Electrician</h6></div>
  <div className='col-md-3 text-left '><h6 className='text-capitalize '>23</h6></div>
  <div className='col-md-3 '><button className='viePro' >View Profile</button></div>
</div>
</div>
{/* <div className='col-md-3 text-left ml-3 shadow'>
<h1>asdsad</h1>
</div> */}
</div>
<div className='container mt-5 pb-5 viewMore'><button className='vieMor' >View More</button></div>
</div>

{/* COUNT OF JOBS================> */}
<div className='container-fluid countDiv'>
  <h2 className='pt-5 mb-5 font-weight-bold'>JobHunt Site Stats</h2>
  <div className='row justify-content-around pb-5'>
<div>
  <h2 style={{color:'dodgerblue',fontWeight:'bold'}}>500</h2>
  <h3>Jobs Placed</h3>
</div>
<div>
  <h2 style={{color:'dodgerblue',fontWeight:'bold'}}>400</h2>
  <h3>Hired Candidates</h3>
</div>
<div>
  <h2 style={{color:'dodgerblue',fontWeight:'bold'}}>200</h2>
  <h3>Companies</h3>
</div>
  </div>
</div>

<JobContact />
      </div>
    );
  }
}
