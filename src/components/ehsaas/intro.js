import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ehsaas.css";

export default class IntroLangarkhana extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="py-5" style={{ backgroundColor: "#0066b3" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-3 text-white">
              <div>
                <h3>Briefing Of Langarkhana</h3>
                <ul>
                  <li>
                    The Ehsaas Langars are meant to serve meals to the poorest
                    and most vulnerable segments of the society, especially
                    daily wage laborers.
                  </li>
                  <li>
                    Under an agreement with the Saylani Welfare International
                    Trust, Ehsaas will open 112 Langars nationwide over a 2-year
                    period in the public private partnership.
                  </li>
                  <li>
                    The first Langar was opened in Islamabad on Oct 7, 2019
                    where at least 600 people are being provided free meals
                    daily. To-date, overall 3 Langars have been opened that
                    include two in the federal capital and one in Lodhran (South
                    Punjab).
                  </li>
                  <li>
                    The Government will extend strategic support towards Ehsaas
                    Langars in the following three areas:
                    <ul>
                      <li>
                        The first is logistic support because currently, welfare
                        organizations often face severe resistance to setting up
                        Langars where needed most, because of market dynamics
                        and reluctance of local administration due to fear of
                        encroachment on prime public lands.
                      </li>
                      <li>
                        The second way in which the government can play its role
                        is by setting safety and quality standards
                      </li>
                      <li>
                        The third is by disseminating information, widely.
                      </li>
                    </ul>
                  </li>
                  <li>And this would be at zero cost to the government.</li>
                  <li>
                    Areas where Langars are being established include bus
                    stands, industrial areas, railway stations, and places where
                    labourers tend to congregate.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
