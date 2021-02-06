import { extend } from "jquery";
import React from "react";

export default class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contact: "",
      address: "",
      lastDonation: "",
      bdate: "",
      bmonth: "",
      byear: "",
      age: "",
      weight: "",
      desease: "",
    };
  }
  calculateAge() {
    const { bdate, bmonth, byear } = this.state;
    let a = new Date();
    let b = new Date(`${bmonth} ${bdate},${byear}`);
    let full = a.getTime();
    console.log(full);
    let actual = b.getTime();
    console.log(actual);
    let final = (full - actual) / (1000 * 60 * 60 * 24 * 365);
    this.setState({ age: Math.ceil(final) });
  }
  render() {
    return (
      <div id="bloodBankDonor">
        <div
          className="py-5 back"
          style={{
            backgroundImage:
              'url("https://www.choc.org/wp/wp-content/uploads/2014/09/blooddonorservices.png")',
          }}
        >
          <div className="container my-5 py-5">
            <h1 className="custom-underline">
              Your Blood can bring a smile to another person's face
            </h1>
            <button
              data-toggle="modal"
              data-target="#donorform"
              className="donorbtn"
            >
              Become a Donor
            </button>
          </div>
        </div>
        <div
          class="modal fade"
          id="donorform"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ backgroundColor: "rgba(247, 237, 238,.9)" }}
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div
                style={{ backgroundColor: "maroon" }}
                class="modal-header text-white"
              >
                <h5 class="modal-title" id="exampleModalLabel">
                  Become a Donor
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{ color: "white" }}
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="modal-body">
                <div className="p-3">
                  <label style={{ color: "black" }} className="lab">
                    Name
                  </label>
                  <input className="inp" placeholder="Enter Name" />
                </div>
                <div className="p-3">
                  <label style={{ color: "black" }} className="lab">
                    Contact
                  </label>
                  <input className="inp" placeholder="Enter Contact" />
                </div>
                <div className="p-3">
                  <label style={{ color: "black" }} className="lab">
                    Address
                  </label>
                  <input className="inp" placeholder="Address" />
                </div>
                <div className="p-3">
                  <label style={{ color: "black" }} className="lab">
                    Last Donation
                  </label>
                  <select className="inp">
                    <option>Select Last Donation Time</option>
                    <option>Before 1 month</option>
                    <option>Before 2 month</option>
                    <option>Before 4 month</option>
                    <option>Before 6 month</option>
                  </select>
                </div>
                <hr />
                <div className="row p-3">
                  <div className="col-md-12 p-3">
                    <label style={{ color: "black" }} className="lab">
                      Date of Birth
                    </label>
                    <input
                      onChange={(e) => this.setState({ bdate: e.target.value })}
                      type="number"
                      className="inpInline"
                      placeholder="date"
                    />
                    <select
                      onChange={(e) =>
                        this.setState({ bmonth: e.target.value })
                      }
                      className="inpInline"
                    >
                      <option>Month</option>
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>July</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </select>
                    <input
                      onChange={(e) => this.setState({ byear: e.target.value })}
                      type="number"
                      className="inpInline"
                      placeholder="year"
                      onBlur={() => this.calculateAge()}
                    />
                    <input
                      type="text"
                      disabled
                      className="inpInline"
                      value={`${this.state.age}yrs`}
                    />
                  </div>
                  <div className="col-md-12">
                    <label style={{ color: "black" }} className="lab">
                      weight
                    </label>
                    <input
                      maxLength="3"
                      type="text"
                      className="inp"
                      placeholder="123 etc"
                    />
                    <p>Kg</p>
                  </div>
                </div>
                <hr />
                <div className="p-3">
                  <label style={{ color: "black" }} className="lab">
                    Desease (If Any)
                  </label>
                  <textarea
                    className="inp"
                    placeholder="Describe Desease"
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn"
                  style={{ backgroundColor: "maroon", color: "white" }}
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
