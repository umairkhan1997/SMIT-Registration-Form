import React from "react";
import "./ehsaas.css";

export default class Umarkot extends React.Component {
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
              <div className="row">
                <div className="col-md-6">
                  <img
                    className="rounded"
                    width="100%"
                    src="https://www.pass.gov.pk/userfiles1/images/18july2020_.jpg"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    className="rounded"
                    width="100%"
                    src="https://www.pass.gov.pk/userfiles1/images/28july2020_.jpg"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    className="rounded"
                    width="100%"
                    src="https://www.pass.gov.pk/userfiles1/images/38july2020_.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 py-3">
              <h2 style={{ color: "#0066b3" }}>
                Governor Sindh opens Ehsaas Langar in Umerkot district of Sindh
              </h2>
              <hr />
              <h4>
                Governor Sindh Imran Ismail opened Ehsaas Langar in Umerkot on .{" "}
                <span
                  style={{ backgroundColor: "#0066b3" }}
                  class="badge text-white"
                >
                  June 30, 2020
                </span>{" "}
                .
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
