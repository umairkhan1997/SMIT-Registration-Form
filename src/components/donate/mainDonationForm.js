import React from "react";

export default class MainDonationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formStatus: false,
    };
  }
  render() {
    return (
      <div>
        <div className="mainDonationForm">
          <div className="container pt-5">
            <div className="displayheading">
              <button
                onClick={() => this.setState({ formStatus: false })}
                className="prevbtn"
              >
                X
              </button>
              <h2>Donation Form</h2>
            </div>
            <div className="row">
              <div className="col-md-4 py-2">
                <label className="color font-weight-bold">Donate Via</label>
                <select className="inp">
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                </select>
              </div>
              <div className="col-md-4 py-2">
                <label className="color font-weight-bold">Donation For:</label>
                <select className="inp">
                  <option>Support Sardi Sab ko Lagti Hai Campaign</option>
                </select>
              </div>
              <div className="col-md-4 py-2">
                <label className="color font-weight-bold">
                  Treat this Donation as
                </label>
                <select className="inp">
                  <option>Zakat</option>
                </select>
              </div>
              <div className="col-md-4 py-2">
                <div className="row">
                  <div className="col-md-6">
                    <label className="color font-weight-bold">Qty</label>
                    <input className="inp" type="number" />
                  </div>
                  <div className="col-md-6">
                    <label className="color font-weight-bold">Amount</label>
                    <input className="inp" type="number" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-2">
                <label className="color font-weight-bold">
                  Bank Charges is:
                </label>
                <input className="inp" type="number" />
              </div>
              <div className="col-md-4 py-2">
                <label className="color font-weight-bold">Amount Payable</label>
                <input className="inp" type="number" />
              </div>
              <div className="col-md-4 py-2">
                <label className="color font-weight-bold">Name</label>
                <input className="inp" type="number" />
              </div>
              <div className="col-md-4 py-2">
                <label className="color font-weight-bold">Email</label>
                <input className="inp" type="number" />
              </div>
              <div className="col-md-4 py-2">
                <label className="color font-weight-bold">Mobile #</label>
                <input className="inp" type="number" />
              </div>
              <div className="col-md-12 py-2">
                <label className="color font-weight-bold">Message</label>
                <textarea className="inp" rows="5"></textarea>
              </div>
              <div className="col-md-12 py-2">
                <button className="prevbtn">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
