import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ehsaas.css";

export default class Multan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="py-5" style={{ backgroundColor: "#f5f8ff" }}>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6 py-3">
              <h2 style={{ color: "#0066b3" }}>
                Inauguration of second Ehsaas Saylani Langar at PIMS, Islamabad
              </h2>
              <hr />
              <h4>
                SAPM on Social Protection and Poverty Alleviation, Dr. Sania
                Nishtar together with Dr. Zafar Mirza, SAPM on National Health
                Services, Regulations and Coordination inaugurated the second
                Ehsaas Saylani Langar at PIMS on{" "}
                <span
                  style={{ backgroundColor: "#0066b3" }}
                  class="badge text-white"
                >
                  January 17, 2020
                </span>{" "}
                in Islamabad.
              </h4>
              <h2 className="py-5">
                <a
                  style={{ color: "#0066b3" }}
                  target="_blank"
                  href="https://maps.app.goo.gl/59ANS3DBG49a14BT7"
                >
                  <i class="fas fa-map-marked-alt"></i> Location
                </a>
              </h2>
            </div>
            <div className="col-md-6 py-3">
              <div className="row">
                <div className="col-md-12">
                  <img
                    className="rounded"
                    width="100%"
                    src="https://www.pass.gov.pk/userfiles1/images/2_%20PIMS.jpg"
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
