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
      dob: "",
      age: "",
      weight: "",
      desease: "",
    };
  }
  calculateAge() {
    const { dob } = this.state;
    let a = new Date();
    let b = new Date(dob);
    let full = a.getTime();
    let actual = b.getTime();
    let final = full - actual / (1000 * 60 * 60 * 24 * 365);
    console.log(final);
  }
  render() {
    return (
      <div>
        <div
          className="py-5 back"
          style={{
            backgroundImage:
              'url("https://www.choc.org/wp/wp-content/uploads/2014/09/blooddonorservices.png")',
          }}
        >
          <div className="container my-5 py-5">
            <h1 className="custom-underline">
              Your Blood can bring smile in other person face
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
                  <div className="col-md-6">
                    <label style={{ color: "black" }} className="lab">
                      Date of Birth
                    </label>
                    <input
                      onBlur={() => this.calculateAge()}
                      type="date"
                      className="inp"
                      placeholder=""
                    />
                    <p>
                      Your age is <span>55</span>
                    </p>
                  </div>
                  <div className="col-md-6">
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
