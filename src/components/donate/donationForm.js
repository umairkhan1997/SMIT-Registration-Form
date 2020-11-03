import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import logo from "../../images/logo.png";
import Zoom from "react-reveal/Zoom";
import "./donate.css";
import paypal from "../../images/paypal.png";

export default class DonationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  render() {
    console.log(this.state.data);
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
            <div className="row">
              <div className="col-md-7 bg-light p-5">
                <div className="row">
                  <div className="col-md-12 mt-3 mb-3">
                    <label className="lab text-dark">Name</label>
                    <input type="text" class="inp" placeholder="Name" />
                  </div>
                  <div className="col-md-12 mt-3 mb-3">
                    <label className="lab text-dark">Email</label>
                    <input type="text" class="inp" placeholder="Email" />
                  </div>
                  <div className="col-md-12 mt-3 mb-3">
                    <label className="lab text-dark">
                      Select Donation Type
                    </label>
                    <select className="inp">
                      <option>Credit Card</option>
                    </select>
                  </div>
                  <div className="col-md-12 mt-3 mb-3">
                    <label className="lab text-dark">
                      Select Donation Type
                    </label>
                    <select className="inp">
                      <option>Select Donation Type</option>
                      {this.state.data.map((i, index) => {
                        return <option key={index}>{i}</option>;
                      })}
                    </select>
                  </div>
                  <div className="col-md-12 mt-3 mb-3">
                    <label className="lab text-dark">Quantity</label>
                    <button className="incrementbtn">+</button>
                    <input type="text" class="quantity" placeholder="Number" />
                    <button className="incrementbtn">-</button>
                  </div>
                  <div className="col-md-12 mt-3 mb-3">
                    <label className="lab text-dark">Amount Payable</label>
                    <input
                      type="text"
                      disabled="disabled"
                      class="inp"
                      placeholder="Number"
                    />
                  </div>
                  <div className="col-md-12 mt-3 mb-3">
                    <label className="lab text-dark">Contact Number</label>
                    <input type="text" class="inp" placeholder="Number" />
                  </div>
                  <div className="col-md-12 mt-3 mb-3">
                    <label className="lab text-dark">Remarks</label>
                    <textarea
                      placeholder="Enter Your Remarks"
                      className="inp"
                      rows="8"
                    ></textarea>
                  </div>
                  <div className="col-md-12 mt-3 mb-3">
                    <button className="btn-block donate">Send</button>
                  </div>
                </div>
              </div>
              <div className="col-md-5 bg-primary p-5">
                <img src={paypal} width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
