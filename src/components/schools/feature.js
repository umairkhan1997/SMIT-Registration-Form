import { extend } from "jquery";
import React from "react";

export default class Feature extends React.Component {
  render() {
    return (
      <div className="my-5 py-3" style={{ backgroundColor: "#0066b3" }}>
        <div className="container text-white">
          <div className="row">
            <div className="col-md-4 my-5">
              <div
                style={{ height: "100%", backgroundColor: "rgba(0,0,0,.3)" }}
                className="p-5 shadow rounded"
              >
                <span className="qty">1</span>
                <h3 className="featureHeading">Students Support</h3>
                <p>25% of Students are supported by saylani welfare</p>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <div
                style={{ height: "100%", backgroundColor: "rgba(0,0,0,.3)" }}
                className="p-5 shadow rounded"
              >
                <span className="qty">2</span>
                <h3 className="featureHeading">Free Courses</h3>
                <p>Saylani Provided Free courses in Selected campus</p>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <div
                style={{ height: "100%", backgroundColor: "rgba(0,0,0,.3)" }}
                className="p-5 shadow rounded"
              >
                <span className="qty">3</span>
                <h3 className="featureHeading">Course on Installment</h3>
                <p>
                  Saylani provide Course on Installment basis in very minimal
                  cost
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
