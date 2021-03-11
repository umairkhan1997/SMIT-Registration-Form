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
              <div className="row">
                <div className="col-md-2 text-center">
                  <div className="displayheading">
                    <h2>Our Impact</h2>
                  </div>
                </div>
                <hr />
                <div className="col-md-10">
                  <div>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-2 mx-1 col-sm-6 col-xs-6">
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

            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="displayheading">
                    <h3>Ways To Donate</h3>
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
                    <h3>Our Introduction</h3>
                  </div>
                  <Reveal effect="fadeInUp">
                    <div className="homeIntro bg-white">
                      <p className="text-justify introText">
                        Alhamdo-llilah! By the grace of Allah, this organization
                        is serving the poor and the distressed people of our
                        society since 5th May 1999. We are a part of a society
                        where the majority of the people residing in villages
                        and towns are living below the poverty line and even
                        deprived of the basic necessities of life.
                      </p>
                      <p>
                        Now let us take a look at the life of the people living
                        in cities, where unfortunately living conditions are not
                        much different. If we examine their family size, we find
                        a very painful situation, where in a small rented house
                        the husband and the wife with their four children
                        survive with a very low earning.
                      </p>
                      <p className="text-justify introText">
                        In today’s world where inflation is at its peak, it is
                        impossible for them to pay for their electricity,
                        children’s education and any medical treatment of any
                        family member.
                      </p>
                      <p className="text-justify introText">
                        How will the head of the family be able to provide for
                        the needs of his children?? The result: he takes loans.
                        He is not to be blamed because he is responsible to
                        provide three meals a day for his family and he is
                        forced to use the wrong means to fulfill his family’s
                        needs.
                      </p>
                      <p className="text-justify introText">
                        Undoubtedly, the poor and the needy are helpless. Our
                        organization spends time with them and is fully aware of
                        their problems and weaknesses. Therefore we want to help
                        them in such a way that all financial aid is free from
                        interest. In view of all the difficulties faced by the
                        poor, Saylani Welfare International Trust has organized
                        31 different sectors to sort out the problems of the
                        ones who are in need. These departments are efficiently
                        working for the cause of the society.
                      </p>
                      <p className="text-justify introText">
                        By the Grace of the Almighty Allah, it can be proudly
                        said that this organization has become a back-bone of
                        the poor society and provides help after a complete
                        inquiry survey. This organization receives aid from
                        different parts of the world. Each and every penny is
                        spent after a strict inquiry and a utilization report is
                        delivered to those who send this aid to us. In this
                        report, addresses of the people to whom these donations
                        have been given, is mentioned with details. This shows
                        that your money has been given to the right people. You
                        can also contact these people with the help of their
                        addresses and get a confirmation whether the
                        organization has provided them with the aid and if they
                        are really the ones who deserve. In a way, your sadaqa
                        or zakaat is being spent with your own hands. Our aim is
                        to inquire and survey to find the ones who need us.
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
