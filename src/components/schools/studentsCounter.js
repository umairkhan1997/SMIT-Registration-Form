import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";

import img1 from "../../images/roplants.jpg";
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="py-5 my-5 mainBoard">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-4 p-3">
                <div className="counterCard p-5">
                  <h3>Number Of Students</h3>
                  <h1 className="color">786</h1>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <div className="counterCard p-5">
                  <h3>Number Of Students</h3>
                  <h1 className="color">786</h1>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <div className="counterCard p-5">
                  <h3>Number Of Students</h3>
                  <h1 className="color">786</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
