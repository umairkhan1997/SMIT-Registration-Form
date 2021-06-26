import React from "react";
import MainHeader from "../components/Home/MainHeader";
import Navbar from "../smallcomponents/navbar";

export default class Champions extends React.Component {
  render() {
    return (
      <div>
        <MainHeader />
        <Navbar />
        <div>
          <div className="row p-0 m-0">
            <div className="col-md-6">
              <div className="bg-light p-5">
                <div>
                  <h3>Saylani Champions</h3>
                  <p>
                    people who change their life through Saylani Welfare
                    International Trust Services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-light p-5">
                <div>
                  <h3>Saylani Champions</h3>
                  <p>
                    people who change their life through Saylani Welfare
                    International Trust Services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-light p-5">
                <div>
                  <h3>Saylani Champions</h3>
                  <p>
                    people who change their life through Saylani Welfare
                    International Trust Services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-light p-5">
                <div>
                  <h3>Saylani Champions</h3>
                  <p>
                    people who change their life through Saylani Welfare
                    International Trust Services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
