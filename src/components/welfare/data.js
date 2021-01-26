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
      <div>
        <div className="row backgroundLight">
          <div className="col-md-6 p-5">
            <div className="py-5 px-4 bg-white shadow rounded my-5">
              <h2>Introduction</h2>
              <p className="color">Introduction</p>
            </div>
            <iframe
              className="video"
              width="100%"
              src="https://www.youtube.com/embed/CDGOjlFXzOo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div
            style={{ boxShadow: "-10px 0 15px rgba(0,0,0,.3)" }}
            className="p-5 text-white col-md-6 backgroundDark"
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
                  <h2 className="p-3 px-5 dataHeadingDark">
                    <span>Cash</span>
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
            <div class="">
              <div
                id="carouselContent"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active text-center p-4">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6 py-3 py-5">
                          <div className="p-2 text-center">
                            <p style={{ fontSize: "1.2em" }}>
                              Wedding Furniture
                            </p>
                          </div>
                          <h3 className="p-3 dataHeadingDark">
                            <span>Cash</span>{" "}
                            <span className="numberHeading">98,000,000</span>
                          </h3>
                          <h3 className="p-3 dataHeadingDark">
                            <span>Unit</span>{" "}
                            <span className="numberHeading">7,140</span>
                          </h3>
                        </div>
                        <div className="col-md-6 py-3 py-5">
                          <div className="p-2 text-center">
                            <p style={{ fontSize: "1.2em" }}>Wedding Food</p>
                          </div>
                          <h3 className="p-3 dataHeadingDark">
                            <span>Cash</span>{" "}
                            <span className="numberHeading">7,420,775</span>
                          </h3>
                          <h3 className="p-3 dataHeadingDark">
                            <span>Unit</span>{" "}
                            <span className="numberHeading"> 55,458</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item text-center p-4">
                    <div className="row">
                      <div className="col-md-6 py-3 py-5">
                        <div className="p-2 text-center">
                          <p style={{ fontSize: "1.2em" }}>Wedding Cash</p>
                        </div>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Cash</span>{" "}
                          <span className="numberHeading">21,420,850</span>
                        </h3>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Unit</span>{" "}
                          <span className="numberHeading">2,826</span>
                        </h3>
                      </div>
                      <div className="col-md-6 py-3 py-5">
                        <div className="p-2 text-center">
                          <p style={{ fontSize: "1.2em" }}>Rozgar</p>
                        </div>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Cash</span>{" "}
                          <span className="numberHeading">36,915,470</span>{" "}
                        </h3>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Unit</span>{" "}
                          <span className="numberHeading">2,603</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item text-center p-4">
                    <div className="row">
                      <div className="col-md-6 py-3 py-5">
                        <div className="p-2 text-center">
                          <p style={{ fontSize: "1.2em" }}>Education</p>
                        </div>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Cash</span>
                          <span className="numberHeading">173,224,833</span>
                        </h3>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Unit</span>
                          <span className="numberHeading"> 149,978</span>
                        </h3>
                      </div>
                      <div className="col-md-6 py-3 py-5">
                        <div className="p-2 text-center">
                          <p style={{ fontSize: "1.2em" }}>Constructions</p>
                        </div>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Cash</span>
                          <span className="numberHeading">130,931,117</span>
                        </h3>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Unit</span>
                          <span className="numberHeading">588</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item text-center p-4">
                    <div className="row">
                      <div className="col-md-6 py-3 py-5">
                        <div className="p-2 text-center">
                          <p style={{ fontSize: "1.2em" }}>Qarz e Hasna</p>
                        </div>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Cash</span>
                          <span className="numberHeading">45,087,786</span>
                        </h3>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Unit</span>
                          <span className="numberHeading">2,448</span>
                        </h3>
                      </div>
                      <div className="col-md-6 py-3 py-5">
                        <div className="p-2 text-center">
                          <p style={{ fontSize: "1.2em" }}>Utility Bills</p>
                        </div>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Cash</span>
                          <span className="numberHeading">12,336,387</span>
                        </h3>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Unit</span>
                          <span className="numberHeading">815</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item text-center p-4">
                    <div className="row">
                      <div className="col-md-6 py-3 py-5">
                        <div className="p-2 text-center">
                          <p style={{ fontSize: "1.2em" }}>Rashan</p>
                        </div>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Cash</span>
                          <span className="numberHeading"> 22,030,400</span>
                        </h3>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Unit</span>
                          <span className="numberHeading">62,894</span>
                        </h3>
                      </div>
                      <div className="col-md-6 py-3 py-5">
                        <div className="p-2 text-center">
                          <p style={{ fontSize: "1.2em" }}>Help</p>
                        </div>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Cash</span>
                          <span className="numberHeading">61,681,285</span>
                        </h3>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Unit</span>
                          <span className="numberHeading">6,866</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item text-center p-4">
                    <div className="row">
                      <div className="col-md-6 py-3 py-5">
                        <div className="p-2 text-center">
                          <p style={{ fontSize: "1.2em" }}>Help</p>
                        </div>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Cash</span>
                          <span className="numberHeading">4,555,200</span>
                        </h3>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Unit</span>
                          <span className="numberHeading">322</span>
                        </h3>
                      </div>
                      <div className="col-md-6 py-3 py-5">
                        <div className="p-2 text-center">
                          <p style={{ fontSize: "1.2em" }}>House Advance</p>
                        </div>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Cash</span>
                          <span className="numberHeading">316,000</span>
                        </h3>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Unit</span>
                          <span className="numberHeading">23</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item text-center p-4">
                    <div className="row">
                      <div className="col-md-6 py-3 py-5">
                        <div className="p-2 text-center">
                          <p style={{ fontSize: "1.2em" }}>Loan Payment</p>
                        </div>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Cash</span>
                          <span className="numberHeading">191,080</span>
                        </h3>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Unit</span>
                          <span className="numberHeading">9</span>
                        </h3>
                      </div>
                      <div className="col-md-6 py-3 py-5">
                        <div className="p-2 text-center">
                          <p style={{ fontSize: "1.2em" }}>
                            House Hold Expanses
                          </p>
                        </div>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Cash</span>
                          <span className="numberHeading"> 13,920</span>
                        </h3>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Unit</span>
                          <span className="numberHeading">1</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item text-center p-4">
                    <div className="row">
                      <div className="col-md-6 py-3 py-5">
                        <div className="p-2 text-center">
                          <p style={{ fontSize: "1.2em" }}>Tajheez-o-Takfeen</p>
                        </div>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Cash</span>
                          <span className="numberHeading">20,500</span>
                        </h3>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Unit</span>
                          <span className="numberHeading">3</span>
                        </h3>
                      </div>
                      <div className="col-md-6 py-3 py-5">
                        <div className="p-2 text-center">
                          <p style={{ fontSize: "1.2em" }}>Traveling Expense</p>
                        </div>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Cash</span>
                          <span className="numberHeading">43,600</span>
                        </h3>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Unit</span>
                          <span className="numberHeading">3</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item text-center p-4">
                    <div className="row">
                      <div className="col-md-6 py-3 py-5">
                        <div className="p-2 text-center">
                          <p style={{ fontSize: "1.2em" }}>Medical</p>
                        </div>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Cash</span>
                          <span className="numberHeading">60,500</span>
                        </h3>
                        <h3 className="p-3 dataHeadingDark">
                          <span>7</span>
                        </h3>
                      </div>
                      <div className="col-md-6 py-3 py-5">
                        <div className="p-2 text-center">
                          <p style={{ fontSize: "1.2em" }}>Special Rashan</p>
                        </div>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Cash</span>
                          <span className="numberHeading">17,500</span>
                        </h3>
                        <h3 className="p-3 dataHeadingDark">
                          <span>Unit</span>
                          <span className="numberHeading">1,339</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev slideBtn text-dark"
                  href="#carouselContent"
                  data-slide="prev"
                  style={{ top: "50%" }}
                >
                  {" "}
                  <i className="fas fa-arrow-left"></i>
                  <span className="sr-only">Previous</span>
                </button>
                {/* <a
                  class="carousel-control-prev slideBtn text-dark"
                  href="#carouselContent"
                  role="button"
                  data-slide="prev"
                >
                  <i class="fas fa-arrow-left"></i>
                  <span class="sr-only">Previous</span>
                </a> */}
                <button
                  className="carousel-control-next slideBtn text-dark"
                  href="#carouselContent"
                  data-slide="next"
                  style={{ top: "50%" }}
                >
                  {" "}
                  <i className="fas fa-arrow-right"></i>
                  <span className="sr-only">Previous</span>
                </button>
                {/* <a
                  className="carousel-control-next slideBtn text-dark"
                  href="#carouselContent"
                  role="button"
                  data-slide="next"
                >
                  <i className="fas fa-arrow-right"></i>
                  <span className="sr-only">Next</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
