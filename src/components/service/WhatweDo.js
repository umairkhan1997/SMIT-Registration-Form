import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./service.css";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import Fade from "react-reveal";
import HajjPdf from '../HajjPdf/HAJJ.pdf' 
const history = createBrowserHistory();
export default class WhatweDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goto = () => {
    history.push("/welfare");
  };
  render() {
    return (
      <div className="container-fluid" style={{backgroundColor:'white'}}>

<div className="container" >
<p className="text-center font-weight-bold m-5" style={{fontSize:26,color:'dodgerblue'}}>Saylani Welfare International Trust</p>
      <select className="form-control text-muted mb-4" id="exampleFormControlSelect1" style={{height:50,marginTop:-10,backgroundColor:'#e9ebec'}} >
      <option >Saylani Mass IT Training</option>
      <option >Education</option>
      <option >Isthikhara</option>
      <option >Welfare</option>
      <option >Medical</option>
      <option>Blood Bank</option>
      <option>Job Bank</option>
      <option>Hajj Application</option>
    </select>
    </div>

        <div className="container">
          {/* <div className="p-3">
            <h1 className="Heading">What We Do</h1>
          </div> */}
          <div className="row">
            <div className="col-md-4 p-3">
              <Fade left>
                <Link to="/smit">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-laptop-code"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Saylani Mass IT</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
              <Fade up>
                <Link to="/welfare">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-people-arrows"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Welfare</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
              <Fade up>
                <Link to="">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-book-open"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Eductaion</p>
                  </div>
                </Link>
              </Fade>
            </div>
            {/* <div className="col-md-4 p-3">
              <Fade left>
                <Link to="/welfare">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-donate"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Online Sadqa</p>
                  </div>
                </Link>
              </Fade>
            </div> */}

            <div className="col-md-4 p-3">
              <Fade right>
                <Link to="/medical">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-hand-holding-medical"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Medical</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
              <Fade right>
                <Link to="/bloodbank">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                    <i class="fas fa-tint"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Blood bank</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
              <Fade up>
                <Link to="incubation">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-school"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Incubation center</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
              <Fade up>
                <Link to="/bookStore">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-store-alt"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Books Store</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
              <Fade left>
                <Link to="/OnlineM">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-mosque"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Saylani Online Masjid</p>
                  </div>
                </Link>
              </Fade>
            </div> 
            <div className="col-md-4 p-3">
              <Fade left>
                <Link to="/OnlineQ">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-quran"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Quran Pak Registeration</p>
                  </div>
                </Link>
              </Fade>
            </div> 
            <div className="col-md-4 p-3">
                <Fade up>
                <Link to="/dastarkhwan">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-utensils"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Dasterkhwan</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
              <Fade up>
                <Link to="/roplant">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-faucet"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>RO Plant</p>
                  </div>
                </Link>
              </Fade>
            </div>
            {/* <div className="col-md-4 p-3">
              <Fade right>
                <Link to="">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-book-open"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Education</p>
                  </div>
                </Link>
              </Fade>
            </div> */}

            <div className="col-md-4 p-3">
              <Fade left>
                <Link to="JobBank">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-user-tie"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Job Bank</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
              <Fade up>
                <Link to="istikhara">
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-pen-nib"></i>
                    </p>
                    <p style={{ fontSize: "1.5em" }}>Online Istikhara</p>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="col-md-4 p-3">
            <a
      href={HajjPdf} download 
      >
              <Fade right>
                {/* <Link to=""  */}
                {/* // href={require("../HajjPdf/HAJJ.pdf")} download='myFile' */}
                {/* > */}
                  <div className="small">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-kaaba"></i>
                    </p>
                    <p   href={HajjPdf} download style={{ fontSize: "1.5em" }} >Hajj Application</p>
                    {/* <a
      href={HajjPdf} download style={{ fontSize: "1.5em",color:'white' }}
      >Hajj Application
 </a> */}

                  </div>
                {/* </Link> */}
              </Fade>
              </a> 
            </div>

            {/* <p>//</p>
<p>Access to clean water is a right that none of us should be forced to forego. Despite an //abundant endowment Pakistan is one of the most water-stressed countries in the world. //Around 16 million people in Pakistan and trillions more around the world do not have //access to clean water, with countless being forced to drink unsafe water, die thirsty or //suffer water borne diseases.</p>
<p>//</p>
<p>Clean water has the power to change lives. It is the road to building a better future with //fewer water resulting diseases, healthier communities and richer lives in terms of quality. //Saylani Welfare International Trust launched its &lsquo;Saaf Pani Project&rsquo; to ensure //effective, sustainable, and easily accessible supply of safe drinking water to the //marginalized communities. Our aim is that no person should live without access to this //most basic human need. This is achieved by drilling water-wells, installing RO (Reverse //Osmosis) plants, and installing water chillers in deserving areas.</p>
<p>//</p>
<p>So far over 100 RO plants have been installed, about 150 water wells have been dug //and approximately 1,000 water chillers have been installed by Saylani throughout Pakistan. //Our aim is to install 100 new RO plants across the nation.</p>
<p>//</p>
<p>We have also signed MOU with Sindh Rangers, Sindh Police, Mayor Karachi and //Commissioner Karachi for association in installation of RO plants.</p>
<p>//</p>
<p>&nbsp;</p> */}




          </div>
        </div>
      </div>
    );
  }
}


