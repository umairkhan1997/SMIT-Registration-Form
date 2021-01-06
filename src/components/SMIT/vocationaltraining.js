import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SmitStyle.css";

export default class Vocational extends React.Component {
  render() {
    return (
      <div>
        <div className="py-5 my-5 backgroundDark">
          <div className="container">
            <div className="row p-5">
              <div className="col-md-4 text-center py-3">
                <div className="rounded-pill p-5 vocationalIcon">
                  <p style={{ fontSize: "3em" }}>
                    <i class="fas fa-cogs"></i>
                  </p>
                </div>
              </div>
              <div className="col-md-8 text-white py-3">
                <div>
                  <h2>Vocational Training</h2>
                  <hr className="bg-white" />
                  <h4>
                    <i class="fas fa-check-circle"></i> 50 Industrial vocational
                    courses
                  </h4>
                  <h4>
                    <i class="fas fa-check-circle"></i> 1000+ Trained students &
                    officials
                  </h4>
                  <h4>
                    <i class="fas fa-check-circle"></i> 3 Locations in Karachi
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
