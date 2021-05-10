import React from "react";
import "./SmitStyle.css";
import { connect } from "react-redux";
import {
  smitFacultyGet,
  smitFacultyCourseGet,
} from "../../Redux/action/smitAction";

class SMITeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectCourse: "Web and Mobile",
    };
  }

  componentDidMount() {
    this.props.smitFacultyGet();
    this.props.smitFacultyCourseGet();
  }
  distinct = (v, i, s) => {
    return s.indexOf(v) === i;
  };
  render() {
    const { cityDetails, selectCourse } = this.state;
    return (
      <div id="smitTeachers" className="py-5">
        <div className="container">
          <h3 className="pb-4 color" >
            <b><u>
              OUR QUALIFIED TEACHERS
           </u></b>
          </h3>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            {this.props.smitFacultyCourseGets &&
              this.props.smitFacultyCourseGets.map((e) => {
                return (
                  <li
                    class="nav-item"
                    onClick={() => this.setState({ selectCourse: e.courVal })}
                  >
                    <a
                      class="nav-link active"
                      id={e.courName}
                      data-toggle="tab"
                      href={"#" + e.courName}
                      role="tab"
                      aria-controls={e.courName}
                      aria-selected="true"
                    >
                      {e.courName}
                    </a>
                  </li>
                );
              })}
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id={selectCourse}
              role="tabpanel"
              aria-labelledby={selectCourse}
            >
              <div className="row">
                {this.props.smitFacultyGets &&
                  this.props.smitFacultyGets
                    .filter((name) => {
                      return (
                        name.facDesig
                          .toLowerCase()
                          .indexOf(selectCourse.toLowerCase()) >= 0
                      );
                    })
                    .map((filteredName, i) => {
                      return (
                        <div
                          key={i}
                          className="col-md-2 allTeacher text-center"
                        >
                          <div className="my-3">
                            <img
                              style={{
                                borderRadius: "50%",
                                boxShadow: "0 10px 15px rgba(0,0,0,.2)",
                                border: "1.5px solid white",
                              }}
                              width="100%"
                              src={filteredName.facImgUrl}
                            />
                            <div className="teacherDetails">
                              <h4
                                style={{
                                  borderBottom: "1px solid #0267b4",
                                }}
                              >
                                {filteredName.facName}
                              </h4>
                              <p>{filteredName.facDesig}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                {/* );
                })} */}
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
    smitFacultyGets: state.reducerSmit.smitFacultyGets,
    smitFacultyCourseGets: state.reducerSmit.smitFacultyCourseGets,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    smitFacultyGet: (a) => {
      dispatch(smitFacultyGet(a));
    },
    smitFacultyCourseGet: (a) => {
      dispatch(smitFacultyCourseGet(a));
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(SMITeacher);
