import React from "react";
import "./Home.css";
import Reveal from "react-reveal/Reveal";
import { connect } from "react-redux";
import { homeIntroGet } from "../../Redux/action/homeAction";
import back from "../../images/about_us_background.png";
import house from "../../images/homeimages/house.png";
import food from "../../images/homeimages/food.png";
import book from "../../images/homeimages/book.png";
import medical from "../../images/homeimages/medical.png";
import family from "../../images/homeimages/family.png";
import house2 from "../../images/homeimages/house2.png";
import introtextImage from "../../images/homeimages/introtextImage.png";
import student from "../../images/homeimages/student.png";
import flat from "../../images/homeimages/flat.png";
import roplant from "../../images/homeimages/roplant.png";
import donate from "../../images/homeimages/donate.png";
import doorstep from "../../images/homeimages/doorstep.png";
import banktransfer from "../../images/homeimages/banktransfer.png";
import collectioncenter from "../../images/homeimages/collectioncenter.png";
import HomeService from "../../smallcomponents/homeservice";
import BankDetail from "../../components/donate/bankdetails";
import { Link } from "react-router-dom";
import DoorStepCollection from "../donate/doorstepcollection";
import CashCollectionPoint from "../../components/donate/cashCollectionPoint";

class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bankDetails: false,
      doorStepForm: false,
      cashCollection: false,
    };
  }

  componentDidMount() {
    this.props.homeIntroGet();
  }
  render() {
    return (
      <div id="homeIntro">
        <div className="">
          <div>
            <div className="border-top border-bottom border-dark py-4 px-3 bg-light">

              <div className="col-md-12 ">
                <div className="displayheading Heading">
                  <h3 className="text-center color"><b><u>OUR IMPACT</u></b></h3>
                </div>
              </div>
              <div className="container-fluid">
                <div className="col-md-12 mt-3 ">
                  <div>
                    <div className="container-fluid">
                      <div className="row justify-content-center ">
                        <div className="col-md-2 mx-1 col-sm-6 col-xs-6 ">
                          <HomeService
                            imageSrc={house}
                            countStart={100}
                            countEnd={450}
                          >
                            Branches & Dastarkhuwan all 4 provinces, AJK and GB
                          </HomeService>
                        </div>
                        <div className="col-md-2 mx-1 col-sm-6 col-xs-6">
                          <HomeService
                            imageSrc={food}
                            countStart={100000}
                            countEnd={150000}
                          >
                            people fed everyday.
                          </HomeService>
                        </div>
                        <div className="col-md-2 mx-1 col-sm-6 col-xs-6">
                          <HomeService
                            imageSrc={book}
                            countStart={100000}
                            countEnd={300000}
                          >
                            Students annually.
                          </HomeService>
                        </div>
                        <div className="col-md-2 mx-1 col-sm-6 col-xs-6">
                          <HomeService
                            imageSrc={medical}
                            countStart={100000}
                            countEnd={950000}
                          >
                            patients treated annually.
                          </HomeService>
                        </div>
                        <div className="col-md-2 mx-1 col-sm-6 col-xs-6">
                          <HomeService
                            imageSrc={family}
                            countStart={1000}
                            countEnd={10000}
                          >
                            familied helped by Saylani Welfare International
                            Trust
                          </HomeService>
                        </div>
                        <div className="col-md-2 mx-1 col-sm-6 col-xs-6">
                          <HomeService
                            imageSrc={house2}
                            countStart={1000}
                            countEnd={10000}
                          >
                            Children cure from Thalassemia
                          </HomeService>
                        </div>
                        <div className="col-md-2 mx-1 col-sm-6 col-xs-6">
                          <HomeService
                            imageSrc={student}
                            countStart={10000}
                            countEnd={75000}
                          >
                            IT Students enrolled.
                          </HomeService>
                        </div>
                        <div className="col-md-2 mx-1 col-sm-6 col-xs-6">
                          <HomeService
                            imageSrc={flat}
                            countStart={100}
                            countEnd={500}
                          >
                            Houses & flat are provided on 12-14 years easy
                            installment.
                          </HomeService>
                        </div>
                        <div className="col-md-2 mx-1 col-sm-6 col-xs-6">
                          <HomeService
                            imageSrc={roplant}
                            countStart={10}
                            countEnd={100}
                          >
                            R.O Water Filter Plants installed in slums areas of
                            Pakistan.
                          </HomeService>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="p-5 my-5">
              <div className="row">
                <div className="col-md-5">
                  <div className="displayheading">
                    <h3 className="color" style={{ marginLeft: -5 }}><b><u>WAYS TO DONATE</u></b></h3>
                  </div>
                  <ul className="donationWaysList">
                    <Link to="/Donation">
                      <li>
                        <span className="donateListIcon">
                          <img src={donate} width="45px" />
                        </span>{" "}
                        Donate Online
                      </li>
                    </Link>
                    <li
                      onClick={() =>
                        this.setState({
                          doorStepForm: false,
                          bankDetails: true,
                          cashCollection: false,
                        })
                      }
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <span className="donateListIcon">
                        <img src={banktransfer} width="45px" />
                      </span>{" "}
                      Bank Transfer
                    </li>
                    <li
                      onClick={() =>
                        this.setState({
                          doorStepForm: true,
                          bankDetails: false,
                          cashCollection: false,
                        })
                      }
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <span className="donateListIcon">
                        <img src={doorstep} width="45px" />
                      </span>{" "}
                      Doorstep Collection
                    </li>
                    {/* <li>
                      <span className="donateListIcon">
                        <img src={house} width="45px" />
                      </span>{" "}
                      Easy Paisa
                    </li> */}
                    <li
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={() =>
                        this.setState({
                          doorStepForm: false,
                          bankDetails: false,
                          cashCollection: true,
                        })
                      }
                    >
                      <span className="donateListIcon">
                        <img src={collectioncenter} width="45px" />
                      </span>{" "}
                      Donation Collection Centers
                    </li>
                  </ul>
                </div>
                <div className="col-md-7">
                  <div className="displayheading">
                    <h3 className="color" ><b><u>OUR INTRODUCTION</u></b></h3>
                  </div>
                  <Reveal effect="fadeInUp">
                    <div className="homeIntro bg-white">
                      <p className="text-justify introText mt-3">
                        Alhamdo-llilah! By the grace of Allah, this organization
                        is serving the poor and the distressed people of our
                        society since 5th May 1999. We are a part of a society
                        where the majority of the people residing in villages
                        and towns are living below the poverty line and even
                        deprived of the basic necessities of life.
                      </p>
                      <iframe
                        className="video"
                        width="100%"
                        height="415"
                        src="https://www.youtube.com/embed/L1BmJyE4Os0"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="allowfullscreen"
                      ></iframe>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                {this.state.bankDetails ? (
                  <h5 class="modal-title" id="exampleModalLabel">
                    Bank Detail List
                  </h5>
                ) : this.state.doorStepForm ? (
                  <h5 class="modal-title" id="exampleModalLabel">
                    Doorstep Collection
                  </h5>
                ) : (
                      <h5 class="modal-title" id="exampleModalLabel">
                        Cash Collection Points
                      </h5>
                    )}
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {this.state.bankDetails ? <BankDetail /> : null}
                {this.state.doorStepForm ? <DoorStepCollection /> : null}
                {this.state.cashCollection ? <CashCollectionPoint /> : null}
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    homeIntro: state.root.homeIntro,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    homeIntroGet: () => {
      dispatch(homeIntroGet());
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(Introduction);
