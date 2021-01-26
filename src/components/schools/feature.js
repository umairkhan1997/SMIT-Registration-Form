import { extend } from "jquery";
import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { schoolFeatureGet } from "../../Redux/action/schoolGreen";


class Feature extends React.Component {

  componentDidMount() {
    this.props.schoolFeatureGet();
  }

  render() {
    return (
      <div className="my-5 py-3" style={{ backgroundColor: "#0066b3" }}>
        <div className="container text-white">
          <div className="row">
            {this.props.schoolFeatureGets && this.props.schoolFeatureGets.map((e, i) => {
              return (
                <div className="col-md-4 my-5">
                  <div
                    style={{ height: "100%", backgroundColor: "rgba(0,0,0,.3)" }}
                    className="p-5 shadow rounded"
                  >
                    <span className="qty">{e.qty}</span>
                    <h3 className="featureHeading">{e.heading}</h3>
                    <p>{e.subHead}</p>
                  </div>
                </div>
              );
            })}
            {/* <div className="col-md-4 my-5">
              <div
                style={{ height: "100%", backgroundColor: "rgba(0,0,0,.3)" }}
                className="p-5 shadow rounded"
              >
                <span className="qty">2</span>
                <h3 className="featureHeading">Free Courses</h3>
                <p>Saylani Provided Free courses in Selected campus</p>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <div
                style={{ height: "100%", backgroundColor: "rgba(0,0,0,.3)" }}
                className="p-5 shadow rounded"
              >
                <span className="qty">3</span>
                <h3 className="featureHeading">Course on Installment</h3>
                <p>
                  Saylani provide Course on Installment basis in very minimal
                  cost
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    schoolFeatureGets: state.reducerSchoolGreen.schoolFeatureGets,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    schoolFeatureGet: () => {
      dispatch(schoolFeatureGet());
    },
  };
}
export default withRouter(connect(mapStateToProp, mapDispatchToProp)(Feature));