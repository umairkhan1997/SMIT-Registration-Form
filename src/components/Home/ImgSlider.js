// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Zoom } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
// import slide1 from "../../images/EhsaanSaylani.jpeg";
// import slide2 from "../../images/slider2.png";
// import { connect } from "react-redux";
// import { homeSlideImg } from "../../Redux/action/homeAction";

// class ImgSlider extends React.Component {
//   componentDidMount() {
//     this.props.homeSlideImg();
//   }
//   render() {
//     return (
//       <div className="slide-container">
//         <Zoom scale={0.4}>
//           {this.props.homeSlideImgs.map((each, index) => (
//             <img
//               key={index}
//               style={{ width: "100%", height: 600 }}
//               src={each.imgUrl}
//             />
//           ))}
//         </Zoom>
//       </div>
//     );
//   }
// }

// function mapStateToProp(state) {
//   return {
//     homeSlideImgs: state.root.homeSlideImgs,
//   };
// }
// function mapDispatchToProp(dispatch) {
//   return {
//     homeSlideImg: () => {
//       dispatch(homeSlideImg());
//     },
//   };
// }
// export default connect(mapStateToProp, mapDispatchToProp)(ImgSlider);

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide1 from "../../images/EhsaanSaylani.jpeg";
import slide2 from "../../images/slider2.png";
const images = [slide1, slide2];

export default class ImgSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="slide-container">
        <Zoom scale={0.4}>
          {images.map((each, index) => (
            <img key={index} style={{ width: "100%" }} src={each} />
          ))}
        </Zoom>
      </div>
    );
  }
}
