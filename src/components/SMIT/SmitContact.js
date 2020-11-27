import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./SmitStyle.css";

export default class SmitContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div
          lassName="container-fluid  ex justify-content-center "
          style={{ backgroundColor: "white", marginTop: 80 }}
        >
          <div className="container">
            <h1 className="font-weight-bold" style={{ color: "#1371b8" }}>Contact Us</h1>
          </div>
        </div>

        <div className="container" style={{ marginTop: 40, marginBottom: 80 }}>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 pt-3 pb-3">
                  <input placeholder="Name" class="inp" />
                </div>
                <div className="col-md-6 pt-3 pb-3">
                  <input placeholder="Email" class="inp" />
                </div>
                <div className="col-md-12 pt-3 pb-3">
                  <textarea
                    style={{ width: "100%" }}
                    rows="8"
                    placeholder="Message .."
                    className="inp"
                  />
                </div>
                <div className="col-md-12">
                  <button style={{ width: "100%" }} className="donate">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="row pt-3 pb-5 pl-5 pr-5">
                <div className="col-md-1 text-right">
                  <p>
                    <i class="fas fa-map-marker-alt"></i>
                  </p>
                </div>
                <div className="col-md-11 text-left">
                  <h6>
                    4th Floor , A-25, Bahadurabad Chowrangi Karachi, Pakistan
                  </h6>
                </div>
                <div className="col-md-1 text-right">
                  <p>
                    <i class="fas fa-phone-alt"></i>
                  </p>
                </div>
                <div className="col-md-11 text-left">
                  <h6>UAN: 111-729-526</h6>
                </div>

                <div className="col-md-1 text-right">
                  <p>
                    <i class="fas fa-envelope"></i>
                  </p>
                </div>
                <div className="col-md-11 text-left">
                  <h6>education@saylaniwelfare.com</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
