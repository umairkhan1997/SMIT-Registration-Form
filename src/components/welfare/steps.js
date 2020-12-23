import React from "react";
import "./welfare.css";

export default class Steps extends React.Component {
  render() {
    return (
      <div
        className="py-5 my-5"
        style={{ backgroundColor: "rgb(240,240,240)" }}
      >
        <div className="container">
          <div className="Heading">
            <h2>Steps to get Welfare Help</h2>
          </div>
          <div className="row">
            <div className="col-md-4 py-5">
              <div className="bg-white p-5">
                <span className="qtyn">1</span>
                <h3>Written Application</h3>
                <p>Written Application is required</p>
              </div>
            </div>
            <div className="col-md-4 py-5">
              <div className="bg-white p-5">
                <span className="qtyn">2</span>
                <h3>Investigation</h3>
                <p>Written Application is required</p>
              </div>
            </div>
            <div className="col-md-4 py-5">
              <div className="bg-white p-5">
                <span className="qtyn">3</span>
                <h3>Welfare Help</h3>
                <p>Written Application is required</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
