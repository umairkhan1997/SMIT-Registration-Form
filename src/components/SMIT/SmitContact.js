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
          <div className="container d-flex justify-content-center">
            <h1 className="Heading pt-3 text-center">
              Contact Us
            </h1>
          </div>
        </div>

        <div className="container" style={{ marginTop: 80, marginBottom: 80 }}>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-5">
                  <input placeholder="Name" class="form-control" />
                </div>
                <div className="col-md-5">
                  <input placeholder="Email" class="form-control" />
                </div>
              </div>
              <div>
                <textarea
                  cols="55"
                  rows="10"
                  placeholder="Message .."
                  className="messageBoxTxt"
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <p className="text-left" style={{ color: "gray" }}>
                {" "}
                Saylani Mass IT Saylani Mass IT Saylani Mass IT Saylani Mass IT
                Saylani Mass IT Saylani Mass IT Saylani Mass IT Saylani Mass IT
                Saylani Mass IT Saylani Mass IT Saylani Mass IT Saylani Mass IT
                Saylani Mass IT Saylani Mass IT Saylani Mass IT Saylani Mass IT
                Saylani Mass IT Saylani Mass IT Saylani Mass IT
              </p>
              <div className="row" style={{ marginLeft: 10 }}>
                <p style={{ fontSize: "1em" }}>
                  <i
                    class="fas fa-map-marker-alt"
                    style={{ color: "gray" }}
                  ></i>
                </p>
                <h6 style={{ width: 300, color: "gray" }}>
                  4th Floor , A-25, Bahadurabad Chowrangi Karachi, Pakistan
                </h6>
              </div>
              <div className="row" style={{ marginTop: 10, marginLeft: 10 }}>
                <p style={{ fontSize: "1em" }}>
                  <i class="fas fa-phone-alt" style={{ color: "gray" }}></i>
                </p>
                <h6 style={{ width: 200, color: "gray" }}>UAN: 111-729-526</h6>
              </div>
              <div className="row" style={{ marginTop: 0, marginLeft: 10 }}>
                <p style={{ fontSize: "1em" }}>
                  <i class="fas fa-envelope" style={{ color: "gray" }}></i>
                </p>
                <h6 style={{ width: 250, color: "gray" }}>
                  info@saylaniwelfare.com
                </h6>
              </div>
              <div className="d-flex justify-content-left">
                <button className="btn btn-primary btn-lg">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
