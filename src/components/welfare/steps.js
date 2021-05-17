import React from "react";
import "./welfare.css";
import pdf from "../../file/welfareform.pdf";

export default class Steps extends React.Component {
  render() {
    return (
      <div id="welfareSteps" className="py-5 my-5 backgroundLight">
        <div className="container">
          <div className="Heading">
            <h3><u><b>STEPS TO GET WELFARE HELP</b></u></h3>
          </div>
          <div className="row">
            <div className="col-md-4 py-5">
              <div style={{ height: "100%" }} className="bg-white p-5 shadow">
                <span className="qtyn">1</span>
                <h3>Written Application</h3>
                <p>Complete written application with all objectives.</p>
                <a href={pdf} className="btn-block prevbtn" download>
                  Download Application
                </a>
              </div>
            </div>
            <div className="col-md-4 py-5">
              <div style={{ height: "100%" }} className="bg-white p-5 shadow">
                <span className="qtyn">2</span>
                <h3>Investigation</h3>
                <p>Investigation and inquiry is mandatory to verification.</p>
              </div>
            </div>
            <div className="col-md-4 py-5">
              <div style={{ height: "100%" }} className="bg-white p-5 shadow">
                <span className="qtyn">3</span>
                <h3>Welfare Help</h3>
                <p>Needy people will be helped after that process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
