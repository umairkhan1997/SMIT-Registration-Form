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
import "../App.css";
import Karachi from "../images/karachi.jpg";
import Islamabad from "../images/islamabad.jpg";
import Faisalabad from "../images/faisalabad.jpg";
import Hyderabad from "../images/hyderabad.jpg";
import TableData from "../components/SMIT/table";

export default class Smit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      city: "",
    };
  }
  componentDidMount() {
    this.setState({
      visible: true,
    });
  }
  render() {
    console.log(this.state.city);
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
              {/* <img
                  style={{ width: "100%", margin: "auto" }}

                  src={Announcement}
                /> */}
              {/* <div >
                  <h3 className="text-left font-weight-bold mt-4" style={{ color: "#1371b8" }}>Days & Timings</h3>
                  <p className="text-muted">Mon, Wed & Fri. ( 11am - 1pm )</p>
                  <p className="text-muted">Tues, Thurs & Sat. ( 6pm - 9pm )</p>
                  <p className="text-muted">Mon, Wed & Fri. (9pm to 11pm)</p>
                </div> */}
              {/* <div>
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
                </div> */}
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
        <Cover city={this.state.city} />
        <TableData />
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
