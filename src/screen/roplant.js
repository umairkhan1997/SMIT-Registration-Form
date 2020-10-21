import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import HomeContact from "../components/Home/HomeContact";
import ContactForm from "../components/contact/contactForm";
import Footer from "../components/Footer";
import water from "../images/water.jpeg";
import ROCounter from "../components/RO_Plant/RO_counter";
import roplant from '../images/ROPLANT.jpg'

export default class ROplant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader />
        <div style={{ backgroundImage: `url(${water})` }} className="back">
          <div style={{ backgroundColor: "rgba(0,0,0,.5)" }} className="p-5">
            <h1 className="p-3 text-white">Ro Plant</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-5 text-left">
              <h2>Saaf Pani</h2>
              <p>
                Saylani Welfare International Trust launched its ‘Saaf Pani
                (Clean Water) Project’ in 2005 to ensure effective, sustainable,
                and easily accessible supply of safe drinking water to the
                marginalized communities.
              </p>
            </div>
            <div className='col-md-6 p-5'>
                <img className='rounded shadow' src={roplant} width='100%' />
            </div>
          </div>
        </div>
        <ROCounter />
      </div>
    );
  }
}
