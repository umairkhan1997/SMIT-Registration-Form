import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";

export default class medicalClinics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container pt-5 pb-5">
          <h1 className="medicalHeading">Over Clinics</h1>

          <div className="row">
            <div className="col-md-3">
              <div className="text-primary p-5">
                <i
                  style={{ fontSize: "2em" }}
                  class="fas fa-map-marker-alt"
                ></i>
                Head Office
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-primary p-5">
                <i
                  style={{ fontSize: "2em" }}
                  class="fas fa-map-marker-alt"
                ></i>
                Head Office
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-primary p-5">
                <i
                  style={{ fontSize: "2em" }}
                  class="fas fa-map-marker-alt"
                ></i>
                Head Office
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-primary p-5">
                <i
                  style={{ fontSize: "2em" }}
                  class="fas fa-map-marker-alt"
                ></i>{" "}
                Head Office
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
