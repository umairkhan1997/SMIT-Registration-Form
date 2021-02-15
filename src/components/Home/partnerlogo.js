import React from "react";

export default class PartnerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
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
                      <img
                        width="100%"
                        src="https://iconape.com/wp-content/png_logo_vector/sindh-police-pakistan-logo.png"
                        alt=""
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        width="100%"
                        src="https://iconape.com/wp-content/png_logo_vector/sindh-police-pakistan-logo.png"
                        alt=""
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        width="100%"
                        src="https://iconape.com/wp-content/png_logo_vector/sindh-police-pakistan-logo.png"
                        alt=""
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        width="100%"
                        src="https://iconape.com/wp-content/png_logo_vector/sindh-police-pakistan-logo.png"
                        alt=""
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        width="100%"
                        src="https://iconape.com/wp-content/png_logo_vector/sindh-police-pakistan-logo.png"
                        alt=""
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        width="100%"
                        src="https://iconape.com/wp-content/png_logo_vector/sindh-police-pakistan-logo.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="carousel-item text-center p-4">
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        width="100%"
                        src="https://iconape.com/wp-content/png_logo_vector/sindh-police-pakistan-logo.png"
                        alt=""
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        width="100%"
                        src="https://iconape.com/wp-content/png_logo_vector/sindh-police-pakistan-logo.png"
                        alt=""
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        width="100%"
                        src="https://iconape.com/wp-content/png_logo_vector/sindh-police-pakistan-logo.png"
                        alt=""
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        width="100%"
                        src="https://iconape.com/wp-content/png_logo_vector/sindh-police-pakistan-logo.png"
                        alt=""
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        width="100%"
                        src="https://iconape.com/wp-content/png_logo_vector/sindh-police-pakistan-logo.png"
                        alt=""
                      />
                    </div>
                    <div className="col-md-2">
                      <img
                        width="100%"
                        src="https://iconape.com/wp-content/png_logo_vector/sindh-police-pakistan-logo.png"
                        alt=""
                      />
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
