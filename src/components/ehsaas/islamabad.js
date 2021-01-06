import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ehsaas.css";

export default class Islamabad extends React.Component {
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
              <div className="row">
                <div className="col-md-6">
                  <img
                    width="100%"
                    src="https://www.pass.gov.pk/userfiles1/images/1_%20Langar.jpg"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    width="100%"
                    src="https://www.pass.gov.pk/userfiles1/images/4_Langar(1).jpg"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    width="100%"
                    src="https://www.pass.gov.pk/userfiles1/images/3_%20G9%20Langar_12142020.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 py-3">
              <h2 style={{ color: "#0066b3" }}>
                Launch of Ehsaas Saylani Langar
              </h2>
              <hr />
              <h4>
                Prime Minister Imran launched Ehsaas Saylani Langar on{" "}
                <span
                  style={{ backgroundColor: "#0066b3" }}
                  class="badge text-white"
                >
                  October 7, 2019
                </span>{" "}
                in Islamabad.
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
          </div>
        </div>
      </div>
    );
  }
}
