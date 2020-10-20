import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import logo from "../../images/logo.png";
import Zoom from "react-reveal/Zoom";

export default class Cost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <table className='text-left' width='100%'>
          <thead>
            <tr>
              <th>Description</th>
              <th>Per Day</th>
              <th>Per Month</th>
              <th>Per Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cost Per Person</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
            </tr>
            <tr>
              <td>No Of People</td>
              <td>1200</td>
              <td>36000</td>
              <td>438000</td>
            </tr>
            <tr>
              <td>Meal 1 for Lunch</td>
              <td>PKR 30000 (50x600)</td>
              <td>PKR 900000 (50x18000)</td>
              <td>PKR 10800000 (50x216000)</td>
            </tr>
            <tr>
              <td>Meal 2 for Dinner</td>
              <td>PKR 30000 (50x600)</td>
              <td>PKR 900000 (50x18000)</td>
              <td>PKR 10800000 (50x216000)</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>PKR 60000</td>
              <td>PKR 1800000</td>
              <td>PKR 21600000</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
