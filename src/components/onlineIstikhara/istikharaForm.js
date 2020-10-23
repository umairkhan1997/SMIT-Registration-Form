import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./istikhara.css";
import istikhara from "../../images/istikhara.jpg";

export default class IstikharaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="back" style={{ backgroundImage: `url(${istikhara})` }}>
          <div style={{ backgroundColor: "rgba(0,0,0,.5)" }} className="p-5">
            <h1 className="text-white p-3">Online Istikhara</h1>
          </div>
        </div>
        <div className="container">
          <form>
            <div className="row">
              <div className="col-md-8">
                <label className="inpLab font-weight-bold">Select Istikhara Type</label>
                <select className="inp">
                  <option>Select Istikhara Type</option>
                  <option>Shadi</option>
                  <option>Karobar</option>
                  <option>Jadu</option>
                  <option></option>
                </select>
              </div>
              <div className="col-md-6 pt-3 pb-3">
                <label for="maleName" className="inpLab font-weight-bold">
                  Enter Male Name
                </label>
                <input
                  id="maleName"
                  className="inp"
                  placeholder="Enter Male Name"
                />
              </div>
              <div className="col-md-6 pt-3 pb-3">
                <label for="maleMotherName" className="inpLab font-weight-bold">
                  Enter Male Mother Name
                </label>
                <input
                  id="maleMotherName"
                  className="inp"
                  placeholder="Enter Male Mother Name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 pt-3 pb-3">
                <label for="femaleName" className="inpLab font-weight-bold">
                  Enter Female Name
                </label>
                <input
                  id="femaleName"
                  className="inp"
                  placeholder="Enter Female Name"
                />
              </div>
              <div className="col-md-6 pt-3 pb-3">
                <label for="femaleMotherName" className="inpLab font-weight-bold">
                  Enter Female Mother Name
                </label>
                <input
                  id="femaleMotherName"
                  className="inp"
                  placeholder="Enter Female Mother Name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 pt-3 pb-3">
                <label for="contact" className="inpLab font-weight-bold">
                  Contact
                </label>
                <input id="contact" className="inp" placeholder="Contact" />
              </div>
              <div className="col-md-6 pt-3 pb-3">
                <label for="contact" className="inpLab font-weight-bold">
                  Enter Istikhara Details
                </label>
                <textarea
                  placeholder="Enter Istikhara Details"
                  rows="8"
                  className="inp"
                ></textarea>
              </div>
              <div className="col-md-12 p-5">
                <button className="btn btn-block btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
