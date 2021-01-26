import React from "react";
import CountUp from "react-countup";
import { connect } from "react-redux";
import {
  SmitCounGet

} from "../../Redux/action/smitAction";

class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityDetails: {
        karachi: {
          video:
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F2748380051930656&show_text=true&width=552&appId=799665263742122&height=425",
        },
        hyderabad: {
          video:
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F3106826156086042&show_text=true&width=552&appId=799665263742122&height=495",
        },
        faisalabad: {
          video:
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F3106826156086042&show_text=true&width=552&appId=799665263742122&height=495",
        },
        islamabad: {
          video:
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F3106826156086042&show_text=true&width=552&appId=799665263742122&height=495",
        },
      },
    };
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

              {this.props.SmitCounGets && this.props.SmitCounGets.map((e, i) => {
                return (
                  <div className="col-md-4 my-4">
                    <div
                      style={{ height: "100%" }}
                      className="bg-white shadow text-center p-5 rounded"
                    >
                      <span
                        style={{ backgroundColor: "#f0f4ff", color: "#0267b4" }}
                        className="qtyn icoPosition"
                      >
                        <i class={e.icon}></i>
                      </span>
                      <h2>{e.counName}</h2>
                      <p style={{ fontSize: "2em", color: "#0267b4" }}>
                        <CountUp start={e.counStrNum} end={e.counEndNum} duration={4} />+{" "}
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

