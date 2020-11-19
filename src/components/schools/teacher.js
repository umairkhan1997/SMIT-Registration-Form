import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./school.css";

import profile from "../../images/raheel.jpg";
export default class Teacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4 my-2 ">
              <div className="teacherCard">
                <img src={profile} width="100%" />
                <div className="p-3 teacherDetail">
                  <h3 className="name">Muhammad Ali</h3>
                  <p>Designation</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2 ">
              <div className="teacherCard">
                <img src={profile} width="100%" />
                <div className="p-3 teacherDetail">
                  <h3 className="name">Muhammad Ali</h3>
                  <p>Designation</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2 ">
              <div className="teacherCard">
                <img src={profile} width="100%" />
                <div className="p-3 teacherDetail">
                  <h3 className="name">Muhammad Ali</h3>
                  <p>Designation</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2 ">
              <div className="teacherCard">
                <img src={profile} width="100%" />
                <div className="p-3 teacherDetail">
                  <h3 className="name">Muhammad Ali</h3>
                  <p>Designation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
