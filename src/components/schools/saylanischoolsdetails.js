import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class SaylaniSchoolDetails extends React.Component {
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
              <h2>GREEN HOUSE SCHOOLS KARACHI</h2>
            </div>
          </div>
          <div className="row p-0 m-0">
            <div className="col-md-6 p-4 border-right border-dark">
              <h2>GREEN HOUSE SCHOOLS (THAR)</h2>
            </div>
            <div className="col-md-6 p-4">
              <img src="https://dummyimage.com/vga" width="100%" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
