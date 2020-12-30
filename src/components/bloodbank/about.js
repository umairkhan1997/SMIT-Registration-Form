import React from "react";
import "./blood.css";

export default class AboutBloodBank extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#f7edee" }} className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="shadow p-5 bg-white rounded">
                <h2 className="dataHeading">About Blood Bank</h2>
                <p>Lorem </p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <iframe
                  className="bloodVideo"
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/-WR3_zBAaXs"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="allowfullscreen"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
