import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ehsaas.css";

export default class SWAT extends React.Component {
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
                    src="https://www.pass.gov.pk/userfiles1/images/1_%20Swat_Langar17062020.jpg"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    width="100%"
                    src="https://www.pass.gov.pk/userfiles1/images/2_%20Saylani_Langar17062020.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 py-3">
              <h2 style={{ color: "#0066b3" }}>
                Ehsaas Saylani Langar opens in Swat amidst COVID-19 pandemic
              </h2>
              <hr />
              <h4>
                Ehsaas Saylani Langar opened on{" "}
                <span
                  style={{ backgroundColor: "#0066b3" }}
                  class="badge text-white"
                >
                  June 17, 2020
                </span>{" "}
                in Swat district of KP amidst COVID-19 emergency. in Lodhran,
                South Punjab.
              </h4>
              <h2 className="py-5">
                <a
                  style={{ color: "#0066b3" }}
                  target="_blank"
                  href="https://maps.app.goo.gl/M8ZgFfg1BWaTmDbX6"
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
