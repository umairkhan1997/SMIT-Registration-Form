import { event, extend } from "jquery";
import React from "react";
import event3 from "../../images/blood3.jpeg";

export default class Instruction extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-light py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6">
                <h2 className="dataHeading">
                  Requirements by blood donation type
                </h2>
                <p>
                  These are some of the requirements donors must meet to be
                  eligible to donate blood based on their donation type.
                </p>
                <ul>
                  <li>Donation frequency: Every 56 days*</li>
                  <li>You must be in good health and feeling well**</li>
                  <li>You must be at least 16 years old in most states</li>
                  <li>You must weigh at least 110 lbs</li>
                </ul>
              </div>
              <div className="col-md-6">
                <img
                  className="rounded shadow"
                  src="https://www.bdd.co.in/images/compatibityChart.jpg"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
