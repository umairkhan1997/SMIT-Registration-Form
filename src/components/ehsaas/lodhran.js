import React from "react";

export default class Lodhran extends React.Component {
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
                    height="180"
                    src="https://www.pass.gov.pk/userfiles1/images/3_%20Third%20Langar.jpg"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    className="rounded"
                    width="100%"
                    height="180"
                    src="https://www.pass.gov.pk/userfiles1/images/4_%20Third%20Langar.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 py-3">
              <h3 className="color font-weight-bold">
                Opening of third Ehsaas Saylani Langar in Lodhran
              </h3>
              <hr />
              <h6 className="font-weight-bold text-muted">
                Third Ehsaas Saylani Langar opened on{" "}
                <span
                  style={{ backgroundColor: "#0066b3" }}
                  class="badge text-white"
                >
                  February 27, 2020
                </span>{" "}
                in Lodhran, South Punjab.
              </h6>
              <h4 className="font-weight-bold">
                <a
                  style={{ color: "#0066b3" }}
                  target="_blank"
                  href="https://maps.app.goo.gl/1vaXLMNg26Z4TbYQ7"
                >
                  <i class="fas fa-map-marked-alt"></i> Location
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
