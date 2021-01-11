import React from "react";
import Zoom from "react-reveal/Zoom";
import "./media.css";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import { mediaGet } from "../../Redux/action/mediaAction";
import { withRouter } from "react-router-dom";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      category: ""
    };
  }
  componentDidMount() {
    this.props.mediaGet();
  }
  render() {
    console.log(this.props.mediaGets)
    return (
      <div className="container-fluid">
        <div style={{ backgroundColor: "purple" }} className="bg-image">
          <div className="container p-5">
            <Fade down>
              <div className="form-group" >
                <p className="text-left " style={{ fontSize: 18, color: 'white' }}>Search Your Playlist</p>
                <select className="form-control text-muted " id="exampleFormControlSelect1" style={{ height: 50, marginTop: -10, backgroundColor: '#e9ebec' }} >
                  <option >NEKI KI BAAT ( ROZA 4)</option>
                  <option >NEKI KI BAAT ( ROZA 2)</option>
                  <option >Saylani Kifalat</option>
                  <option >Saylani Medical</option>
                  <option >Saylani Medical</option>
                  <option>Saylani Documentary 2019</option>
                  <option>Saylani Symposium 2019</option>
                  <option>Ramzan-o-Eid Pakage</option>
                </select>
              </div>
            </Fade>
          </div>
        </div>
        <div className="bg-image mt-5 ">
          {/* <div id="ytplayer"></div> */}
          <div className="row d-flex justify-content-left">
            <div className="col-md-3">
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/L1BmJyE4Os0?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
            </div>
            <div className="col-md-3">
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/njCSKTPMXyg?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
            </div>
            <div className="col-md-3">
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/jEch46lxwV4?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
            </div>
            <div className="col-md-3">
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/_uB0gT9NwRo?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
            </div>
            <div className="col-md-3">
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/VPd0OhmWN6w?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
            </div>
            <div className="col-md-3">
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/IIsHZFT9osQ?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
            </div>
            <div className="col-md-3">
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/pAs9JprZc_U?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
            </div>
            <div className="col-md-3">
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/ZmCxi3JZHOk?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
            </div>
            <div className="col-md-3">
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/yBndclFuoBw?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
            </div>
            <div className="col-md-3">
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/bJSqJvz5qoU?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
            </div>
            <div className="col-md-3">
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/zkj0ilYxRik"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
            </div>
            <div className="col-md-3 ">
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/qPUTEhCkdd4?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProp(state) {
  return {
    mediaGets: state.reducerMedia.mediaGets,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    mediaGet: () => {
      dispatch(mediaGet());
    },
  };
}
export default withRouter(connect(mapStateToProp, mapDispatchToProp)(Video));