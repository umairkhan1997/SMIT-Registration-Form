import React from "react";
import "./blood.css";

export default class DataBloodBank extends React.Component {
  render() {
    return (
      <div>
        <div className="py-5" style={{ backgroundColor: "#f7edee" }}>
          <div
            className="py-5"
            style={{ backgroundColor: "#8c1515", color: "white" }}
          >
            <div className="container">
              <h1>Services Offerd by Saylani Blood Bank 2017 to 2020</h1>
            </div>
          </div>
          <div className="container text-center py-5">
            <div className="col-md-12 row py-5">
              <div className="col-md-8 row">
                <div className="col-md-12">
                  <h3 className="dataHeading">Total Blood Transfusion</h3>
                </div>
                <div className="col-md-3 py-3">
                  <h3>2017</h3>
                  <h3 className="dataVal">916</h3>
                </div>
                <div className="col-md-3 py-3">
                  <h3>2018</h3>
                  <h3 className="dataVal">2752</h3>
                </div>
                <div className="col-md-3 py-3">
                  <h3>2019</h3>
                  <h3 className="dataVal">4221</h3>
                </div>
                <div className="col-md-3 py-3">
                  <h3>2020</h3>
                  <h3 className="dataVal">5791</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row ">
                  <div className="col-md-12">
                    <h3 className="dataHeading">Total Blood Transfusion</h3>
                  </div>
                  <div className="col-md-12 py-3">
                    <h3>2017 to 2020</h3>
                    <h3 className="dataVal">13680</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 row">
              <div className="col-md-8 row">
                <div className="col-md-12">
                  <h3 className="dataHeading">OPD Patient Of Thalassemia</h3>
                </div>
                <div className="col-md-3 py-3">
                  <h3>2017</h3>
                  <h3 className="dataVal">2203</h3>
                </div>
                <div className="col-md-3 py-3">
                  <h3>2018</h3>
                  <h3 className="dataVal">6904</h3>
                </div>
                <div className="col-md-3 py-3">
                  <h3>2019</h3>
                  <h3 className="dataVal">12011</h3>
                </div>
                <div className="col-md-3 py-3">
                  <h3>2020</h3>
                  <h3 className="dataVal">15338</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row ">
                  <div className="col-md-12">
                    <h3 className="dataHeading">OPD Patient</h3>
                  </div>
                  <div className="col-md-12 py-3">
                    <h3>2017 to 2020</h3>
                    <h3 className="dataVal">36456</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 row py-5">
              <div className="col-md-8 row">
                <div className="col-md-12">
                  <h3 className="dataHeading">Haematologist</h3>
                </div>
                <div className="col-md-3 py-3">
                  <h3>2017</h3>
                  <h3 className="dataVal">677</h3>
                </div>
                <div className="col-md-3 py-3">
                  <h3>2018</h3>
                  <h3 className="dataVal">1032</h3>
                </div>
                <div className="col-md-3 py-3">
                  <h3>2019</h3>
                  <h3 className="dataVal">1286</h3>
                </div>
                <div className="col-md-3 py-3">
                  <h3>2020</h3>
                  <h3 className="dataVal">856</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row ">
                  <div className="col-md-12">
                    <h3 className="dataHeading">Haematologist</h3>
                  </div>
                  <div className="col-md-12 py-3">
                    <h3>2017 to 2020</h3>
                    <h3 className="dataVal">3851</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 row ">
              <div className="col-md-8 row">
                <div className="col-md-12">
                  <h3 className="dataHeading">Ultrasound</h3>
                </div>
                <div className="col-md-3 py-3">
                  <h3>2017</h3>
                  <h3 className="dataVal">0</h3>
                </div>
                <div className="col-md-3 py-3">
                  <h3>2018</h3>
                  <h3 className="dataVal">516</h3>
                </div>
                <div className="col-md-3 py-3">
                  <h3>2019</h3>
                  <h3 className="dataVal">251</h3>
                </div>
                <div className="col-md-3 py-3">
                  <h3>2020</h3>
                  <h3 className="dataVal">196</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row ">
                  <div className="col-md-12">
                    <h3 className="dataHeading">Ultrasound</h3>
                  </div>
                  <div className="col-md-12 py-3">
                    <h3>2017 to 2020</h3>
                    <h3 className="dataVal">963</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
