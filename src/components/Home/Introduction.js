import React from "react";
import "./Home.css";
import Reveal from "react-reveal/Reveal";
import { connect } from "react-redux";
import { homeIntroGet } from "../../Redux/action/homeAction";
import back from "../../images/about_us_background.png";
import house from "../../images/homeimages/house.png";
import food from "../../images/homeimages/food.png";
import book from "../../images/homeimages/book.png";
import medical from "../../images/homeimages/medical.png";
import family from "../../images/homeimages/family.png";
import house2 from "../../images/homeimages/house2.png";
import student from "../../images/homeimages/student.png";
import flat from "../../images/homeimages/flat.png";
import roplant from "../../images/homeimages/roplant.png";
import HomeService from "../../smallcomponents/homeservice";

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
          backgroundImage: `url(${back})`,
          backgroundSize: "100%",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
        id="homeIntro"
      >
        <div style={{ height: "90vh" }}></div>
        <div className="p-5">
          <div className="row">
            <div className="col-md-6">
              <Reveal effect="fadeInUp">
                <div className="homeIntro border bg-white p-4">
                  <h3 className="color introMainText">About Us</h3>
                  <p className="color introMainText">
                    Since 1999, saylani welfare working as a bridge between
                    needy & affluent
                  </p>
                  <p className="text-justify introText">
                    Established in May 1999 by famous spiritual and religious
                    scholar Maulana Bashir Ahmed Farooqui, Saylani Welfare
                    International Trust was built on the fundamentals of
                    breaking the cycle of poverty, alleviating the financial
                    troubles of the poor, giving people a chance to live a
                    dignified life and spreading happiness.
                  </p>
                  <p className="text-justify introText">
                    We are an organization that believes in lighting up the
                    lives of underprivileged people across the world. We
                    endeavor to provide the best quality services in areas
                    including food, education, medical and social welfare free
                    of cost to people living in the dark. With over 60 different
                    sectors, we feed thousands of hungry people each day,
                    hundreds more are given the hope of life through medical
                    health care, many are educated to become leaders of tomorrow
                    and several are given the opportunity to stand on their feet
                    financially. We are an organization that believes in
                    lighting up the lives of underprivileged people across the
                    world. We endeavor to provide the best quality services in
                    areas including food, education, medical and social welfare
                    free of cost to people living in the dark. With over 60
                    different sectors, we feed thousands of hungry people each
                    day, hundreds more are given the hope of life through
                    medical health care, many are educated to become leaders of
                    tomorrow and several are given the opportunity to stand on
                    their feet financially.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="col-md-6 pt-5">
              <div className="row mt-5">
                <div
                  style={{ backgroundColor: "#62ba46" }}
                  className="col-md-4"
                >
                  <HomeService imageSrc={house} countStart={100} countEnd={450}>
                    Branches & Dastarkhuwan all 4 provinces, AJK and GB
                  </HomeService>
                  <HomeService
                    imageSrc={food}
                    countStart={100000}
                    countEnd={150000}
                  >
                    people fed everyday.
                  </HomeService>
                  <HomeService
                    imageSrc={book}
                    countStart={100000}
                    countEnd={300000}
                  >
                    Students annually.
                  </HomeService>
                </div>
                <div
                  style={{ backgroundColor: "#034f9c" }}
                  className="col-md-4 mt-4 pt-4"
                >
                  <HomeService
                    imageSrc={medical}
                    countStart={100000}
                    countEnd={950000}
                  >
                    patients treated annually.
                  </HomeService>
                  <HomeService
                    imageSrc={family}
                    countStart={1000}
                    countEnd={10000}
                  >
                    patients treated annually.
                  </HomeService>
                  <HomeService
                    imageSrc={house2}
                    countStart={1000}
                    countEnd={10000}
                  >
                    Children cure from Thalassemia
                  </HomeService>
                </div>
                <div
                  style={{ backgroundColor: "#62ba46" }}
                  className="col-md-4"
                >
                  <HomeService
                    imageSrc={student}
                    countStart={10000}
                    countEnd={50000}
                  >
                    Students enrolled.
                  </HomeService>
                  <HomeService imageSrc={flat} countStart={100} countEnd={500}>
                    Houses & flat are provided on 12-14 years easy installment.
                  </HomeService>
                  <HomeService
                    imageSrc={roplant}
                    countStart={10}
                    countEnd={100}
                  >
                    R.O Water Filter Plants installed in slums areas of
                    Pakistan.
                  </HomeService>
                </div>
              </div>
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
