import React from "react";
import logo1 from "../../images/partnerlogos/pso.png";
import logo2 from "../../images/partnerlogos/ptcl.png";
import logo3 from "../../images/partnerlogos/foodpanda.png";
import logo4 from "../../images/partnerlogos/careem.png";
import logo5 from "../../images/partnerlogos/byco.png";
import logo6 from "../../images/partnerlogos/bankislami.png";
import logo7 from "../../images/partnerlogos/aspin.png";
import logo8 from "../../images/partnerlogos/toyota.png";
import logo9 from "../../images/partnerlogos/ubl.png";
import logo10 from "../../images/partnerlogos/uniliver.png";
import logo11 from "../../images/partnerlogos/universal.png";
import logo12 from "../../images/partnerlogos/soorty.png";
import logo13 from "../../images/partnerlogos/kelectric.png";
import logo14 from "../../images/partnerlogos/nestle.png";
import logo15 from "../../images/partnerlogos/novo.png";
import logo16 from "../../images/partnerlogos/tcs.png";
import logo17 from "../../images/partnerlogos/daraz.png";
import logo18 from "../../images/partnerlogos/swl.png";

export default class PartnerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="saylaniPartners">
        <div className="py-5">
          <div class="container">
            <div
              id="carouselContent"
              class="carousel slide"
              data-ride="carousel"
            >
              <button
                href="#carouselContent"
                role="button"
                data-slide="prev"
                className="partnerBtn rounded-pill"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </button>
              <button
                className="partnerBtn rounded-pill"
                href="#carouselContent"
                role="button"
                data-slide="next"
              >
                {" "}
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </button>
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active text-center p-4">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="logoDiv">
                        <img
                          width="100%"
                          src="https://iconape.com/wp-content/png_logo_vector/sindh-police-pakistan-logo.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="logoDiv">
                        <img width="100%" src={logo1} alt="" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="logoDiv">
                        <img width="100%" src={logo2} alt="" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="logoDiv">
                        <img width="100%" src={logo3} alt="" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="logoDiv">
                        <img width="100%" src={logo4} alt="" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="logoDiv">
                        <img width="100%" src={logo5} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item text-center p-4">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="logoDiv">
                        <img width="100%" src={logo6} alt="" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="logoDiv">
                        <img width="100%" src={logo7} alt="" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="logoDiv">
                        <img width="100%" src={logo8} alt="" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="logoDiv">
                        <img width="100%" src={logo9} alt="" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="logoDiv">
                        <img width="100%" src={logo10} alt="" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="logoDiv">
                        <img width="100%" src={logo11} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item text-center p-4">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="logoDiv">
                        <img width="100%" src={logo12} alt="" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="logoDiv">
                        <img width="100%" src={logo13} alt="" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="logoDiv">
                        <img width="100%" src={logo14} alt="" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="logoDiv">
                        <img width="100%" src={logo15} alt="" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="logoDiv">
                        <img width="100%" src={logo16} alt="" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="logoDiv">
                        <img width="100%" src={logo17} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
