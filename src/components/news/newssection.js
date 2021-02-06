import React from "react";
import "./news.css";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
// import FbImageLibrary from "react-fb-image-grid";
import Footer from "../Footer";
import { connect } from "react-redux";
import {
  getAllNews,
  getAllNewsSorted,
  fieldEmpty,
} from "../../Redux/action/homeAction";
//import DatePicker from 'react-date-picker';
import { Zoom } from "react-slideshow-image";

class NewsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //  SaylaniNewsGet: this.props.SaylaniNewsGet.length === 0 ? [] : this.props.SaylaniNewsGet
      newDate: new Date(),
      firstNews: [],
      dateState: true,
      page: 1,
      limit: 5,
    };
  }

  handleScroll = () => {
    // const { page, limit } = this.state
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    // console.log('hello news', windowBottom, docHeight)

    if (
      Math.ceil(windowBottom) >= docHeight &&
      this.props.SaylaniNewsNext != undefined &&
      this.props.SaylaniNewsNext.page
    ) {
      console.log(this.props.SaylaniNewsGet, "asdsads", this.state.page);
      this.props.getAllNews(
        this.props.SaylaniNewsNext.page,
        this.state.limit,
        "undefined"
      );
      document.removeEventListener("scroll", this.handleScroll);
      // this.setState({ page: this.state.page + 1 })
    }
  };

  componentWillMount() {
    console.log("componentDidMount");
    const { page, limit } = this.state;
    if (this.props.SaylaniNewsGet.length < 1) {
      this.props.getAllNews(page, limit, "undefined");
    }
    document.addEventListener("scroll", this.handleScroll);
    //  return () => document.removeEventListener('scroll', this.handleScroll);
  }
  componentWillUpdate() {
    document.addEventListener("scroll", this.handleScroll);
  }

  dateGet = (e) => {
    // console.log(e.value);
    let dateSet = e.value.slice(5) + "-" + e.value.slice(0, 4);
    this.setState({ newDate: e.value, dateState: true });
    this.props.fieldEmpty();
    this.props.getAllNewsSorted(dateSet);
  };
  resetDate = () => {
    this.props.fieldEmpty();
    this.props.getAllNews(1, 8, "undefined");
    this.setState({ newDate: "" });
  };

  render() {
    // console.log(this.props.SaylaniNewsGet, 'SaylaniNewsGet', this.props.SaylaniNewsNext)
    const { newDate, dateState } = this.state;
    return (
      <div>
        <div className="row">
          <div
            // style={{ backgroundColor: "rgb(240, 240, 240)" }}
            className="col-md-3 shadow backgroundLight"
          >
            <div
              style={{ backgroundColor: "#0267b3", padding: "27px" }}
              className="mt-4"
            >
              <h1 className="py-4 text-white">Saylani NEWS</h1>
            </div>
            <div className="py-4 px-3">
              <h3 className="text-center mt-4">
                Select date for specific day news of Saylani
              </h3>
              <input
                type="date"
                data-date-inline-picker="true"
                value={newDate}
                onChange={(e) => this.dateGet(e.target)}
                className="dateInp"
              />
              <button class=" btn-block prevbtn" onClick={this.resetDate}>
                Reset date
              </button>
            </div>
            <div className="p-3 text-justify">
              <p
                className="NewsList"
                data-toggle="collapse"
                data-target="#Intro"
                aria-expanded="false"
                aria-controls="Intro"
              >
                Introduction <i class="fas fa-sort-down"></i>
              </p>
              <div class="collapse" id="Intro">
                <div class="card card-body">
                  <p className="color">
                    Established in May 1999 by famous spiritual and religious
                    scholar Maulana Bashir Ahmed Farooqui, Saylani Welfare
                    International Trust was built on the fundamentals of
                    breaking the cycle of poverty, alleviating the financial
                    troubles of the poor, giving people a chance to live a
                    dignified life and spreading happiness.
                  </p>
                  <p className="color">
                    We are an organization that believes in lighting up the
                    lives of underprivileged people across the world. We
                    endeavor to provide the best quality services in areas
                    including food, education, medical and social welfare free
                    of cost to people living in the dark. With over 60 different
                    sectors, we feed thousands of hungry people each day,
                    hundreds more are given the hope of life through medical
                    health care, many are educated to become leaders of tomorrow
                    and several are given the opportunity to stand on their feet
                    financially.
                  </p>
                  <p className="color">
                    Today, we are proud to say that our physical presence
                    extends throughout Pakistan with a vast network of 125
                    branches operating in major cities including Karachi,
                    Lahore, Islamabad, Rawalpindi, Hyderabad and Faisalabad.
                    Apart from Pakistan, we have overseas offices in the UK, USA
                    and UAE as well. Our worldwide branches are operating under
                    the guidance of a team of over 3,500 working professionals
                    who help almost 150,000 people on a daily basis.
                  </p>
                  <p className="color">
                    We strongly believe that a little help goes a long way and
                    our work would not be possible without the generous support
                    of our valuable donors. Our local and international donors
                    have graciously lent us a hand by supporting our causes and
                    enabling us to serve the needs of people in need.
                  </p>
                </div>
              </div>
              <p
                className="NewsList"
                data-toggle="collapse"
                data-target="#services"
                aria-expanded="false"
                aria-controls="services"
              >
                Services <i class="fas fa-sort-down"></i>
              </p>
              <div class="collapse" id="services">
                <div class="card card-body">
                  <Link to="/welfare">Welfare</Link>
                  <Link to="/smit">IT Training</Link>
                  <Link to="/education">Schools</Link>
                  <Link to="/medical">Medical</Link>
                  <Link to="/bloodbank">Blood Bank</Link>
                  <Link to="/dastarkhwan">Food</Link>
                  <Link to="/roplant">RO Water Plant</Link>
                  <Link to="/jobBank">Jobs</Link>
                  <Link to="/sbil">Business Education</Link>
                  <Link to="/bookStore">Islamic Books</Link>
                  <Link to="/langarkhana">Langar Khana</Link>
                  <Link to="/istikhara">Rohani Ilaj, Istikhara</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div style={{ backgroundColor: "#0267b3" }} className="mt-4">
              <div className="text-center">
                <div className="shortCountHead backgroundLight color">
                  <h3>
                    Saylani Welfare
                    <span className="bg-white d-block shadow p-1">
                      Nov 2020
                    </span>
                  </h3>
                </div>

                <div className="shortCount">
                  Number Of Patients Treated <br />
                  <span className="large">53749</span>
                </div>
                <div className="shortCount">
                  Number Of Students Trained <br />
                  <span className="large">125000</span>
                </div>
                <div className="shortCount">
                  Number Of Family Welfare <br />
                  <span className="large">8500</span>
                </div>
                <div className="shortCount">
                  Number Of Students educate <br />
                  <span className="large">180000</span>
                </div>
                <div className="shortCount">
                  Number Of Dasterkhwan opened
                  <br />
                  <span className="large">180000</span>
                </div>
              </div>
            </div>
            <div className="container py-3">
              {this.props.SaylaniNewsGet &&
                this.props.SaylaniNewsGet.length > 0 &&
                this.props.SaylaniNewsGet.slice(0, 1).map((data, i) => {
                  //  console.log(data, 'first ')
                  return (
                    <div className="row py-3 border-top border-bottom my-3" key={i}>
                      <div className="col-md-8">
                        <div className="date">
                          <p style={{ fontSize: "2em" }}>
                            {data.newsdate.slice(3, 5)}
                          </p>
                          <p>
                            {data.newsdate.slice(0, 2)}
                            {data.newsdate.slice(5)}
                          </p>
                        </div>

                        <div className="slide-container">
                          <Zoom
                            prevArrow={
                              <button className="slideBtn prevSlide">
                                <i class="fas fa-arrow-left"></i>
                              </button>
                            }
                            nextArrow={
                              <button className="slideBtn nxtSlide">
                                <i class="fas fa-arrow-right"></i>
                              </button>
                            }
                            scale={0.4}
                          >
                            {data.multiple_image.map((each, index) => (
                              <img
                                key={index}
                                style={{ width: "100%" }}
                                src={each}
                              />
                            ))}
                          </Zoom>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <h3>{data.name}</h3>
                        <p>{data.description}</p>
                      </div>
                    </div>
                  );
                })}

              <div className="row my-4">
                {this.props.SaylaniNewsGet &&
                  this.props.SaylaniNewsGet.length > 0 &&
                  this.props.SaylaniNewsGet.slice(1).map((data, i) => {
                    // console.log(data, 'adsad')
                    return (
                      <div className="col-md-6 pb-3" key={i}>
                        <div className="date">
                          <p style={{ fontSize: "2em" }}>
                            {data.newsdate.slice(3, 5)}
                          </p>
                          <p>
                            {data.newsdate.slice(0, 2)}
                            {data.newsdate.slice(5)}
                          </p>
                        </div>
                        <div className="slide-container">
                          <Zoom
                            prevArrow={
                              <button className="slideBtn prevSlide">
                                <i class="fas fa-arrow-left"></i>
                              </button>
                            }
                            nextArrow={
                              <button className="slideBtn nxtSlide">
                                <i class="fas fa-arrow-right"></i>
                              </button>
                            }
                            scale={0.4}
                          >
                            {data.multiple_image.map((each, index) => (
                              <>
                                <img
                                  key={index}
                                  style={{ width: "100%" }}
                                  src={each}
                                />
                                <h3 style={{ position: "absolute", width: '100%', bottom: 10, fontWeight: "bold", color: 'white', textAlign: "center" }} >{data.name}</h3>
                              </>
                            ))}
                          </Zoom>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    SaylaniNewsGet: state.root.SaylaniNewsGet,
    SaylaniNewsNext: state.root.SaylaniNewsNext,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    getAllNews: (a, b, e) => {
      console.log("dispatch is calling");
      dispatch(getAllNews(a, b, e));
    },
    getAllNewsSorted: (e) => {
      dispatch(getAllNewsSorted(e));
    },
    fieldEmpty: () => {
      dispatch(fieldEmpty());
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(NewsSection);
