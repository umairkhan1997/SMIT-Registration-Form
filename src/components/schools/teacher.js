import React from "react";
import "./school.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { schoolTeacherGet } from "../../Redux/action/schoolGreen";
const imge =
  "data:image/jpeg;base64,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";

class Teacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.props.schoolTeacherGet();
  }

  render() {
    return (
      <div>
        <div className="container py-5 my-5">
          <h3 className="pb-4 color" >
            <b><u>
              OUR QUALIFIED PRINCIPLES
              </u></b>
          </h3>
          <div className="row d-flex justify-content-center">
            {this.props.schoolTeacherGets && this.props.schoolTeacherGets.map((e, i) => {
              return (
                <div className="col-md-2 allTeacher text-center">
                  <div className="my-3">
                    <img
                      style={{
                        borderRadius: "50%",
                        boxShadow: "0 10px 15px rgba(0,0,0,.2)",
                        border: "1.5px solid white",
                      }}
                      width="100%"
                      src={e.image}
                    />
                    <div className="teacherDetails">
                      <h4
                        style={{
                          borderBottom: "1px solid #0267b4",
                        }}
                      >
                        <b>
                          {e.name}
                        </b>
                      </h4>
                      <p>  <b>{e.desig}</b></p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    schoolTeacherGets: state.reducerSchoolGreen.schoolTeacherGets,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    schoolTeacherGet: () => {
      dispatch(schoolTeacherGet());
    },
  };
}
export default withRouter(connect(mapStateToProp, mapDispatchToProp)(Teacher));