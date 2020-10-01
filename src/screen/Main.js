import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import logo from "../images/logo.png";
import "../App.css";
import $ from "jquery";
import { Zoom } from "react-slideshow-image";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/rashan2.jpg";
import slide3 from "../images/back.jpg";
import img1 from "../images/gray-background.jpg";
import img6 from "../images/president.jpeg";
import img2 from "../images/govern.jpg";
import { ScrollSection, ScrollContainer } from "react-onepage-scroll";

const images = [slide1, slide2, slide3];

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBackground: "transparent",
      navbarStat: "absolute",
      topStat: 20,
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 100 ? "transparent" : "white";
      const navbarStat = window.scrollY < 100 ? "absolute" : "sticky";
      const topStat = window.scrollY < 100 ? 20 : 0;
      this.setState({ navBackground: backgroundcolor, navbarStat, topStat });
    });
  }

  render() {
    return (
      <div>
        {/* <Header-START> */}
        <ScrollContainer>
          <ScrollSection
            // style={{backgroundImage: 'url(http://www.thepetedesign.com/demos/phones.png)',
            //                          backgroundRepeat: 'no-repeat' }}
            pageId={0}
          >
            <div className="selectionOne">
              <header
                className="container-fluid bg-transparent"
                style={{
                  ///  width:window.scrollY<100?'85%':'101.5%',backgroundColor:this.state.navBackground,
                  position: "absolute",
                  zIndex: 2,
                  top: 20,
                  // marginLeft:window.scrollY < 100?0:-30
                }}
              >
                <div className="container">
                  <div className="row d-flex justify-content-between">
                    <div className=" ">
                      <div
                        className=""
                        // style={{marginLeft:window.scrollY<100?0:-200}}
                      >
                        <a href="/">
                          <img src={logo} width="220px" />
                        </a>
                      </div>
                      {/* <div>
            <button className="donateBtn">Donate Now</button>
            <button className="donateBtn">UK Donor</button>
          </div> */}
                    </div>
                    {/* <div className="col-md-5 ">

</div> */}
                    <div
                      className=" "
                      // className="float-right"
                      //style={{marginRight:window.scrollY < 100 ?0:50}}
                      //  style={{marginLeft:window.scrollY < 100?0:-250}}
                    >
                      <div className="container">
                        <nav
                          className="navbar navbar-expand-lg navbar-light "
                          style={{ color: " white", fontSize: 20 }}
                        >
                          <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                          >
                            <span className="navbar-toggler-icon"></span>
                          </button>

                          <div
                            className="collapse  navbar-collapse"
                            id="navbarSupportedContent"
                          >
                            <ul
                              className="navbar-nav mr-auto"
                              style={{ color: " white", fontSize: 20 }}
                            >
                              <li className="nav-item active">
                                <a
                                  className="nav-link"
                                  href="/"
                                  style={{ color: " white", fontSize: 20 }}
                                >
                                  Home{" "}
                                  <span className="sr-only">(current)</span>
                                </a>
                              </li>
                              {/* <li className="nav-item">
                    <a className="nav-link" href="#" style={{color:' white',fontSize:20}}>
                      Link
                    </a>
                  </li> */}
                              {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    style={{color:' white',fontSize:20}}>
                      About
                    </a>
                    <div
                      className="dropdown-menu headingList"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="chairmenmessage"style={{color:' white',fontSize:20}}>
                        Chairman Message
                      </a>
                      <a className="dropdown-item" href="#"style={{color:' white',fontSize:20}}>
                        Another action
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#"style={{color:' white',fontSize:20}}>
                        Something else here
                      </a>
                    </div>
                  </li> */}
                              {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    style={{color:' white',fontSize:20}}>
                      Saylani Services / Projects
                    </a>
                 
                  </li> */}
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="#"
                                  tabindex="-1"
                                  aria-disabled="true"
                                  style={{ color: " white", fontSize: ".9em" }}
                                >
                                  Services
                                </a>
                              </li>
                              {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    style={{color:' white',fontSize:20}}>
                      Saylani Ehsaas
                    </a>
                    <div
                      className="dropdown-menu headingList"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#"style={{color:' white',fontSize:20}}>
                        Action
                      </a>
                      <a className="dropdown-item" href="#"style={{color:' white',fontSize:20}}>
                        Another action
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#"style={{color:' white',fontSize:20}}>
                        Something else here
                      </a>
                    </div>
                  </li> */}
                              <li className="nav-item dropdown">
                                <a
                                  className="nav-link dropdown-toggle"
                                  href="#"
                                  id="navbarDropdown"
                                  role="button"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  style={{ color: " white", fontSize: 20 }}
                                >
                                  Future Project
                                </a>
                                <div
                                  className="dropdown-menu headingList"
                                  aria-labelledby="navbarDropdown"
                                >
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    style={{ color: " white", fontSize: 20 }}
                                  >
                                    Action
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    style={{ color: " white", fontSize: 20 }}
                                  >
                                    Another action
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    style={{ color: " white", fontSize: 20 }}
                                  >
                                    Something else here
                                  </a>
                                </div>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="#"
                                  tabindex="-1"
                                  aria-disabled="true"
                                  style={{ color: " white", fontSize: 20 }}
                                >
                                  Media
                                </a>
                              </li>
                              {/* <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    style={{color:' white',fontSize:20}}>
                      News
                    </a>
                  </li> */}
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="#"
                                  tabindex="-1"
                                  aria-disabled="true"
                                  style={{ color: " white", fontSize: 20 }}
                                >
                                  Contact
                                </a>
                              </li>
                              <li className="nav-item ">
                                <a
                                  className="nav-link"
                                  href="#"
                                  tabindex="-1"
                                  aria-disabled="true"
                                  style={{
                                    color: " black",
                                    fontSize: 20,
                                    backgroundColor: "white",
                                    borderRadius: 10,
                                  }}
                                >
                                  Donation
                                </a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </header>

              {/* </Header-START> */}

              {/* <SLIDER_START> */}

              {/* <div style={{}}>
      <div className="slide-container mainSlider " 
     style={{backgroundColor:'#808080',opacity:'0.8'}}
      >
        <Zoom scale={0.4} >
        <MainHeader />
          {images.map((each, index) => (
            <img key={index} className="SliderImage" style={{ width: "100%",height:'100%',margin:0,backgroundSize:'cover',backgroundRepeat:'no-repeat',
          backgroundPosition:'center', }} src={each} />
            ))}
        </Zoom>
      </div>
            </div> */}

              {/* <div
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                
                }}
              >
                <button type="button" className="btn  donateBtn3">
                  Donate Now
                </button>
                <button type="button" className="btn  donateBtn">
                  UK Donor
                </button>
              </div> */}
            </div>
            {/* </SLIDER_START> */}
          </ScrollSection>
          {/* <div className=" d-flex justify-content-center"> */}
          <ScrollSection
            // style={{backgroundImage: 'url(http://www.thepetedesign.com/demos/back-phone.png)',
            //                          backgroundRepeat: 'no-repeat'}}
            pageId={1}
          >
            <div className="container">
              <h1 className="pt-4">
                <strong>About</strong>
              </h1>
              <p
                style={{ marginTop: 60 }}
                className="pt-4 text-center text-muted"
              >
                Established in May 1999 by famous spiritual and religious
                scholar Maulana Bashir Ahmed Farooqui, Saylani Welfare
                International Trust was built on the fundamentals of breaking
                the cycle of poverty, alleviating the financial troubles of the
                poor, giving people a chance to live a dignified life and
                spreading happiness.
              </p>
              <p className="pt-4 text-center text-muted">
                We are an organization that believes in lighting up the lives of
                underprivileged people across the world. We endeavor to provide
                the best quality services in areas including food, education,
                medical and social welfare free of cost to people living in the
                dark. With over 60 different sectors, we feed thousands of
                hungry people each day, hundreds more are given the hope of life
                through medical health care, many are educated to become leaders
                of tomorrow and several are given the opportunity to stand on
                their feet financially.
              </p>
              <p className="pt-4 text-center text-muted">
                Today, we are proud to say that our physical presence extends
                throughout Pakistan with a vast network of 125 branches
                operating in major cities including Karachi, Lahore, Islamabad,
                Rawalpindi, Hyderabad and Faisalabad. Apart from Pakistan, we
                have overseas offices in the UK, USA and UAE as well. Our
                worldwide branches are operating under the guidance of a team of
                over 3,500 working professionals who help almost 150,000 people
                on a daily basis.
              </p>
              <p
                className="pt-4 text-center text-muted"
                style={{ marginBottom: 100 }}
              >
                We strongly believe that a little help goes a long way and our
                work would not be possible without the generous support of our
                valuable donors. Our local and international donors have
                graciously lent us a hand by supporting our causes and enabling
                us to serve the needs of people in need.
              </p>
              {/* </div> */}
            </div>
          </ScrollSection>
          <ScrollSection
            // style={{backgroundImage: 'url(http://www.thepetedesign.com/demos/back-phone.png)',
            //                          backgroundRepeat: 'no-repeat'}}
            pageId={2}
          >
            <div
              className="container-fluid"
              style={{
                backgroundColor: "#aaacab",
                backgroundImage: img1,
              }}
            >
              <h1 className="pt-4 " style={{ color: "white" }}>
                <strong>News</strong>
              </h1>

              <div className="d-flex justify-content-center" style={{}}>
                <div className="col-md-3">
                  <section className="courseCard">
                    <img src={img2} style={{ width: "100%", height: 200 }} />
                    <div className="recentpOst"></div>
                    <p
                      style={{
                        // fontSize: 20,
                        fontWeight: "bold",
                        textAlign: "left",
                        padding: 15,
                      }}
                    >
                      Mr. Mohammad Sarwar Governer of Punjab{" "}
                    </p>
                    <p
                      className="text-muted"
                      style={{
                        // fontSize: 14,
                        fontWeight: "bold",
                        textAlign: "left",
                        padding: 15,
                      }}
                    >
                      On 21 Sep,2020 Hazrat Moulana Bashir Sahab Visit Punjab
                      Governer of to meet Mr. Mohammad Sarwar Governer of Punjab
                      .
                    </p>
                  </section>
                </div>
                <div className="col-md-3 ">
                  <section
                    className="courseCard"
                    //style={{height:500}}
                  >
                    <img src={img6} style={{ width: "100%", height: 200 }} />
                    <div className="recentpOst"></div>
                    <p
                      style={{
                        // fontSize: 20,
                        fontWeight: "bold",
                        textAlign: "left",
                        padding: 15,
                      }}
                    >
                      Dr. Arif Alvi (President of Pakistan)
                    </p>
                    <p
                      className="text-muted"
                      style={{
                        // fontSize: 14,
                        fontWeight: "bold",
                        textAlign: "left",
                        padding: 15,
                      }}
                    >
                      On 23 Feb,2020 Dr. Arif Alvi (President of Pakistan) Visit
                      Saylani Welfare Head Office .
                    </p>
                  </section>
                </div>

                <div className="col-md-3">
                  <section className="courseCard">
                    <img src={img2} style={{ width: "100%", height: 200 }} />
                    <div className="recentpOst"></div>
                    <p
                      style={{
                        // fontSize: 20,
                        fontWeight: "bold",
                        textAlign: "left",
                        padding: 15,
                      }}
                    >
                      Mr. Mohammad Sarwar Governer of Punjab{" "}
                    </p>
                    <p
                      className="text-muted"
                      style={{
                        // fontSize: 14,
                        fontWeight: "bold",
                        textAlign: "left",
                        padding: 15,
                      }}
                    >
                      On 21 Sep,2020 Hazrat Moulana Bashir Sahab Visit Punjab
                      Governer of to meet Mr. Mohammad Sarwar Governer of Punjab
                      .
                    </p>
                  </section>
                </div>
              </div>

              {/* <Zoom scale={0.4} style={{marginTop:50}}>
        <MainHeader />
          {images.map((each, index) => (
            <img key={index} className="SliderImage" style={{ width: "100%",height:700, }} src={each} />
<div className="container-fluid">
            <h4>asdasd</h4>
</div>
            ))}
        </Zoom> */}

              {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={slide1} alt="First slide" style={{height:400}}/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={slide2} alt="Second slide" style={{height:400}}/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={slide3} alt="Third slide" style={{height:400}}/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div> */}

              <div className="d-flex justify-content-center">
                <button type="button" className="btn donateBtn2 rounded">
                  Show More
                </button>
              </div>
            </div>
          </ScrollSection>

          <ScrollSection
            // style={{backgroundImage: 'url(http://www.thepetedesign.com/demos/back-phone.png)',
            //                          backgroundRepeat: 'no-repeat'}}
            pageId={3}
          >
            <div
              className="container-fluid"
              style={{ backgroundColor: "white", marginBottom: 40 }}
            >
              <h1 className="pt-4 " style={{}}>
                <strong>Contact us</strong>
              </h1>

              <div className="container-fluid" style={{ marginTop: 40 }}>
                <div className="row">
                  {/* HEAD OFFICE INFO  */}
                  <div className="col-md-4" style={{ width: 100 }}>
                    <div className="row">
                      <h6 className="addBorder">Head Office</h6>
                      <div>
                        <h6
                          style={{
                            width: 300,
                            marginLeft: 10,
                            textAlign: "left",
                          }}
                        >
                          A-25, Bahadurabad Chowrangi Karachi, Pakistan
                        </h6>
                        <div className="row" style={{ marginLeft: 10 }}>
                          <p style={{ fontSize: "1em" }}>
                            <i class="fas fa-phone-alt"></i>
                          </p>
                          <h6
                            style={{
                              width: 300,
                              marginLeft: 10,
                              textAlign: "left",
                            }}
                          >
                            UAN: 111-729-526
                          </h6>
                        </div>
                        <div className="row" style={{ marginLeft: 10 }}>
                          <p style={{ fontSize: "1em" }}>
                            <i class="fas fa-mobile"></i>
                          </p>
                          <h6
                            style={{
                              width: 300,
                              marginLeft: 10,
                              textAlign: "left",
                            }}
                          >
                            CELL: 92-311-1729526
                          </h6>
                        </div>
                        <div className="row" style={{ marginLeft: 10 }}>
                          <p style={{ fontSize: "1em" }}>
                            <i class="fas fa-globe"></i>
                          </p>
                          <h6
                            style={{
                              width: 300,
                              marginLeft: 10,
                              textAlign: "left",
                            }}
                          >
                            (+0092-213) 4130786-90
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* UK OFFICE */}
                  <div className="col-md-4" style={{ width: 100 }}>
                    <div className="row">
                      <h6 className="addBorderUsa">USA Office</h6>
                      <div>
                        <h6
                          style={{
                            width: 300,
                            marginLeft: 10,
                            textAlign: "left",
                          }}
                        >
                          A-25, Bahadurabad Chowrangi Karachi, Pakistan
                        </h6>
                        <div className="row" style={{ marginLeft: 10 }}>
                          <p style={{ fontSize: "1em" }}>
                            <i class="fas fa-phone-alt"></i>
                          </p>
                          <h6
                            style={{
                              width: 300,
                              marginLeft: 10,
                              textAlign: "left",
                            }}
                          >
                            NO +1(716)941 7792
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* UK OFFICE */}
                  <div className="col-md-4 " style={{ width: 100 }}>
                    <div className="row">
                      <h6 className="addBorderUK">UK Office</h6>
                      <div>
                        <h6
                          style={{
                            width: 300,
                            marginLeft: 10,
                            textAlign: "left",
                          }}
                        >
                          A-25, Bahadurabad Chowrangi Karachi, Pakistan
                        </h6>
                        <div className="row" style={{ marginLeft: 10 }}>
                          <p style={{ fontSize: "1em" }}>
                            <i class="fas fa-phone-alt"></i>
                          </p>
                          <h6
                            style={{
                              width: 300,
                              marginLeft: 10,
                              textAlign: "left",
                            }}
                          >
                            NO (+44)115 970 6256
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* QUERIES BOX */}
              <div className="container-fluid" style={{ marginTop: 20 }}>
                <h3 style={{ textAlign: "left" }}>For any query :</h3>

                {/* <div className="messagebox">
            <h5 >Leave a message or query here</h5>
            <textarea cols='60' rows='10' className="messageBoxTxt" />
            <p>
              <label className='messageLabl'>Name *</label>
              <input type="text" id="author" name="author"  size="45" className="inptTxt"/>
            </p>
            <p>
<label className='messageLabl'>Email *</label>
<input type="text" id="email" name="email"  size="45" className="inptTxtTwo"/>
</p>

<button className="messageBtn">Add Message</button>
</div> */}
                <div className="row" style={{ marginTop: 10 }}>
                  <div className=" col-md-4 form-group ">
                    <p className="text-left">Your Name ( required )</p>
                    <input
                      type="text"
                      id="author"
                      class="form-control"
                      name="author"
                      size="45"
                    />
                  </div>
                  <div className="col-md-4 form-group ">
                    <p className="text-left">Your Email ( required )</p>
                    <input
                      type="text"
                      id="author"
                      class="form-control"
                      name="author"
                      size="45"
                    />
                  </div>
                  <div className="col-md-4 form-group ">
                    <p className="text-left">Subject ( required )</p>
                    <input
                      type="text"
                      id="author"
                      class="form-control"
                      name="author"
                      size="45"
                    />
                  </div>
                </div>

                <div className="col-md-6 form-group ">
                  <p className="text-left">Your Message</p>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                  ></textarea>
                </div>

                <div className="col-md-4">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg btn-block"
                  >
                    Submit
                  </button>
                </div>

                {/* <div className="col-md-4 ">
              <label style={{}}>Your Email ( required )</label>
              <input type="text" id="author"  name="author"  size="45" className="inptTxt"/>
            </div>
            <div className="col-md-4 ">
              <label style={{}}>Subject ( required ) </label>
              <input type="text" id="author"  name="author"  size="45" className="inptTxt"/>
            </div> */}
                {/* <div className="col-md-4 ">
              <h6 style={{textAlign:'left'}}>Subject</h6>
              <input type="text" id="author"  name="author"  size="45" className="inptTxt"/>
            </div> */}

                {/* <p className="col-md-4 ">
<label className='messageLabl'>Your Name : </label>
<input type="text" id="email" name="email"  size="45" className="inptTxtTwo"/>
</p>

<p className="col-md-4 ">
<label className='messageLabl'>Your Email : </label>
<input type="text" id="email" name="email"  size="45" className="inptTxtTwo"/>
</p> */}

                {/* <div className="col-md-6" style={{marginTop: 50}}>
              <h6 style={{textAlign:'left',marginLeft:50}}>Your Message</h6>
              <textarea 
              cols='60'
                rows='10' className="messageBoxTxt" />
            </div> */}
              </div>
            </div>
          </ScrollSection>
          {/* <ScrollSection
            style={{
              backgroundImage:
                "url(http://www.thepetedesign.com/demos/back-phone.png)",
              backgroundRepeat: "no-repeat",
            }}
            pageId={4}
          >
            <div
              className="container-fluid"
              style={{ height: 500, backgroundColor: "#292825" }}
            >
              <div
                className="row d-flex justify-content-left"
                style={{ paddingTop: 50 }}
              >
                <div className="col-md-2">
                  <h3 style={{ color: "white" }}>Saylani Service</h3>
                  <ul>
                    <li style={{ color: "white" }}>Hajj Application Form</li>
                    <li style={{ color: "white" }}>Saylani Dastarkhwan</li>
                    <li style={{ color: "white" }}>Online Sadqa Form</li>
                    <li style={{ color: "white" }}>Saylani Job Bank</li>
                  </ul>
                </div>
                <div className="col-md-2">
                  <h3 style={{ color: "white" }}>Education</h3>
                </div>
                <div className="col-md-2">
                  <h3 style={{ color: "white" }}>Future Project</h3>
                </div>
              </div>
            </div>
          </ScrollSection> */}
        </ScrollContainer>
      </div>
    );
  }
}
