import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./Home.css";
import Reveal from "react-reveal/Reveal";
import hazrat from "../../images/hazrat.jpg";
import { connect } from "react-redux";
import { homeIntroGet } from "../../Redux/action/homeAction";

class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.homeIntroGet();
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="container pt-5 pb-5">
          <div className="pb-3">
            <h1
              className="Heading"
              style={{ color: "#316DC3 ", marginLeft: -8 }}
            >
              Introduction
            </h1>
          </div>
          {this.props.homeIntro.map((each, index) => (
            <div className="row">
              <div className="col-md-4">
                <img
                  src={each.imgUrl}
                  width="100%"
                  height="250px"
                  style={{ marginTop: 5 }}
                />
              </div>
              <div className="col-md-8">
                <Reveal effect="fadeInUp">
                  <p className="text-muted text-justify">{each.introTxtOne}</p>
                  <p className="text-muted text-justify">{each.introTxtTwo}</p>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    homeIntro: state.root.homeIntro,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    homeIntroGet: () => {
      dispatch(homeIntroGet());
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(Introduction);
