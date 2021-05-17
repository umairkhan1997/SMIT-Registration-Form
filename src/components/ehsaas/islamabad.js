import React from "react";

export default class Islamabad extends React.Component {
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
                    src="https://www.pass.gov.pk/userfiles1/images/1_%20Langar.jpg"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    className="rounded"
                    width="100%"
                    src="https://www.pass.gov.pk/userfiles1/images/4_Langar(1).jpg"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    className="rounded"
                    width="100%"
                    src="https://www.pass.gov.pk/userfiles1/images/3_%20G9%20Langar_12142020.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 py-3">
              <h3 className="font-weight-bold color">
                Launch of Ehsaas Saylani Langar
              </h3>
              <hr />
              <h6 className="font-weight-bold text-muted">
                Prime Minister Imran launched Ehsaas Saylani Langar on{" "}
                <span
                  style={{ backgroundColor: "#0066b3" }}
                  class="badge text-white"
                >
                  October 7, 2019
                </span>{" "}
                in Islamabad.
              </h6>
              <h4 className="font-weight-bold">
                <a
                  style={{ color: "#0066b3" }}
                  target="_blank"
                  href="https://maps.app.goo.gl/pQjPVxzuVaZHT5vd6"
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
