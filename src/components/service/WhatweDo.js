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
      <option >Select to search category</option>
      <option >All</option>
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
            <div className="col-md-6 p-3">
              <Fade right>
              <a
      href='/smit' 
      >
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-desktop"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Saylani Mass Training</h3>
                      <p className='text-muted'>Best free IT Education In Pakistan</p>
                    </div>
                  </div>
                  </a>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade up>
              <a
      href='/welfare' 
      >
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-people-arrows"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Welfare</h3>
                      <p className='text-muted'>Help for Needy Person</p>
                    </div>
                  </div>
                  </a>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade up>
              <a
      href='/donation' 
      >
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-book-open"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Education</h3>
                      <p className='text-muted'>Schooling Education for Needy Person</p>
                    </div>
                  </div>
                  </a>
              </Fade>
            </div>

            <div className="col-md-6 p-3">
              <Fade left>
                <a
      href='/incubation' 
      >
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-school"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Incubation center</h3>
                      <p className='text-muted'>Your Idea or Startup is our Priority</p>
                    </div>
                  </div>
                  </a>
              </Fade>
            </div> 



            <div className="col-md-6 p-3">
              <Fade left>
                <a
      href='/donation' 
      >
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-donate"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Online Sadqa</h3>
                      <p className='text-muted'>Your Sadqa from anywhere online</p>
                    </div>
                  </div>
                  </a>
              </Fade>
            </div> 

            <div className="col-md-6 p-3">
              <Fade right>
                <a
      href='/medical' 
      >
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-hand-holding-medical"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Medical</h3>
                      <p className='text-muted'>Medical Help for Needy patient</p>
                    </div>
                  </div>
                  </a>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade right>
                <a
      href='/bloodbank' 
      >
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-tint"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Blood Bank</h3>
                      <p className='text-muted'>Blood Transfusion service in all over Pakistan</p>
                    </div>
                  </div>
                  </a>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade right>
              <a
      href='/onlineM' 
      >
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-mosque"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Saylani Online Masajid Registeration</h3>
                      <p className='text-muted'>Blood Transfusion service in all over Pakistan</p>
                    </div>
                  </div>
                  </a>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade right>
                <a
      href='/onlineQ' 
      >
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-quran"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Quran Pak Registeration</h3>
                      <p className='text-muted'>Blood Transfusion service in all over Pakistan</p>
                    </div>
                  </div>
                  </a>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
                <Fade up>
                <a
      href='/dastarkhwan' 
      >
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-utensils"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Dastarkhwan</h3>
                      <p className='text-muted'>Food for needy people and for wayfarer</p>
                    </div>
                  </div>
                  </a>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade up>
                <a
      href='/roplant' 
      >
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-faucet"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">RO Plant</h3>
                      <p className='text-muted'>Clean water for every people.</p>
                    </div>
                  </div>
                </a>
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

            <div className="col-md-6 p-3">
              <Fade left>
              <a
      href='/jobBank' 
      >
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-user-tie"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Job Bank</h3>
                      <p className='text-muted'>Remove unemployment in Pakistan</p>
                    </div>
                  </div>
                </a>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade up>
                <a
      href='/bookStore' 
      >
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-pen-nib"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Books</h3>
                      <p className='text-muted'>Islamic Books PDF</p>
                    </div>
                  </div>
                </a>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
              <Fade up>
              <a
      href='/istikhara' 
      >
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-pen-nib"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Online Istikhara</h3>
                      <p className='text-muted'>Online Istikhara </p>
                    </div>
                  </div>
                </a>
              </Fade>
            </div>
            <div className="col-md-6 p-3">
            <a
      href={HajjPdf} download 
      >
              <Fade right>
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-kaaba"></i>
                      </p>
                    </div>
                    <div className="col-md-8 p-5 text-left">
                      <h3 className="text-muted">Hajj Application</h3>
                      <p className='text-muted'>Collection of Hajj application</p>
                    </div>
                  </div>
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
        <div className="col-md-6 p-3">
              <Fade right>
              <a
      href='/quranApp'  
      >
                  <div className="row small">
                    <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                      <p style={{ fontSize: "3.5em" }}>
                        <i class="fas fa-quran"></i>
                      </p>
                    </div>
                    <div className="col-md-9 p-5 text-left">
                      <h3 className="text-muted">Quran App (Taftessh)</h3>
                      <p className='text-muted'>Quran Application Esaal-e-Sawaab</p>
                    </div>
                  </div>
                </a>
              </Fade>
            </div>



          </div>
        </div>
      </div>
    );
  }
}


