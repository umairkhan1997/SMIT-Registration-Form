import React from "react";
import "./ehsaas.css";

export default class MobleLangar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="py-5" style={{ backgroundColor: "#0066b3" }}>
        <div className="container py-4 text-white">
          <div className="row">
            <div className="col-md-6 py-3">
              <h2>
                Ehsaas Saylani Langar on Wheels introduced in Islamabad and
                Lahore
              </h2>
              <hr />
              <h4>
                SAPM on Social Protection and Poverty Alleviation, Dr. Sania
                Nishtar inaugurated Ehsaas-Saylani Langar-on-Wheels initiative
                on{" "}
                <span class="badge text-primary bg-light">March 21, 2020</span>{" "}
                at the junction of twin cities in Islamabad. The joint
                initiative had been introduced simultaneously in Islamabad and
                Lahore. in Islamabad.
              </h4>
            </div>
            <div className="col-md-6 py-3">
              <div className="row">
                <div className="col-md-12">
                  <img
                    className="rounded shadow"
                    width="100%"
                    src="https://www.pass.gov.pk/userfiles1/images/3_%20Lahore23aprl2020.jpg"
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
