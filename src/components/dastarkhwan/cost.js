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
      <div
        style={{
          backgroundImage:
            "url('https://www.saylaniwelfare.com/public_html/images/saylani/gallery/food.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(255,255,255,.7)" }}
          className="py-5"
        >
          <div className="container">
            <div className="displayheading">
              <h2 className="text-dark">Cost</h2>
            </div>
            <div className="bg-white rounded shadow p-3">
              <table
                className="text-left mt-5 mb-5 table table-hover table-responsive-sm"
                width="100%"
              >
                <thead>
                  <tr>
                    <td>Description</td>
                    <td>Per Day</td>
                    <td>Per Month</td>
                    <td>Per Year</td>
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
                </tbody>
                <tfoot>
                  <tr>
                    <td>Total</td>
                    <td>PKR 60000</td>
                    <td>PKR 1800000</td>
                    <td>PKR 21600000</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
