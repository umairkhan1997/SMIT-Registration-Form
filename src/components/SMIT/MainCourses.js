import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./SmitStyle.css";
import { connect } from "react-redux";
import { smitCoursesGet } from "../../Redux/action/smitAction";
class MainCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Karachi",
      cityDetails: {

      },
      currentCourse: {
        name: "Certified Textile Training",
        duration: "1 Year",
        outline: ["MS Word", "MS Excel", "MS PowerPoint"],
      },
    };
  }
  componentDidMount() {
    this.props.smitCoursesGet();
  }

  render() {
    const { cityDetails } = this.state;
    return (
      <div id="smitCourses">
        <div className="container pt-5 pb-5 ">
          <h3 className="py-3 color">
            <b><u>
              DISCOVER COURSES DEVELOPED BY SAYLANI MASS IT
              </u></b>
          </h3>
        </div>
        <div className="container pb-5 ">
          <div className="row">
            {this.props.smitCoursesGets &&
              this.props.smitCoursesGets.map((e, i) => {
                return (
                  <div key={i} className="col-md-4 text-center p-4">
                    <div
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      className="courseimg p-5"
                      onClick={() => {
                        this.setState({ currentCourse: e });
                      }}
                    >
                      <img width="100px" src={e.courImgUrl} />
                      <h3>{e.courName}</h3>
                      <p className="text-muted">{e.courDuration}</p>
                    </div>
                  </div>
                );
              })}
          </div>
          <hr />
        </div>
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div
                style={{ backgroundColor: "#0267b4", color: "white" }}
                class="modal-header"
              >
                <h5 class="modal-title" id="exampleModalLongTitle">
                  {this.state.currentCourse.courName}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h4 style={{ color: "#0267b4" }}>Duration</h4>
                <p className="text-muted">
                  {this.state.currentCourse.courDuration &&
                    this.state.currentCourse.courDuration}
                </p>
                <hr />
                <h4 style={{ color: "#0267b4" }}>Course Outline</h4>
                <ul>
                  {this.state.currentCourse.courTopic &&
                    this.state.currentCourse.courTopic.map((e, i) => {
                      return (
                        <li className="text-muted" key={i}>
                          {e.name}
                          {e.nameDetails &&
                            e.nameDetails.map((e, i) => {
                              return (
                                <ul>
                                  <li className="text-muted" key={i}>
                                    {e}
                                  </li>
                                </ul>
                              );
                            })}
                        </li>
                      );
                    })}
                  <hr />

                </ul>
              </div>
              <div class="modal-footer">
                <button type="button" class="prevbtn" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    smitCoursesGets: state.reducerSmit.smitCoursesGets,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    smitCoursesGet: () => {
      dispatch(smitCoursesGet());
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(MainCourses);
