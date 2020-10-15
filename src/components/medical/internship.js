import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./medical.css";
import intern from '../../images/intern.png'

export default class Internship extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div style={{backgroundColor:'#459fff'}} className="container-fluid">
          <div className="container">
            <div className="row pt-5 pb-5">
              <div className="col-md-4">
              <img src={intern} width='100%' />
                {/* <button>Apply for Internship</button>
                <button>Apply for Camp</button> */}
              </div>
              
              <div className="col-md-8">
                <div className="intenForm">
                  <div>
                    <h2 className="text-white text-left p-5">
                    Form For The Medical Interns
                    </h2>
                  </div>
                  <form>
                    <div className="row p-5">
                      <div className="col-md-6 pt-4 pb-4">
                        <input className="internInp" placeholder="Name" />
                      </div>
                      <div className="col-md-6 pt-4 pb-4">
                        <input className="internInp" placeholder="Age" />
                      </div>
                      <div className="col-md-6 pt-4 pb-4">
                        <input
                          className="internInp"
                          placeholder="Qualification"
                        />
                      </div>
                      <div className="col-md-6 pt-4 pb-4">
                        <input className="internInp" placeholder="DOB" />
                      </div>
                      <div className="col-md-6 pt-4 pb-4">
                        <select className="internInp">
                          <option>Select Course</option>
                          <option>Pharmacy</option>
                        </select>
                      </div>
                      <div className="col-md-6 pt-4 pb-4">
                        <select className="internInp">
                          <option>Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                      <div className="col-md-12 pt-4 pb-4">
                        <input className="internInp" type='email' placeholder="email" />
                      </div>
                      <div className="col-md-6 pt-4 pb-4">
                        <input className="internInp" type='number' placeholder="Contact No" />
                      </div>
                      <div className="col-md-6 pt-4 pb-4">
                        <input className="internInp" type='number' placeholder="CNIC No" />
                      </div>
                      <div className="col-md-12 pt-4 pb-4">
                          <button className='btn btn-light btn-block'>Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
