import React from "react";

export default class NewsLater extends React.Component {
  render() {
    return (
      <div className="">
        <h2 style={{ fontWeight: "bold" }}>Subscribe to our Newslater</h2>
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
        </div>
      </div>
    );
  }
}
