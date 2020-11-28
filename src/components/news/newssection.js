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

    return (
      <div>
        <div className='row'>
          <div style={{ backgroundColor: 'rgb(240, 240, 240)' }} className='col-md-3'>
            <div style={{ backgroundColor: '#0267b3',padding: '27px' }} className='mt-5'>
              <h1 className='py-4 text-white'>Saylani NEWS</h1>
            </div>
            {/* <Calendar calendarType='ISO 8601' showNeighboringMonth={true} /> */}
          </div>
          <div className='col-md-9'>
            <div style={{ backgroundColor: '#0267b3' }} className='mt-5'>
              <div className='text-right'>
                <div className='shortCount'>
                  Number Of Patients Treated <br />
                  <span className='large'>53749</span>
                </div>
                <div className='shortCount'>
                  Number Of Students Trained <br />
                  <span className='large'>125000</span>
                </div>
                <div className='shortCount'>
                  Number Of Family Welfare <br />
                  <span className='large'>8500</span> 
                </div>
                <div className='shortCount'>
                  Number Of Students educate <br />
                  <span className='large'>180000</span> 
                </div>
                <div className='shortCount'>
                  Number Of Dasterkhwan opened<br />
                  <span className='large'>180000</span> 
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
