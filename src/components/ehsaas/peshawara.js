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
              <h3 className="color font-weight-bold">
                CM KP Mehmood Khan and SAPM Sania Nishtar open Ehsaas Langar in
                Peshawar
              </h3>
              <hr />
              <h6 className="font-weight-bold text-muted">
                Chief Minister KP, Mehmood Khan along with Dr. Sania Nishtar,
                Prime Minister’s Special Assistant on Social Protection and
                Poverty Alleviation inaugurated the Ehsaas Langar in Peshawar on{" "}
                <span
                  style={{ backgroundColor: "#0066b3" }}
                  class="badge text-white"
                >
                  June 24, 2020
                </span>{" "}
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
            <div className="col-md-6 py-3">
              <div className="row">
                <div className="col-md-6">
                  <img
                    className="rounded"
                    width="100%"
                    src="https://www.pass.gov.pk/userfiles1/images/1_25062020.JPG"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    className="rounded"
                    width="100%"
                    src="https://www.pass.gov.pk/userfiles1/images/3_25062020.JPG"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    className="rounded"
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
