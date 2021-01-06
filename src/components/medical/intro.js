import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./medical.css";
import intern from "../../images/intern.png";

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ backgroundColor: "#f5f8ff" }} className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="bg-white rounded shadow p-5">
                <h2>Introduction</h2>
              </div>
            </div>
            <div className="col-md-6">
              <iframe
                className="video"
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/4iU5vCR-ygM"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
