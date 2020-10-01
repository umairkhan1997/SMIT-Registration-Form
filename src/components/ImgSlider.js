import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/rashan2.jpg";
import slide3 from "../images/back.jpg";
import MainHeader from "../components/MainHeader";
import '../App.css'
const images = [slide1, slide2, slide3];

export default class ImgSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div >
      <div className="slide-container mainSlider " style={{backgroundColor:'#bcc1dc',opacity:0.7,}}>
        <Zoom scale={0.4} >
        {/* <MainHeader /> */}
          {images.map((each, index) => (
            <img key={index} className="SliderImage" style={{ width: "100%",height:600,backgroundColor:'#bcc1dc' }} src={each} />
            ))}
        </Zoom>
      </div>
            </div>
    );
  }
} 
