import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import logo from "../../images/logo.png";
import Zoom from "react-reveal/Zoom";
import "./media.css";

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="bg-image mt-5">
        <div id="ytplayer"></div>
          <div className="row">
            <div className="col-md-2">
              <Zoom>
                <iframe
                  width="100%"
                  height="150px"
                  src="https://www.youtube.com/embed/L1BmJyE4Os0"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Zoom>
            </div>
            <div className="col-md-2">
              <Zoom>
                <iframe
                  width="100%"
                  height="150px"
                  src="https://www.youtube.com/embed/L1BmJyE4Os0"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
