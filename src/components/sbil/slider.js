import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import cover1 from "../../assets/img/cover1.jpeg";
import cover2 from "../../assets/img/cover2.jpeg";
import cover3 from "../../assets/img/cover3.jpeg";

export default class Slider extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={cover1} />
        </div>
        <div>
          <img src={cover2} />
        </div>
        <div>
          <img src={cover3} />
        </div>
      </Carousel>
    );
  }
}
