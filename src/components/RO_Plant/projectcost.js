import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import CountUp from "react-countup";
import "./ro.css";
import Zoom from "react-reveal/Zoom";
import ROback from "../../images/ROback.jpg";

export default class ProjectCost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div
          style={{ backgroundImage: `url(${ROback})` }}
          className="back bg-image"
        >
          <div style={{backgroundColor:'rgba(0,0,0,.7)'}}>
            <div className="container p-5">
              <div className='text-white pt-5 pb-5'>
                <h2>Estimated Costs of the Proposed Project</h2>
              </div>
              <Zoom>
                <table className="costTable">
                  <thead>
                    <tr>
                      <th>Activities Description</th>
                      <th>Quantity</th>
                      <th>Amount (PKR)</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Boring (Average)</td>
                      <td>1 Job</td>
                      <td>Rs. 275,000/-</td>
                      <td>
                        On average boring will be 250 to 300 ft depth. Including
                        PVC pipe casing.
                      </td>
                    </tr>
                    <tr>
                      <td>RO Plant</td>
                      <td>1</td>
                      <td>Rs. 850,000/-</td>
                      <td>
                        RO Plant will install on above 6000 TDS which will
                        produce 10,000 GPD (Gallon Per Day){" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Plant Room & Tank Construction</td>
                      <td>1</td>
                      <td>Rs. 450,000/-</td>
                      <td>
                        1 Room 15 x 15 will constructed to place RO Plant
                        including under ground tank
                      </td>
                    </tr>
                    <tr>
                      <td>Water Tank</td>
                      <td>2</td>
                      <td>Rs. 30,000/-</td>
                      <td>
                        2 Water Storage Tanks 2,000 Liter will be required to
                        placed in RO Plant Room. Each tank cost is Rs. 15,000/-
                      </td>
                    </tr>
                    <tr>
                      <td>Water Chiller</td>
                      <td>1</td>
                      <td>Rs. 70,000/-</td>
                      <td>
                        1 Water Chillers will be install. Each price is Rs.
                        70,000/-.
                      </td>
                    </tr>
                    <tr>
                      <td>Electric + Sewerage + Grill Work + Other</td>
                      <td>01 Job</td>
                      <td>Rs. 150,000/-</td>
                      <td>Electric Meter, Sewerage Line & Grill welding</td>
                    </tr>
                    <tr>
                      <td>PVC Fitting</td>
                      <td>-</td>
                      <td>Rs. 30,000/-</td>
                      <td>PVC Pipe line fitting </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="2">Total Amount (PKR)</td>
                      <td>Rs. 1,855,000</td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
