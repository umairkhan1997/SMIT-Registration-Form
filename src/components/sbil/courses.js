import React from "react";
import "./home.css";
import acca from "../../images/acca.jpeg";
import fia from "../../images/fia.jpeg";
import cia from "../../images/cia.jpeg";
import cima from "../../images/cima.jpeg";
import caicap from "../../images/caicap.jpeg";
import icmap from "../../images/icmap.jpeg";
import icaew from "../../images/icaew.png";

export default class Courses extends React.Component {
  render() {
    return (
      <div id="sbilCourses">
        <div className="py-5">
          <div className="container">
            <div>
              <h3 className="font-weight-bold color">Courses</h3>
            </div>
            <div className="row">
              <div className="col-md-3 py-3">
                <div className="courseCard bg-light">
                  <img src={acca} width="100%" />
                  <div className="p-4 text-left">
                    <h5
                      style={{ color: "#0d4ca0" }}
                      className="font-weight-bold"
                    >
                      ACCA
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 py-3">
                <div className="courseCard bg-light">
                  <img src={fia} width="100%" />
                  <div className="p-4 text-left">
                    <h5
                      style={{ color: "#0d4ca0" }}
                      className="font-weight-bold"
                    >
                      FIA
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 py-3">
                <div className="courseCard bg-light">
                  <img src={cia} width="100%" />
                  <div className="p-4 text-left">
                    <h5
                      style={{ color: "#0d4ca0" }}
                      className="font-weight-bold"
                    >
                      CIA
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 py-3">
                <div className="courseCard bg-light">
                  <img src={cima} width="100%" />
                  <div className="p-4 text-left">
                    <h5
                      style={{ color: "#0d4ca0" }}
                      className="font-weight-bold"
                    >
                      CIMA
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 py-3">
                <div className="courseCard bg-light">
                  <img src={caicap} width="100%" />
                  <div className="p-4 text-left">
                    <h5
                      style={{ color: "#0d4ca0" }}
                      className="font-weight-bold"
                    >
                      CA(ICAP)
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 py-3">
                <div className="courseCard bg-light">
                  <img src={icaew} width="100%" />
                  <div className="p-4 text-left">
                    <h5
                      style={{ color: "#0d4ca0" }}
                      className="font-weight-bold"
                    >
                      ICAEW
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 py-3">
                <div className="courseCard bg-light">
                  <img src={icmap} width="100%" />
                  <div className="p-4 text-left">
                    <h5
                      style={{ color: "#0d4ca0" }}
                      className="font-weight-bold"
                    >
                      ICMAP
                    </h5>
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
