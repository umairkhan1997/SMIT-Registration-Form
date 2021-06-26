import React from "react";

export default class Instruction extends React.Component {
  render() {
    return (
      <div id="bloodBankRequirement">
        <div className="bg-light py-2 ">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6">
                <h3 className="dataHeading">
                  <b> Requirements by blood donation type</b>
                </h3>
                <p className="text-muted font-weight-bold">
                  These are some of the requirements donors must meet to be
                  eligible to donate blood based on their donation type.
                </p>
                <ul>
                  <li className="text-muted font-weight-bold">Donation frequency: Every 56 days*</li>
                  <li className="text-muted font-weight-bold">You must be in good health and feeling well**</li>
                  <li className="text-muted font-weight-bold">You must be at least 16 years old in most states</li>
                  <li className="text-muted font-weight-bold">You must weigh at least 110 lbs</li>
                </ul>
              </div>
              <div className="col-md-6">
                <img
                  className="rounded shadow"
                  src="https://i.pinimg.com/originals/94/4b/52/944b52ee3a0adb9673a81c4d1e57405b.gif"
                  width="100%"
                // height="400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
