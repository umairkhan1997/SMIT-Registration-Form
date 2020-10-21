import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import logo from "../../images/logo.png";
import Zoom from "react-reveal/Zoom";
import "./dastarkhwan.css";

export default class Cost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className="p-5">
            <h2>Donate In Langarkhana</h2>
          </div>
          <table className="text-left mt-5 mb-5" width="100%">
            <thead className="tableHead">
              <tr>
                <th>Description</th>
                <th>Per Day</th>
                <th>Per Month</th>
                <th>Per Year</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tableList">
                <td>Cost Per Person</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
              </tr>
              <tr className="tableList">
                <td>No Of People</td>
                <td>1200</td>
                <td>36000</td>
                <td>438000</td>
              </tr>
              <tr className="tableList">
                <td>Meal 1 for Lunch</td>
                <td>PKR 30000 (50x600)</td>
                <td>PKR 900000 (50x18000)</td>
                <td>PKR 10800000 (50x216000)</td>
              </tr>
              <tr className="tableList">
                <td>Meal 2 for Dinner</td>
                <td>PKR 30000 (50x600)</td>
                <td>PKR 900000 (50x18000)</td>
                <td>PKR 10800000 (50x216000)</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="tableList">
                <td>Total</td>
                <td>PKR 60000</td>
                <td>PKR 1800000</td>
                <td>PKR 21600000</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
