import React from "react";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import Teacher from "../components/schools/teacher";
import Campus from "../components/schools/campus";
import Footer from "../components/Footer";
import Feature from "../components/schools/feature";
import Curriculum from "../components/schools/curriculum";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { schoolCountGet } from "../Redux/action/schoolGreen";
import Navbar from "../smallcomponents/navbar";
class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.schoolCountGet();
  }

  render() {
    return (
      <div>
        <MainHeader />
        <Navbar />
        <div id="saylaniSchoolIntro" className="backgroundLight py-5">
          <div className="container my-4">
            <div className="row">
              <div className="col-md-6">
                <table className="showtable">
                  <tr>
                    <td colspan="2">Quality Education For All</td>
                  </tr>
                  {this.props.schoolCountGets &&
                    this.props.schoolCountGets.map((e, i) => {
                      return (
                        <tr>
                          <td>{e.typeName}</td>
                          <td>{e.typeNumber}</td>
                        </tr>
                      );
                    })}
                </table>
              </div>
              <div className="col-md-6 p-2">
                <iframe
                  className="video"
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/TCNg6QrHjPk"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen="allowfullscreen"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <Campus />
        <Feature />
        <Teacher />
        <Curriculum />
        <Footer />
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    schoolCountGets: state.reducerSchoolGreen.schoolCountGets,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    schoolCountGet: () => {
      dispatch(schoolCountGet());
    },
  };
}
export default withRouter(
  connect(mapStateToProp, mapDispatchToProp)(Education)
);
