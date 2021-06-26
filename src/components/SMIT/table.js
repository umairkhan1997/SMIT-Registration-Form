import React from "react";
import CountUp from "react-countup";
import { connect } from "react-redux";
import { SmitCounGet } from "../../Redux/action/smitAction";

class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.SmitCounGet();
  }
  render() {
    const { city } = this.props;
    const { cityDetails } = this.state;
    return (
      <div>
        <div style={{ backgroundColor: "#0267b4" }}>
          <div className="container py-5">
            <div className="row py-5 d-flex justify-content-center">
              {this.props.SmitCounGets &&
                this.props.SmitCounGets.map((e, i) => {
                  return (
                    <div className="col-md-4 my-4">
                      <div
                        style={{ height: "100%" }}
                        className="bg-white shadow text-center p-5 rounded"
                      >
                        <span
                          style={{
                            backgroundColor: "#f0f4ff",
                            color: "#0267b4",
                          }}
                          className="qtyn icoPosition"
                        >
                          <i class={e.icon}></i>
                        </span>
                        <h2 style={{ height: 50 }}>{e.counName}</h2>
                        <p style={{ fontSize: "2em", color: "#0267b4", marginTop: 30 }}>
                          <CountUp
                            start={e.counStrNum}
                            separator=","
                            end={e.counEndNum}
                            duration={4}
                          />{" "}
                        </p>
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
    SmitCounGets: state.reducerSmit.SmitCounGets,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    SmitCounGet: () => {
      dispatch(SmitCounGet());
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(TableData);
