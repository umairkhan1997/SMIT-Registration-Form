import React from "react";
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
      <div id="homeIntro" className="container-fluid">
        <div className="container pt-5 pb-5">
          <div className="pb-3">
            <h1
              className="Heading"
              style={{ color: "#316DC3 ", marginLeft: -8 }}
            >
              Introduction
            </h1>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img src={hazrat} width="100%" />
            </div>
            <div className="col-md-8">
              <Reveal effect="fadeInUp">
                <p className="text-muted text-justify">
                  Established in May 1999 by famous spiritual and religious
                  scholar Maulana Bashir Ahmed Farooqui, Saylani Welfare
                  International Trust was built on the fundamentals of breaking
                  the cycle of poverty, alleviating the financial troubles of
                  the poor, giving people a chance to live a dignified life and
                  spreading happiness.
                </p>
                <p className="text-muted text-justify">
                  We are an organization that believes in lighting up the lives
                  of underprivileged people across the world. We endeavor to
                  provide the best quality services in areas including food,
                  education, medical and social welfare free of cost to people
                  living in the dark. With over 60 different sectors, we feed
                  thousands of hungry people each day, hundreds more are given
                  the hope of life through medical health care, many are
                  educated to become leaders of tomorrow and several are given
                  the opportunity to stand on their feet financially.
                </p>
              </Reveal>
            </div>
          </div>
          {/* ))} */}
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
