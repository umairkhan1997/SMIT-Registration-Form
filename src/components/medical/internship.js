import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./medical.css";
import intern from "../../images/intern.png";

export default class Internship extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container-fluid bg-light">
          <div className="container">
            <div className="row pt-5 pb-5">
              <div className="col-md-4">
                <img style={{ boxShadow: '0 0 15px grey', borderRadius: '200px' }} src={intern} width="100%" />
                {/* <button>Apply for Internship</button>
                <button>Apply for Camp</button> */}
              </div>
              <div className="col-md-8">
                <div className="intenForm">
                  <div>
                    <h2 className="text-left p-5 font-weight-bold">
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
                        <input
                          className="internInp"
                          type="email"
                          placeholder="email"
                        />
                      </div>
                      <div className="col-md-6 pt-4 pb-4">
                        <input
                          className="internInp"
                          type="number"
                          placeholder="Contact No"
                        />
                      </div>
                      <div className="col-md-6 pt-4 pb-4">
                        <input
                          className="internInp"
                          type="number"
                          placeholder="CNIC No"
                        />
                      </div>
                      <div className="col-md-12 pt-4 pb-4">
                        <button className="btn btn-primary btn-block">
                          Submit
                        </button>
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
