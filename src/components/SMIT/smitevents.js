import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./SmitStyle.css";
import Gallery from "react-grid-gallery";
import image from '../../images/sirAli.jpg';
import image2 from '../../images/event.png';
import image3 from '../../images/event4.jpg';

export default class SmitEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className='bg-light'>
                    <div className='container py-5'>
                        <div className='displayHeading'>
                            <h1 style={{ color: '#0569b4' }} className='font-weight-bold'>SMIT Events</ h1>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 py-3'>
                                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={image} class="d-block w-100" alt="..." />
                                            <div style={{ backgroundColor: 'rgba(0,0,0,.4)' }} class="carousel-caption rounded shadow d-none d-md-block">
                                                <h4>Workshop</h4>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={image2} class="d-block w-100" alt="..." />
                                            <div style={{ backgroundColor: 'rgba(0,0,0,.4)' }} class="carousel-caption rounded shadow d-none d-md-block">
                                                <h4>1000 of Students Appeared</h4>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={image3} class="d-block w-100" alt="..." />
                                            <div style={{ backgroundColor: 'rgba(0,0,0,.4)' }} class="carousel-caption rounded shadow d-none d-md-block">
                                                <h4>Freelancing Workshop</h4>
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
                            <div className='col-md-4 py-3'>
                                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={image} class="d-block w-100" alt="..." />
                                            <div style={{ backgroundColor: 'rgba(0,0,0,.4)' }} class="carousel-caption rounded shadow d-none d-md-block">
                                                <h4>Workshop</h4>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={image2} class="d-block w-100" alt="..." />
                                            <div style={{ backgroundColor: 'rgba(0,0,0,.4)' }} class="carousel-caption rounded shadow d-none d-md-block">
                                                <h4>1000 of Students Appeared</h4>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={image3} class="d-block w-100" alt="..." />
                                            <div style={{ backgroundColor: 'rgba(0,0,0,.4)' }} class="carousel-caption rounded shadow d-none d-md-block">
                                                <h4>Freelancing Workshop</h4>
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
                            <div className='col-md-4 py-3'>
                                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={image} class="d-block w-100" alt="..." />
                                            <div style={{ backgroundColor: 'rgba(0,0,0,.4)' }} class="carousel-caption rounded shadow d-none d-md-block">
                                                <h4>Workshop</h4>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={image2} class="d-block w-100" alt="..." />
                                            <div style={{ backgroundColor: 'rgba(0,0,0,.4)' }} class="carousel-caption rounded shadow d-none d-md-block">
                                                <h4>1000 of Students Appeared</h4>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={image3} class="d-block w-100" alt="..." />
                                            <div style={{ backgroundColor: 'rgba(0,0,0,.4)' }} class="carousel-caption rounded shadow d-none d-md-block">
                                                <h4>Freelancing Workshop</h4>
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
                            <div className='col-md-4 py-3'>
                                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={image} class="d-block w-100" alt="..." />
                                            <div style={{ backgroundColor: 'rgba(0,0,0,.4)' }} class="carousel-caption rounded shadow d-none d-md-block">
                                                <h4>Workshop </h4>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={image2} class="d-block w-100" alt="..." />
                                            <div style={{ backgroundColor: 'rgba(0,0,0,.4)' }} class="carousel-caption rounded shadow d-none d-md-block">
                                                <h4>1000 of Students Appeared</h4>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={image3} class="d-block w-100" alt="..." />
                                            <div style={{ backgroundColor: 'rgba(0,0,0,.4)' }} class="carousel-caption rounded shadow d-none d-md-block">
                                                <h4>Freelancing Workshop</h4>
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
                            <div className='col-md-4 py-3'>
                                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={image} class="d-block w-100" alt="..." />
                                            <div style={{ backgroundColor: 'rgba(0,0,0,.4)' }} class="carousel-caption rounded shadow d-none d-md-block">
                                                <h4>Workshop </h4>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={image2} class="d-block w-100" alt="..." />
                                            <div style={{ backgroundColor: 'rgba(0,0,0,.4)' }} class="carousel-caption rounded shadow d-none d-md-block">
                                                <h4>1000 of Students Appeared</h4>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={image3} class="d-block w-100" alt="..." />
                                            <div style={{ backgroundColor: 'rgba(0,0,0,.4)' }} class="carousel-caption rounded shadow d-none d-md-block">
                                                <h4>Freelancing Workshop</h4>
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
                            <div className='col-md-4 py-3'>
                                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={image} class="d-block w-100" alt="..." />
                                            <div style={{ backgroundColor: 'rgba(0,0,0,.4)' }} class="carousel-caption rounded shadow d-none d-md-block">
                                                <h4>Workshop </h4>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={image2} class="d-block w-100" alt="..." />
                                            <div style={{ backgroundColor: 'rgba(0,0,0,.4)' }} class="carousel-caption rounded shadow d-none d-md-block">
                                                <h4>1000 of Students Appeared</h4>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={image3} class="d-block w-100" alt="..." />
                                            <div style={{ backgroundColor: 'rgba(0,0,0,.4)' }} class="carousel-caption rounded shadow d-none d-md-block">
                                                <h4>Freelancing Workshop</h4>
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
        )
    }
}