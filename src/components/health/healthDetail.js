import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class HealthDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="py-5">
        <div className="container py-5">
          <div className="row p-0 m-0">
            <div className="col-md-6 p-4 border-right border-dark">
              <img src="https://dummyimage.com/vga" width="100%" alt="" />
            </div>
            <div className="col-md-6 p-4">
              <h2>CONSULTANT CLINIC</h2>
            </div>
          </div>
          <div className="row p-0 m-0">
            <div className="col-md-6 p-4 border-right border-dark">
              <h2>LABORATORY</h2>
            </div>
            <div className="col-md-6 p-4">
              <img src="https://dummyimage.com/vga" width="100%" alt="" />
            </div>
          </div>
          <div className="row p-0 m-0">
            <div className="col-md-6 p-4 border-right border-dark">
              <img src="https://dummyimage.com/vga" width="100%" alt="" />
            </div>
            <div className="col-md-6 p-4">
              <h2>DIAGNOSTIC CENTER</h2>
            </div>
          </div>
          <div className="row p-0 m-0">
            <div className="col-md-6 p-4 border-right border-dark">
              <h2>EYE CARE CLINIC</h2>
            </div>
            <div className="col-md-6 p-4">
              <img src="https://dummyimage.com/vga" width="100%" alt="" />
            </div>
          </div>
          <div className="row p-0 m-0">
            <div className="col-md-6 p-4 border-right border-dark">
              <img src="https://dummyimage.com/vga" width="100%" alt="" />
            </div>
            <div className="col-md-6 p-4">
              <h2>DENTAL CLINIC</h2>
            </div>
          </div>
          <div className="row p-0 m-0">
            <div className="col-md-6 p-4 border-right border-dark">
              <h2>HIJAMA (CUPPING THERAPY)</h2>
            </div>
            <div className="col-md-6 p-4">
              <img src="https://dummyimage.com/vga" width="100%" alt="" />
            </div>
          </div>
          <div className="row p-0 m-0">
            <div className="col-md-6 p-4 border-right border-dark">
              <img src="https://dummyimage.com/vga" width="100%" alt="" />
            </div>
            <div className="col-md-6 p-4">
              <h2>MOTHER & CHILD CARE CENTER</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
