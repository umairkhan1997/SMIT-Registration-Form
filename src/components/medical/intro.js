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
      <div
        style={{
          backgroundColor: "#f5f8ff",
        }}
        className="mt-5 py-5"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-2">
              <div className="py-5 px-4 bg-white shadow rounded introCard">
                <h2>Introduction</h2>
                <p className="color">
                  Bridging the needs of quality healthcare is a top priority for
                  us. The goal of Saylani Health Care Services is to build a
                  healthy society and outreach medically underserved and
                  neglected communities not only through provision of high
                  quality free of cost health services & supplies but also by
                  acting as a bridge between marginalized deserving patients and
                  health institutions.
                </p>
              </div>
            </div>
            <div className="col-md-6 p-2">
              <iframe
                className="video"
                width="100%"
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
