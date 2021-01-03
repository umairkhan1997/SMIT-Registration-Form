import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./medical.css";

export default class medicalClinics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container text-left pt-5 pb-5">
          <h1 className="medicalHeading">Over Clinics</h1>

          <div className="row">
            <div className="col-md-3">
              <div className="text-primary p-5">
                <i
                  style={{ fontSize: "2em" }}
                  class="fas fa-map-marker-alt"
                ></i>
                Bahadurabad
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-primary p-5">
                <i
                  style={{ fontSize: "2em" }}
                  class="fas fa-map-marker-alt"
                ></i>
                Clifton
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-primary p-5">
                <i
                  style={{ fontSize: "2em" }}
                  class="fas fa-map-marker-alt"
                ></i>
                Gulshan-e-Iqbal
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-primary p-5">
                <i
                  style={{ fontSize: "2em" }}
                  class="fas fa-map-marker-alt"
                ></i>{" "}
                Gulistan-e-Johar
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-primary p-5">
                <i
                  style={{ fontSize: "2em" }}
                  class="fas fa-map-marker-alt"
                ></i>{" "}
                North Karachi
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-primary p-5">
                <i
                  style={{ fontSize: "2em" }}
                  class="fas fa-map-marker-alt"
                ></i>{" "}
                Old Sabzi Mandi
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-primary p-5">
                <i
                  style={{ fontSize: "2em" }}
                  class="fas fa-map-marker-alt"
                ></i>{" "}
                Baldia Town
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
