import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import cover from "../images/media.jpg";
import "../components/media/media.css";
import Fade from "react-reveal/Fade";
import Video from '../components/media/video';

export default class Media extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader />
        <div style={{ backgroundColor: "purple" }} className="bg-image">
          <div className="container p-5">
            <Fade down>
              <input
                type="search"
                placeholder="Search your Media ..."
                className="mt-5 mb-5 searchMedia"
              />
            </Fade>
          </div>
          {/* <img src={cover} width="100%" /> */}
        </div>
          <Video />
      </div>
    );
  }
}
