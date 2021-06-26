import React from "react";

export default class NewsLater extends React.Component {
  render() {
    return (
      <div className="">
        <div className="displayheading">
          <h3 className=" color"><b><u>SUBSCRIBE TO OUR NEWSLETTER</u></b></h3>

        </div>

        <div className="row">
          <div className="col-md-4">
            <label style={{ color: "black", fontSize: ".9em" }} className="lab">
              Your Name (Required)
            </label>
            <input className="inp" />
          </div>
          <div className="col-md-4">
            <label style={{ color: "black", fontSize: ".9em" }} className="lab">
              Your Email (Required)
            </label>
            <input className="inp" />
          </div>
          <div className="col-md-4">
            <label style={{ color: "black", fontSize: ".9em" }} className="lab">
              Phone Number (Required)
            </label>
            <input className="inp" />
          </div>
          <div className="col-md-4">
            <button
              style={{ backgroundColor: "#084E97", margin: "10px 0", width: 180 }}
              class="btn btn-primary"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    );
  }
}
