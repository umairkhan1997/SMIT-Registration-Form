import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./Home.css";
import logo from "../../images/logo.png";
import Fade from "react-reveal";

export default class HomeContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className='container'>
        <h1 className='Heading'>Over Branches</h1>
        </div>
      <div
        style={{
          backgroundColor: "#d8dfe6",
        }}
        className="bg-image"
      >
        <div class="container-fluid">
        
            <div
              id="carouselContent"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner" role="listbox">
                <div className='container'>
                <div class="carousel-item active text-center p-4">
                  <div className="row text-left">
                    <Fade left>
                      <div className="col-md-4 p-3 border-bottom">
                        <p
                          data-toggle="modal"
                          data-target="#exampleModalLong"
                          className="location"
                        >
                          Head Office
                        </p>
                        <p className="text-muted">
                          <i class="fas fa-map-marker-alt"></i> A-25,
                          Bahadurabad Chowrangi Karachi, Pakistan
                        </p>
                        <div>
                          <p>
                            <i class="fas fa-phone-alt"></i>{" "}
                            <a href="tel:111729526">UAN: 111-729-526</a>
                          </p>
                        </div>
                        <div>
                          <p>
                            <i class="fas fa-mobile"></i>{" "}
                            <a href="tel:923111729526">CELL: 92-311-1729526</a>
                          </p>
                        </div>
                        <div>
                          <p>
                            <i class="fas fa-globe"></i>{" "}
                            <a href="tel:+0092-2134130786-90">
                              (+0092-213) 4130786-90
                            </a>
                          </p>
                        </div>
                      </div>
                    </Fade>
                    <Fade up>
                      <div className="col-md-4 p-3 border-bottom">
                        <p
                          data-toggle="modal"
                          data-target="#exampleModalLong"
                          className="location"
                        >
                          USA Office
                        </p>
                        <p className="text-muted">
                          <i class="fas fa-map-marker-alt"></i> A-25,
                          Bahadurabad Chowrangi Karachi, Pakistan
                        </p>
                        <div>
                          <p>
                            <i class="fas fa-phone-alt"></i>{" "}
                            <a href="tel:+1716941 7792">UAN: +1(716)941 7792</a>
                          </p>
                        </div>
                      </div>
                    </Fade>
                    <Fade right>
                      <div className="col-md-4 p-3 border-bottom">
                        <p
                          data-toggle="modal"
                          data-target="#exampleModalLong"
                          className="location"
                        >
                          UK Office
                        </p>
                        <p className="text-muted">
                          <i class="fas fa-map-marker-alt"></i> A-25,
                          Bahadurabad Chowrangi Karachi, Pakistan
                        </p>
                        <div>
                          <p>
                            <i class="fas fa-phone-alt"></i>{" "}
                            <a href="tel:+44115 970 6256">
                              UAN: (+44)115 970 6256
                            </a>
                          </p>
                        </div>
                      </div>
                    </Fade>
                    <Fade left>
                      <div className="col-md-4 p-3 border-bottom">
                        <p
                          data-toggle="modal"
                          data-target="#exampleModalLong"
                          className="location"
                        >
                          Faisalabad Office
                        </p>
                        <p className="text-muted">
                          <i class="fas fa-map-marker-alt"></i> A-25,
                          Bahadurabad Chowrangi Karachi, Pakistan
                        </p>
                        <div>
                          <p>
                            <i class="fas fa-phone-alt"></i>{" "}
                            <a href="tel:+44115 970 6256">
                              UAN: (+44)115 970 6256
                            </a>
                          </p>
                        </div>
                      </div>
                    </Fade>
                    <Fade up>
                      <div className="col-md-4 p-3 border-bottom">
                        <p
                          data-toggle="modal"
                          data-target="#exampleModalLong"
                          className="location"
                        >
                          Hyderabad Office
                        </p>
                        <p className="text-muted">
                          <i class="fas fa-map-marker-alt"></i> A-25,
                          Bahadurabad Chowrangi Karachi, Pakistan
                        </p>
                        <div>
                          <p>
                            <i class="fas fa-phone-alt"></i>{" "}
                            <a href="tel:+44115 970 6256">
                              UAN: (+44)115 970 6256
                            </a>
                          </p>
                        </div>
                      </div>
                    </Fade>
                    <Fade right>
                      <div className="col-md-4 p-3 border-bottom">
                        <p
                          data-toggle="modal"
                          data-target="#exampleModalLong"
                          className="location"
                        >
                          Peshawar Office
                        </p>
                        <p className="text-muted">
                          <i class="fas fa-map-marker-alt"></i> A-25,
                          Bahadurabad Chowrangi Karachi, Pakistan
                        </p>
                        <div>
                          <p>
                            <i class="fas fa-phone-alt"></i>{" "}
                            <a href="tel:+44115 970 6256">
                              UAN: (+44)115 970 6256
                            </a>
                          </p>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
                <div class="carousel-item text-center p-4">
                  <div className="row">
                    <div className="row text-left">
                      <Fade left>
                        <div className="col-md-4 p-3 border-bottom">
                          <p
                            data-toggle="modal"
                            data-target="#exampleModalLong"
                            className="location"
                          >
                            Head Office
                          </p>
                          <p className="text-muted">
                            <i class="fas fa-map-marker-alt"></i> A-25,
                            Bahadurabad Chowrangi Karachi, Pakistan
                          </p>
                          <div>
                            <p>
                              <i class="fas fa-phone-alt"></i>{" "}
                              <a href="tel:111729526">UAN: 111-729-526</a>
                            </p>
                          </div>
                          <div>
                            <p>
                              <i class="fas fa-mobile"></i>{" "}
                              <a href="tel:923111729526">
                                CELL: 92-311-1729526
                              </a>
                            </p>
                          </div>
                          <div>
                            <p>
                              <i class="fas fa-globe"></i>{" "}
                              <a href="tel:+0092-2134130786-90">
                                (+0092-213) 4130786-90
                              </a>
                            </p>
                          </div>
                        </div>
                      </Fade>
                      <Fade up>
                        <div className="col-md-4 p-3 border-bottom">
                          <p
                            data-toggle="modal"
                            data-target="#exampleModalLong"
                            className="location"
                          >
                            USA Office
                          </p>
                          <p className="text-muted">
                            <i class="fas fa-map-marker-alt"></i> A-25,
                            Bahadurabad Chowrangi Karachi, Pakistan
                          </p>
                          <div>
                            <p>
                              <i class="fas fa-phone-alt"></i>{" "}
                              <a href="tel:+1716941 7792">
                                UAN: +1(716)941 7792
                              </a>
                            </p>
                          </div>
                        </div>
                      </Fade>
                      <Fade right>
                        <div className="col-md-4 p-3 border-bottom">
                          <p
                            data-toggle="modal"
                            data-target="#exampleModalLong"
                            className="location"
                          >
                            UK Office
                          </p>
                          <p className="text-muted">
                            <i class="fas fa-map-marker-alt"></i> A-25,
                            Bahadurabad Chowrangi Karachi, Pakistan
                          </p>
                          <div>
                            <p>
                              <i class="fas fa-phone-alt"></i>{" "}
                              <a href="tel:+44115 970 6256">
                                UAN: (+44)115 970 6256
                              </a>
                            </p>
                          </div>
                        </div>
                      </Fade>
                      <Fade left>
                        <div className="col-md-4 p-3 border-bottom">
                          <p
                            data-toggle="modal"
                            data-target="#exampleModalLong"
                            className="location"
                          >
                            Faisalabad Office
                          </p>
                          <p className="text-muted">
                            <i class="fas fa-map-marker-alt"></i> A-25,
                            Bahadurabad Chowrangi Karachi, Pakistan
                          </p>
                          <div>
                            <p>
                              <i class="fas fa-phone-alt"></i>{" "}
                              <a href="tel:+44115 970 6256">
                                UAN: (+44)115 970 6256
                              </a>
                            </p>
                          </div>
                        </div>
                      </Fade>
                      <Fade up>
                        <div className="col-md-4 p-3 border-bottom">
                          <p
                            data-toggle="modal"
                            data-target="#exampleModalLong"
                            className="location"
                          >
                            Hyderabad Office
                          </p>
                          <p className="text-muted">
                            <i class="fas fa-map-marker-alt"></i> A-25,
                            Bahadurabad Chowrangi Karachi, Pakistan
                          </p>
                          <div>
                            <p>
                              <i class="fas fa-phone-alt"></i>{" "}
                              <a href="tel:+44115 970 6256">
                                UAN: (+44)115 970 6256
                              </a>
                            </p>
                          </div>
                        </div>
                      </Fade>
                      <Fade right>
                        <div className="col-md-4 p-3 border-bottom">
                          <p
                            data-toggle="modal"
                            data-target="#exampleModalLong"
                            className="location"
                          >
                            Peshawar Office
                          </p>
                          <p className="text-muted">
                            <i class="fas fa-map-marker-alt"></i> A-25,
                            Bahadurabad Chowrangi Karachi, Pakistan
                          </p>
                          <div>
                            <p>
                              <i class="fas fa-phone-alt"></i>{" "}
                              <a href="tel:+44115 970 6256">
                                UAN: (+44)115 970 6256
                              </a>
                            </p>
                          </div>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <a
                class="carousel-control-prev carlStl"
                href="#carouselContent"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next carlStl"
                href="#carouselContent"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
         
        </div>

        <div
          class="modal fade"
          id="exampleModalLong"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Google Location
                </h5>
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
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.693920233648!2d68.336391514332!3d25.415054229065674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70ab49a79505%3A0xf74d29ea10c1caaf!2sSaylani%20Welfare%20International%20Trust!5e0!3m2!1sen!2s!4v1602315556732!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
