import React from "react";
import "./medical.css";
import { connect } from "react-redux";
import { medicalServiceAdd } from "../../Redux/action/medicalAction";
class MedicalServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.medicalServiceAdd();
  }

  render() {
    return (
      <div>
        <div
          style={{ backgroundColor: "#f5f8ff" }}
          className="container-fluid pt-5 pb-5"
        >
          <div className="container pt-5 pb-5">
            <div className="pt-5 pb-5">
              <h1 className="medicalHeading">Our Medical Services</h1>
            </div>
            <div className="row">
              {this.props.medicalServiceAdds &&
                this.props.medicalServiceAdds.map((e) => {
                  return (
                    <div className="col-md-2 col-sm-4 mt-5 mb-5">
                      <div className="shadow">
                        <div className="bg-white p-4 text-primary">
                          <i style={{ fontSize: "2.5em" }} class={e.icon}></i>
                        </div>
                        <div className="text-white bg-primary p-2">
                          {e.head}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProp(state) {
  return {
    medicalServiceAdds: state.reducerMedical.medicalServiceAdds,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    medicalServiceAdd: () => {
      dispatch(medicalServiceAdd());
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(MedicalServices);
