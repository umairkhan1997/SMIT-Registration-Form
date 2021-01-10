import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./ro.css";
import Zoom from "react-reveal/Zoom";
import ROback from "../../images/ROback.jpg";
import { connect } from "react-redux";
import { RoPlantEstiCostGet } from "../../Redux/action/RoPlantAction";



class ProjectCost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.RoPlantEstiCostGet();
  }
  render() {
    return (
      <div>
        <div
          style={{ backgroundImage: `url(${ROback})` }}
          className="back bg-image"
        >
          <div style={{ backgroundColor: "rgba(0,0,0,.7)" }}>
            <div className="container p-5">
              <div className="text-white pt-5 pb-5">
                <h2>Estimated Costs of the Proposed Project</h2>
              </div>
              <Zoom>
                <table className="costTable table-responsive-sm">
                  <thead>
                    <tr>
                      <td>Description</td>
                      <td>Quantity</td>
                      <td>Total Amount(PKR) (As per TDS 7500)</td>
                      <td>Total Amount(PKR) (As per TDS 40000)</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.RoPlantEstiCostGets && this.props.RoPlantEstiCostGets.map((data) => {
                      return (
                        <tr>
                          <td>{data.actDes}</td>
                          <td>{data.qnt}</td>
                          <td>{data.amount7500}</td>
                          <td>{data.amount40000}</td>
                        </tr>
                      )
                    })}
                    {/* <tr>
                      <td>Boring</td>
                      <td>1</td>
                      <td>150000</td>
                      <td>2000000</td>
                    </tr>
                    <tr>
                      <td>RO Plant</td>
                      <td>1</td>
                      <td>650000</td>
                      <td>12000000</td>
                    </tr>
                    <tr>
                      <td>Plant Room Construction</td>
                      <td>1</td>
                      <td>400000</td>
                      <td>400000</td>
                    </tr>
                    <tr>
                      <td>
                        Electric + Severage + Grill Work + Water Storage Tank +
                        Other
                      </td>
                      <td>1</td>
                      <td>200000</td>
                      <td>200000</td>
                    </tr>
                    <tr>
                      <td>Salary (One Operator Per Month Rs 20000/-)</td>
                      <td>1</td>
                      <td>240000 (per Anum)</td>
                      <td>240000 (per Anum)</td>
                    </tr>
                    <tr>
                      <td>
                        Chemical and Other maintainance costs (Per Month - Rs
                        18000/-)
                      </td>
                      <td>1</td>
                      <td>180000 (per Anum)</td>
                      <td>180000 (per Anum)</td>
                    </tr>
                    <tr>
                      <td colspan="2">Total Amount (PKR)</td>
                      <td style={{ backgroundColor: "rgb(3, 104, 180)" }}>
                        Rs. 1820000
                      </td>
                      <td style={{ backgroundColor: "rgb(3, 104, 180)" }}>
                        RS. 2420000
                      </td>
                    </tr> */}
                  </tbody>{" "}
                </table>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    RoPlantEstiCostGets: state.reducerRoPlant.RoPlantEstiCostGets
  };
}
function mapDispatchToProp(dispatch) {
  return {
    RoPlantEstiCostGet: () => {
      dispatch(RoPlantEstiCostGet());
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(ProjectCost);