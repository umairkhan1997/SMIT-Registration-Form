import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import './Home.css'
import logo from "../../images/logo.png";
import $ from 'jquery';
import { Zoom } from "react-slideshow-image";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/rashan2.jpg";
import slide3 from "../../images/back.jpg";
const images = [slide1, slide2, slide3];
export default class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (

<div>
 <header className="container-fluid bg-transparent" style={{
}}
  >
    <div className="container">
    <div className="row d-flex justify-content-between">
        <div className=""  >
          <div 
          className=""
 
          >
            <a href="/">
              <img src={logo} width="220px" />
            </a>
          </div>

        </div>

        <div className=" "

        >
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light " style={{color:' black',fontSize:20}}>
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
                <ul className="navbar-nav mr-auto" style={{color:' black',fontSize:20}}>
                  <li className="nav-item active" >
                    <a className="nav-link" href="/" style={{color:' black',fontSize:20}}>
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="services"
                      tabindex="-1"
                      aria-disabled="true"
                      
                    style={{color:' black',fontSize:'.9em'}}>
                      Services
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    style={{color:' black',fontSize:20}}>
                      Future Project
                    </a>
                    <div
                      className="dropdown-menu headingList"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#"style={{color:' black',fontSize:20}}>
                        Action
                      </a>
                      <a className="dropdown-item" href="#"style={{color:' black',fontSize:20}}>
                        Another action
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#"style={{color:' black',fontSize:20}}>
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
                    style={{color:' black',fontSize:20}}>
                      Media
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    style={{color:' black',fontSize:20,}}>
                      Contact
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                     className="nav-link"
                     href="#"
                     tabindex="-1"
                     aria-disabled="true"
                    style={{color:' white',fontSize:20,backgroundColor:'black',borderRadius:10}}>
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


<div style={{}}>
      <div className="slide-container mainSlider" 
      >
        <Zoom scale={0.4} >
          {images.map((each, index) => (
            <img key={index} className="SliderImage" style={{ width: "100%",height:window.innerHeight/1.15 }} src={each} />
            ))}
        </Zoom>
      </div>
            </div>
            
             <div className="d-flex justify-content-center">
   <button type="button" className="btn  donateBtn3" >Donate Now</button>
   <button type="button" className="btn  donateBtn" >UK Donor</button>
 </div>
 
</div>

        
        );
    }
  }
  