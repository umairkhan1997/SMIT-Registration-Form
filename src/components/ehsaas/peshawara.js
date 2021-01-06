import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ehsaas.css";

export default class Lodhran extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ backgroundColor: "#f5f8ff" }}>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6 py-3">
              <h2 style={{ color: "#0066b3" }}>
                CM KP Mehmood Khan and SAPM Sania Nishtar open Ehsaas Langar in
                Peshawar
              </h2>
              <hr />
              <h4>
                Chief Minister KP, Mehmood Khan along with Dr. Sania Nishtar,
                Prime Minister’s Special Assistant on Social Protection and
                Poverty Alleviation inaugurated the Ehsaas Langar in Peshawar on{" "}
                <span
                  style={{ backgroundColor: "#0066b3" }}
                  class="badge text-white"
                >
                  June 24, 2020
                </span>{" "}
              </h4>
              <h2 className="py-5">
                <a
                  style={{ color: "#0066b3" }}
                  target="_blank"
                  href="https://maps.app.goo.gl/pQjPVxzuVaZHT5vd6"
                >
                  <i class="fas fa-map-marked-alt"></i> Location
                </a>
              </h2>
            </div>
            <div className="col-md-6 py-3">
              <div className="row">
                <div className="col-md-6">
                  <img
                    width="100%"
                    src="https://www.pass.gov.pk/userfiles1/images/1_25062020.JPG"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    width="100%"
                    src="https://www.pass.gov.pk/userfiles1/images/3_25062020.JPG"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    width="100%"
                    src="https://www.pass.gov.pk/userfiles1/images/4_25062020.JPG"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
