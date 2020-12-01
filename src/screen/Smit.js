import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import MainHeader from "../components/Home/MainHeader";
import MainCourses from "../components/SMIT/MainCourses";
import img7 from "../images/human.JPG";
import LinkLine from "../components/LinkLine";
import Footer from "../components/Footer";
import SmitCounter from "../components/SmitCounter";
import UpcomingCourses from "../components/SMIT/UpcomingCourses";
import WhyLearnSmit from "../components/SMIT/WhyLearnSmit";
import VocaTrain from "../components/SMIT/VocaTrain";
import SmitContact from "../components/SMIT/SmitContact";
import Faculty from "../components/SMIT/faculty";
import Collaboration from "../components/SMIT/collaboration";
import SMITeacher from "../components/SMIT/teacher";
import SmitEvents from "../components/SMIT/smitevents";
import Cover from "../components/SMIT/cover";
import Announcement from "../images/announcement.jpg";
import { Link } from "react-router-dom";
import Modal from "react-awesome-modal";

export default class Smit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  componentDidMount() {
    this.setState({
      visible: true,
    });
  }
  render() {
    return (
      <div>
        {/* <div className="coursePopUp p-5">
          <div className="row">
            <div className="col-md-8">
              <img width="100%" src={Announcement} />
            </div>
            <div className="col-md-4">
              <div className="rounded shadow bg-white px-5">
                <h2 className="py-">AI & Data Science</h2>
                <h4>Days & Timings</h4>
                <p>Mon, Wed & Fri. ( 11am - 1pm )</p>
                <p>Tues, Thurs & Sat. ( 6pm - 9pm )</p>
                <p>Mon, Wed & Fri. (9pm to 11pm)</p>
                <h4>Eligibility Criteria</h4>
                <p>Minimum Graduation</p>
                <button className="prevbtn">
                  <Link className="text-white" to="/apply">
                    Apply
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div> */}
        <Modal
          visible={this.state.visible}
          width="90%"
          effect="fadeInUp"
          onClickAway={() => this.setState({ visible: false })}
        >
          <div>
            <div className="row">
              <div className="col-md-8">
                <img
                  style={{ width: "100%", margin: "auto" }}

                  src={Announcement}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                className="col-md-4 "
              >
                <div >
                  <h3 className="text-left font-weight-bold mt-4" style={{ color: "#1371b8" }}>Days & Timings</h3>
                  <p className="text-muted">Mon, Wed & Fri. ( 11am - 1pm )</p>
                  <p className="text-muted">Tues, Thurs & Sat. ( 6pm - 9pm )</p>
                  <p className="text-muted">Mon, Wed & Fri. (9pm to 11pm)</p>
                </div>
                <div>
                  <p>
                    For More Details click{" "}
                    <a href="https://www.facebook.com/SaylaniMassTraining/photos/pb.489547941147223.-2207520000../3138203426281648/?type=3&theater">
                      Saylani Mass Training
                    </a>
                  </p>
                  <p>
                    For Registration
                    <button className="prevbtn ml-3">
                      <Link className="text-white" to="/apply">
                        Apply
                      </Link>
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <button
              style={{ position: "absolute", top: "-50px", right: "0" }}
              className="prevbtn"
              onClick={() => this.setState({ visible: false })}
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
        </Modal>
        <MainHeader />
        <Cover />
        <Faculty />
        <SmitCounter />
        <SmitEvents />
        <MainCourses />
        <SMITeacher />
        <Collaboration />
        <SmitContact />
        <Footer />
      </div>
    );
  }
}
