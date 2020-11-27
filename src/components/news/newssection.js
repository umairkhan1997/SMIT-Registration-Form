import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./news.css";
// import FbImageLibrary from "react-fb-image-grid";
import Gallery from "react-grid-gallery";
import Slide from '../../images/govern.jpg'
import Footer from "../Footer";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default class NewsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const displayimages = [
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-1.jpg?alt=media&token=93d7ebcf-d564-438f-871e-1c4fb6b79702",
        thumbnail:
          "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-1.jpg?alt=media&token=93d7ebcf-d564-438f-871e-1c4fb6b79702",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Basheer Farooqui Meet With GOVT Officer",
      },
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-5.jpg?alt=media&token=24948ded-1752-4d7d-b14e-ae3e28e98e2d",
        thumbnail:
          "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-5.jpg?alt=media&token=24948ded-1752-4d7d-b14e-ae3e28e98e2d",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Basheer Farooqui Meet With GOVT Officer",
      },
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-2.jpg?alt=media&token=12315048-2790-4f85-831f-4721a04b6600",
        thumbnail:
          "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-2.jpg?alt=media&token=12315048-2790-4f85-831f-4721a04b6600",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Basheer Farooqui Meet With GOVT Officer",
      },
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-5.jpg?alt=media&token=24948ded-1752-4d7d-b14e-ae3e28e98e2d",
        thumbnail:
          "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-5.jpg?alt=media&token=24948ded-1752-4d7d-b14e-ae3e28e98e2d",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Basheer Farooqui Meet With GOVT Officer",
      },
    ];
    return (
      <div>
        <div className='row'>
          <div style={{ backgroundColor: 'rgb(240, 240, 240)' }} className='col-md-3'>
            <div className='mt-5'>

            </div>
            {/* <Calendar calendarType='ISO 8601' showNeighboringMonth={true} /> */}
          </div>
          <div className='col-md-9'>
            <div style={{ backgroundColor: '#0267b3' }} className='mt-5'>
              <div className='text-right'>
                <div className='shortCount'>
                  Number Of Patients Treated
                  786
        </div>
                <div className='shortCount'>
                  Number Of Patients Treated
                  786
        </div>
                <div className='shortCount'>
                  Number Of Patients Treated
                  786
        </div>
              </div>
            </div>
            <div className='container'>
              <div className='row p-5'>
                <div className='col-md-6'>
                  <div className="date">
                    <p style={{ fontSize: "2em" }}>05</p>
                    <p>Oct 2020</p>
                  </div>
                  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={Slide} class="d-block w-100" alt="..." />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }} class="carousel-caption d-none d-md-block">
                          <h5>Basheer Farooqui Meet With GOVT Officer</h5>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src={Slide} class="d-block w-100" alt="..." />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }} class="carousel-caption d-none d-md-block">
                          <h5>Basheer Farooqui Meet With GOVT Officer</h5>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src={Slide} class="d-block w-100" alt="..." />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }} class="carousel-caption d-none d-md-block">
                          <h5>Basheer Farooqui Meet With GOVT Officer</h5>
                        </div>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div className='col-md-6'>
                  <h2>Basheer Farooqui Meet With GOVT Officer</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>

              <div className="row my-4">

                <div className='col-md-6 pb-3'>
                  <div className="date">
                    <p style={{ fontSize: "2em" }}>05</p>
                    <p>Oct 2020</p>
                  </div>
                  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={Slide} class="d-block w-100" alt="..." />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }} class="carousel-caption d-none d-md-block">
                          <h5>Basheer Farooqui Meet With GOVT Officer</h5>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src={Slide} class="d-block w-100" alt="..." />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }} class="carousel-caption d-none d-md-block">
                          <h5>Basheer Farooqui Meet With GOVT Officer</h5>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src={Slide} class="d-block w-100" alt="..." />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }} class="carousel-caption d-none d-md-block">
                          <h5>Basheer Farooqui Meet With GOVT Officer</h5>
                        </div>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div className='col-md-6 pb-3'>
                  <div className="date">
                    <p style={{ fontSize: "2em" }}>05</p>
                    <p>Oct 2020</p>
                  </div>
                  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={Slide} class="d-block w-100" alt="..." />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }} class="carousel-caption d-none d-md-block">
                          <h5>Basheer Farooqui Meet With GOVT Officer</h5>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src={Slide} class="d-block w-100" alt="..." />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }} class="carousel-caption d-none d-md-block">
                          <h5>Basheer Farooqui Meet With GOVT Officer</h5>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src={Slide} class="d-block w-100" alt="..." />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }} class="carousel-caption d-none d-md-block">
                          <h5>Basheer Farooqui Meet With GOVT Officer</h5>
                        </div>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div className='col-md-6 pb-3'>
                  <div className="date">
                    <p style={{ fontSize: "2em" }}>05</p>
                    <p>Oct 2020</p>
                  </div>
                  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={Slide} class="d-block w-100" alt="..." />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }} class="carousel-caption d-none d-md-block">
                          <h5>Basheer Farooqui Meet With GOVT Officer</h5>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src={Slide} class="d-block w-100" alt="..." />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }} class="carousel-caption d-none d-md-block">
                          <h5>Basheer Farooqui Meet With GOVT Officer</h5>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src={Slide} class="d-block w-100" alt="..." />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }} class="carousel-caption d-none d-md-block">
                          <h5>Basheer Farooqui Meet With GOVT Officer</h5>
                        </div>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div className='col-md-6 pb-3'>
                  <div className="date">
                    <p style={{ fontSize: "2em" }}>05</p>
                    <p>Oct 2020</p>
                  </div>
                  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={Slide} class="d-block w-100" alt="..." />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }} class="carousel-caption d-none d-md-block">
                          <h5>Basheer Farooqui Meet With GOVT Officer</h5>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src={Slide} class="d-block w-100" alt="..." />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }} class="carousel-caption d-none d-md-block">
                          <h5>Basheer Farooqui Meet With GOVT Officer</h5>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src={Slide} class="d-block w-100" alt="..." />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }} class="carousel-caption d-none d-md-block">
                          <h5>Basheer Farooqui Meet With GOVT Officer</h5>
                        </div>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>



              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
