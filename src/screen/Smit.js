import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import MainHeader from "../components/Home/MainHeader";
import MainCourses from "../components/SMIT/MainCourses";
import Footer from "../components/Footer";
import Faculty from "../components/SMIT/faculty";
import Collaboration from "../components/SMIT/collaboration";
import SMITeacher from "../components/SMIT/teacher";
import Cover from "../components/SMIT/cover";
import Modal from "react-awesome-modal";
import "../App.css";
import Karachi from "../images/karachi.jpg";
import Islamabad from "../images/islamabad.jpg";
import Faisalabad from "../images/faisalabad.jpg";
import Hyderabad from "../images/hyderabad.jpg";
import TableData from "../components/SMIT/table";
import SuccessStories from "../components/SMIT/suuccesStories";
import Workshop from "../components/SMIT/workshop";
import Vocational from "../components/SMIT/vocationaltraining";
import Intro from "../components/SMIT/intro";
import Navbar from "../smallcomponents/navbar";
export default class Smit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      city: "Karachi",
    };
  }
  componentDidMount() {
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>

        <Modal
          visible={this.state.visible}
          width="90%"
          effect="fadeInUp"
          onClickAway={() => this.setState({ visible: false })}
        >
          <div>
            <h2 className="text-center p-3">Select your City</h2>
            <div className="row">
              <div className="col-md-6">
                <div
                  style={{
                    backgroundImage: `url(${Karachi})`,
                  }}
                  className="city text-white m-1"
                  onClick={() =>
                    this.setState({ city: "Karachi", visible: false })
                  }
                >
                  <h2>Karachi</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  style={{
                    backgroundImage: `url(${Faisalabad})`,
                  }}
                  className="city text-white m-1"
                  onClick={() =>
                    this.setState({ city: "Faisalabad", visible: false })
                  }
                >
                  <h2>Faisalabad</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  style={{
                    backgroundImage: `url(${Hyderabad})`,
                  }}
                  className="city text-white m-1"
                  onClick={() =>
                    this.setState({ city: "Hyderabad", visible: false })
                  }
                >
                  <h2>Hyderabad</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  style={{
                    backgroundImage: `url(${Islamabad})`,
                  }}
                  className="city text-white m-1"
                  onClick={() =>
                    this.setState({ city: "Islamabad", visible: false })
                  }
                >
                  <h2>Islamabad</h2>
                </div>
              </div>
            </div>
            <button
              style={{ position: "absolute", top: "-50px", right: "0" }}
              className="prevbtn"
              onClick={() => this.setState({ visible: false })}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </Modal>
        <MainHeader />
        <Navbar />
        <Cover city={this.state.city} />
        <Intro />
        <TableData />
        <SuccessStories />
        <Faculty />
        <Vocational />
        <MainCourses />
        <SMITeacher />
        <Workshop />
        <Collaboration />
        <Footer />
      </div>
    );
  }
}
