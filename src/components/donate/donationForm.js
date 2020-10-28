import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import logo from "../../images/logo.png";
import Zoom from "react-reveal/Zoom";
import "./donate.css";

export default class DonationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="text-left">
            <h1>Donation Form</h1>
          </div>
          <p className="text-muted">
            For Sadqa, Aqiqa, Corona Effecties or other Donation select Donation
            Form and for Bank Details select Bank Details option.
          </p>
          <div className="container mt-5">
            <div>
              <button type="button" class="donate">
                Donation Form
              </button>
              <button type="button" class="donate">
                Bank Details
              </button>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 mt-3 mb-3">
                <label className="lab text-dark">Name</label>
                <input type="text" class="inp" placeholder="Name" />
              </div>
              <div className="col-md-6 mt-3 mb-3">
                <label className="lab text-dark">Email</label>
                <input type="text" class="inp" placeholder="Email" />
              </div>
              <div className="col-md-6 mt-3 mb-3">
                <label className="lab text-dark">Contact Number</label>
                <input type="text" class="inp" placeholder="Number" />
              </div>
              <div className="col-md-6 mt-3 mb-3">
                <label className="lab text-dark">Select Donation Type</label>
                <select className='inp'>
                    <option>Sadqa Goat (5500)</option>
                    <option>Sadqa Goat (6000)</option>
                    <option>Sadqa Goat (7000)</option>
                    <option>Sadqa Goat (8000)</option>
                    <option>Sadqa Goat (9000)</option>
                </select>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
