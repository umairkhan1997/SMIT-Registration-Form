import React from "react";
import "./medical.css";
import { connect } from "react-redux";
import {
  patientTreatedGet, benificiariesCountGet

} from "../../Redux/action/medicalAction";
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {
    this.props.patientTreatedGet();
    this.props.benificiariesCountGet();
  }

  render() {
    return (
      <div>
        <div className="py-5 text-white" style={{ backgroundColor: "#0066b3" }}>
          <div className="container">
            <div className="row">

              <div className="col-md-8">
                <div className="row">
                  {this.props.benificiariesCountGets && this.props.benificiariesCountGets.slice(0, this.props.benificiariesCountGets.length - 1).map((e) => {
                    return (
                      <div className="col-md-4 my-5">
                        <h4 style={{ height: 60 }}>{e.head}</h4>
                        <hr />
                        <h2
                          style={{ backgroundColor: "rgba(0,0,0,.5)" }}
                          className="shadow text-center p-2 rounded"
                        >
                          {e.count}
                        </h2>
                      </div>
                    )
                  })
                  }
                </div>
              </div>
              {this.props.benificiariesCountGets && this.props.benificiariesCountGets.slice(this.props.benificiariesCountGets.length - 1).map((e) => {
                return (
                  <div className="col-md-4 py-5">
                    <h1>{e.head}</h1>
                    <hr />
                    <div className="rounded">
                      <h1
                        style={{ backgroundColor: "rgba(0,0,0,.5)" }}
                        className="p-5 text-center shadow rounded"
                      >
                        {e.count}
                      </h1>
                    </div>
                  </div>
                )
              })
              }
            </div>
          </div>
        </div>
        <div className="container">
          <div className="Heading mt-4">
            <h3 className="color"><b><u>Saylani Medical and Diagnostic Center</u></b></h3>
            <h3 className="color"><b><u>Patient Treated in 2020</u></b></h3>
          </div>
          <div className="row">
            {this.props.patientTreatedGets && this.props.patientTreatedGets.map((e) => {
              return (
                <div className="col-md-4">
                  <h3 className="mt-4" style={{ height: 60 }}><b><u>{e.head}</u></b></h3>
                  <table className="medicalTable">
                    {
                      e.detail && e.detail.map((f) => {
                        return (
                          <tr>
                            <td >{f.name}</td>
                            <td>{f.count}</td>
                          </tr>
                        )
                      })
                    }
                  </table>
                </div>)
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    patientTreatedGets: state.reducerMedical.patientTreatedGets,
    benificiariesCountGets: state.reducerMedical.benificiariesCountGets
  };
}
function mapDispatchToProp(dispatch) {
  return {
    patientTreatedGet: () => {
      dispatch(patientTreatedGet());
    },
    benificiariesCountGet: () => {
      dispatch(benificiariesCountGet());
    }

  };
}
export default connect(mapStateToProp, mapDispatchToProp)(Table);

