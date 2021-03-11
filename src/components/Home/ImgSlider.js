import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { connect } from "react-redux";
import { homeSlideImg } from "../../Redux/action/homeAction";

class ImgSlider extends React.Component {
  componentDidMount() {
    this.props.homeSlideImg();
  }

  render() {
    return (
      <div className="slide-container">
        <Slide
          duration={2000}
          prevArrow={
            <button className="slideBtn prevSlide">
              <i class="fas fa-arrow-left"></i>
            </button>
          }
          nextArrow={
            <button className="slideBtn nxtSlide">
              <i class="fas fa-arrow-right"></i>
            </button>
          }
          scale={0.4}
        >
          {this.props.homeSlideImgs.map((each, index) => (
            <img key={index} style={{ width: "100%" }} src={each.imgUrl} />
          ))}
        </Slide>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    homeSlideImgs: state.root.homeSlideImgs,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    homeSlideImg: () => {
      dispatch(homeSlideImg());
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(ImgSlider);
