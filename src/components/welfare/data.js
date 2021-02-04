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
          {/* <div
            style={{
              backgroundImage:
                'url("https://samircharitabletrust.org/wp-content/uploads/2014/02/ab.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="col-md-6 p-5"
            >
            </div> */}
          {/* <div className="py-5 px-4 bg-white shadow rounded my-5">
              <h2>Introduction</h2>
              <p className="color">Introduction</p>
            </div> */}
          {/* <iframe
              className="video"
              width="100%"
              src="https://www.youtube.com/embed/CDGOjlFXzOo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe> */}
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
                      Total Welfare Amount{" "}
                      <span className="numberHeading">2014</span> to{" "}
                      <span className="numberHeading">2020</span>{" "}
                    </h3>
                    <h2
                      style={{ fontSize: "2.5em" }}
                      className="p-3 px-5 dataHeadingDark"
                    >
                      <span className="numberHeading">
                        <CountUp
                          className="numberHeading"
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
                      <td className="dataHeadingDark"> Wedding Furniture</td>
                      <td className="dataHeadingDark"> Wedding Food</td>
                      <td className="dataHeadingDark"> Wedding Cash</td>
                      <td className="dataHeadingDark"> Rozgar</td>
                      <td className="dataHeadingDark"> Education</td>
                      <td className="dataHeadingDark"> Constructions</td>
                      <td className="dataHeadingDark"> Qarz e Hasna</td>
                      <td className="dataHeadingDark"> Utility Bills</td>
                      <td className="dataHeadingDark"> Rashan</td>
                      <td className="dataHeadingDark"> Help</td>
                      <td className="dataHeadingDark"> Help</td>
                      <td className="dataHeadingDark"> House Advance</td>
                      <td className="dataHeadingDark"> Loan Payment</td>
                      <td className="dataHeadingDark"> House Hold Expanses</td>
                      <td className="dataHeadingDark"> Tajheez-o-Takfeen</td>
                      <td className="dataHeadingDark"> Traveling Expense</td>
                      <td className="dataHeadingDark"> Medical</td>
                      <td className="dataHeadingDark"> Special Rashan</td>
                    </tr>
                    <tr>
                      <td className="dataHeadingDark"> Cash</td>
                      <td className="dataHeadingDark numberHeading">
                        98,000,000
                      </td>
                      <td className="dataHeadingDark numberHeading">
                        98,000,000
                      </td>
                      <td className="dataHeadingDark numberHeading">
                        7,420,775
                      </td>
                      <td className="dataHeadingDark numberHeading">
                        21,420,850
                      </td>
                      <td className="dataHeadingDark numberHeading">
                        36,915,470
                      </td>
                      <td className="dataHeadingDark numberHeading">
                        173,224,833
                      </td>
                      <td className="dataHeadingDark numberHeading">
                        130,931,117
                      </td>
                      <td className="dataHeadingDark numberHeading">
                        45,087,786
                      </td>
                      <td className="dataHeadingDark numberHeading">
                        12,336,387
                      </td>
                      <td className="dataHeadingDark numberHeading">
                        22,030,400
                      </td>
                      <td className="dataHeadingDark numberHeading">
                        61,681,285
                      </td>
                      <td className="dataHeadingDark numberHeading">
                        4,555,200
                      </td>
                      <td className="dataHeadingDark numberHeading">316,000</td>
                      <td className="dataHeadingDark numberHeading">191,080</td>
                      <td className="dataHeadingDark numberHeading"> 13,920</td>
                      <td className="dataHeadingDark numberHeading"> 20,500</td>
                      <td className="dataHeadingDark numberHeading"> 43,600</td>
                      <td className="dataHeadingDark numberHeading"> 60,500</td>
                      <td className="dataHeadingDark numberHeading"> 17,500</td>
                    </tr>
                    <tr>
                      <td className="dataHeadingDark"> Amount</td>
                      <td className="dataHeadingDark numberHeading"> 7,140</td>
                      <td className="dataHeadingDark numberHeading"> 7,140</td>
                      <td className="dataHeadingDark numberHeading"> 55,458</td>
                      <td className="dataHeadingDark numberHeading"> 2,826</td>
                      <td className="dataHeadingDark numberHeading"> 2,603</td>
                      <td className="dataHeadingDark numberHeading">149,978</td>
                      <td className="dataHeadingDark numberHeading"> 588</td>
                      <td className="dataHeadingDark numberHeading"> 2,448</td>
                      <td className="dataHeadingDark numberHeading"> 815</td>
                      <td className="dataHeadingDark numberHeading"> 62,894</td>
                      <td className="dataHeadingDark numberHeading"> 6,866</td>
                      <td className="dataHeadingDark numberHeading"> 322</td>
                      <td className="dataHeadingDark numberHeading"> 23</td>
                      <td className="dataHeadingDark numberHeading"> 9</td>
                      <td className="dataHeadingDark numberHeading"> 1</td>
                      <td className="dataHeadingDark numberHeading"> 3</td>
                      <td className="dataHeadingDark numberHeading"> 3</td>
                      <td className="dataHeadingDark numberHeading"> 7</td>
                      <td className="dataHeadingDark numberHeading"> 1,339</td>
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
