import React from "react";
import CountUp from "react-countup";

export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";
  render() {
    return (
      <div id="introTable">
        <div className="row">
          <div
            style={{
              backgroundImage:
                'url("https://samircharitabletrust.org/wp-content/uploads/2014/02/ab.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="text-white col-md-12"
          >
            <div
              className="py-5"
              style={{ backgroundColor: "rgba(255, 255, 255,.6)" }}
            >
              <div className="container">
                <div className="row">
                  <div
                    style={{
                      backgroundColor: "#0066b3",
                      width: "100%",
                    }}
                    className="py-3 px-5"
                  >
                    <h3 className="text-center">
                      Total Welfare Amount 2014 to 2020
                    </h3>
                    <h2
                      style={{ fontSize: "2.5em" }}
                      className="p-3 px-5 dataHeadingDark"
                    >
                      <span>
                        <CountUp
                          start={100000000}
                          end={719101123}
                          separator=","
                          duration={6}
                        />
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="text-white">
                  <table
                    className="table-responsive"
                    style={{
                      borderCollapse: "separate",
                      borderSpacing: "10px 10px",
                      width: "100%",
                    }}
                  >
                    <tr>
                      <td className="dataHeadingDark"> Particular</td>
                      <td className="dataHeadingDark"> Wedding Furniture</td>
                      <td className="dataHeadingDark"> Wedding Food</td>
                      <td className="dataHeadingDark"> Wedding Cash</td>
                      <td className="dataHeadingDark"> Rozgar</td>
                      <td className="dataHeadingDark"> Education</td>
                      <td className="dataHeadingDark"> Constructions</td>
                      <td className="dataHeadingDark"> Qarz e Hasna</td>
                      <td className="dataHeadingDark"> Utility Bills</td>
                      <td className="dataHeadingDark"> Rashan</td>
                      <td className="dataHeadingDark"> Covid 19</td>
                      <td className="dataHeadingDark"> Help</td>
                      <td className="dataHeadingDark"> House Advance</td>
                      <td className="dataHeadingDark"> Loan Payment</td>
                      <td className="dataHeadingDark"> House Hold Expanses</td>
                      <td className="dataHeadingDark"> Tajheez-o-Takfeen</td>
                      <td className="dataHeadingDark"> Traveling Expense</td>
                      <td className="dataHeadingDark"> Medical</td>
                    </tr>
                    <tr>
                      <td className="dataHeadingDark"> Cash</td>

                      <td className="dataHeadingDark">98,000,000</td>
                      <td className="dataHeadingDark">7,420,775</td>
                      <td className="dataHeadingDark">21,420,850</td>
                      <td className="dataHeadingDark">36,915,470</td>
                      <td className="dataHeadingDark">173,224,833</td>
                      <td className="dataHeadingDark">130,931,117</td>
                      <td className="dataHeadingDark">45,087,786</td>
                      <td className="dataHeadingDark">12,336,387</td>
                      <td className="dataHeadingDark">22,030,400</td>
                      <td className="dataHeadingDark"> 17,500</td>
                      <td className="dataHeadingDark">61,681,285</td>

                      <td className="dataHeadingDark">316,000</td>
                      <td className="dataHeadingDark">191,080</td>
                      <td className="dataHeadingDark"> 13,920</td>
                      <td className="dataHeadingDark"> 20,500</td>
                      <td className="dataHeadingDark"> 43,600</td>
                      <td className="dataHeadingDark"> 60,500</td>
                    </tr>
                    <tr>
                      <td className="dataHeadingDark"> Amount</td>
                      <td className="dataHeadingDark"> 7,140</td>
                      <td className="dataHeadingDark"> 55,458</td>
                      <td className="dataHeadingDark"> 2,826</td>
                      <td className="dataHeadingDark"> 2,603</td>
                      <td className="dataHeadingDark">149,978</td>
                      <td className="dataHeadingDark"> 588</td>
                      <td className="dataHeadingDark"> 2,448</td>
                      <td className="dataHeadingDark"> 815</td>
                      <td className="dataHeadingDark"> 62,894</td>
                      <td className="dataHeadingDark"> 6,866</td>
                      <td className="dataHeadingDark"> 1,339</td>
                      <td className="dataHeadingDark"> 23</td>
                      <td className="dataHeadingDark"> 9</td>
                      <td className="dataHeadingDark"> 1</td>
                      <td className="dataHeadingDark"> 3</td>
                      <td className="dataHeadingDark"> 3</td>
                      <td className="dataHeadingDark"> 7</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
