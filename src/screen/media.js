import React from "react";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import "../components/media/media.css";
import Fade from "react-reveal/Fade";
import Video from "../components/media/video";

export default class Media extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader />
        <div style={{ backgroundColor: "#0066b3" }} className="bg-image">
          <div className="container p-5 text-white">
            <h2>
              <i class="fas fa-play-circle"></i> Saylani Media
            </h2>
          </div>
        </div>
        <Video />
      </div>
    );
  }
}
