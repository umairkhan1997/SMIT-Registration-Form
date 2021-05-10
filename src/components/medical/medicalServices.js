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
      <div id="medicalServices">
        <div
          style={{ backgroundColor: "#f5f8ff" }}
          className="container-fluid pt-5 pb-5"
        >
          <div className="container pt-2 pb-5">
            <div className="pt-2 pb-2">
              <h3 className="color"><b><u>OUR MEDICAL SERVICES</u></b></h3>
            </div>
            <div className="row">
              {this.props.medicalServiceAdds &&
                this.props.medicalServiceAdds.map((e) => {
                  return (
                    <div className="col-md-2 col-sm-4 mt-5 mb-5">
                      <div className="shadow roounded">
                        <div className="bg-white p-4 color" >
                          <i style={{ fontSize: "2.5em" }} class={e.icon}></i>
                        </div>
                        <div className="text-white backgroundDark p-2">
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
