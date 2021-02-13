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
      <div
        style={{
          backgroundImage:
            'url("data:image/jpeg;base64,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")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        id="homeIntro"
        className="container-fluid"
      >
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-5">
              <Reveal effect="fadeInUp">
                <div className="homeIntro border bg-white p-4">
                  <h3 className="color">About Us</h3>
                  <p className="color em1-4">
                    Since 1999, saylani welfare working as a bridge between
                    needy & affluent
                  </p>
                  <p className="text-muted text-justify">
                    Established in May 1999 by famous spiritual and religious
                    scholar Maulana Bashir Ahmed Farooqui, Saylani Welfare
                    International Trust was built on the fundamentals of
                    breaking the cycle of poverty, alleviating the financial
                    troubles of the poor, giving people a chance to live a
                    dignified life and spreading happiness.
                  </p>
                  <p className="text-muted text-justify">
                    We are an organization that believes in lighting up the
                    lives of underprivileged people across the world. We
                    endeavor to provide the best quality services in areas
                    including food, education, medical and social welfare free
                    of cost to people living in the dark. With over 60 different
                    sectors, we feed thousands of hungry people each day,
                    hundreds more are given the hope of life through medical
                    health care, many are educated to become leaders of tomorrow
                    and several are given the opportunity to stand on their feet
                    financially.
                  </p>
                </div>
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
