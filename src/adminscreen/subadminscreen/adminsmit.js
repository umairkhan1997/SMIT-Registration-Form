import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import "../admin.css";
import logo from "../../images/logo.png";
import aliMughal from "../../images/aliMughal.png";
import ziakhan from "../../images/ziaKhan.png";
import course from "../../images/course1.jpeg";

export default class SMITAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="bg-light">
          <div className="container">
            <div className="row p-4">
              <div className="col-md-3">
                <img width="100%" src={logo} />
              </div>
              <div className="col-md-8 border-left text-left p-3">
                <h2>SMIT Admin Panel</h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="container px-5 py-3">
              <h2 className="text-left">Faculty</h2>
            </div>
            <div className="container p-5">
              <div className="row">
                <div className="col-md-2 py-3">
                  <div className="content">
                    <div className="delete">
                      <button>
                        <i class="fas fa-pen"></i>
                      </button>
                    </div>
                    <img className="shadow" src={ziakhan} width="100%" />
                  </div>
                </div>
                <div className="col-md-9 py-3">
                  <div className="content text-left">
                    <div className="delete">
                      <button>
                        <i class="fas fa-pen"></i>
                      </button>
                    </div>
                    <h2>Zia Khan</h2>
                    <p>Faculty Head</p>
                    <p>
                      Building Internet-Scale Multi-Cloud Global Apps | Software
                      Developer & Architect | Innovation Coach & Mentor I
                      believe that technology and software can help elevate the
                      human condition. I have spent my life developing global
                      internet-scale applications and mentoring others to do the
                      same. Have more than twenty years of experience in
                      software architecture, design, development,
                      implementation, and integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container p-5">
              <div className="row">
                <div className="col-md-2 py-3">
                  <div className="content">
                    <div className="delete">
                      <button>
                        <i class="fas fa-pen"></i>
                      </button>
                    </div>
                    <img className="shadow" src={aliMughal} width="100%" />
                  </div>
                </div>
                <div className="col-md-9 py-3">
                  <div className="content text-left">
                    <div className="delete">
                      <button>
                        <i class="fas fa-pen"></i>
                      </button>
                    </div>
                    <h2>Muhammad Ali Mughal</h2>
                    <p>Manager SMIT</p>
                    <p>
                      Building Internet-Scale Multi-Cloud Global Apps | Software
                      Developer & Architect | Innovation Coach & Mentor I
                      believe that technology and software can help elevate the
                      human condition. I have spent my life developing global
                      internet-scale applications and mentoring others to do the
                      same. Have more than twenty years of experience in
                      software architecture, design, development,
                      implementation, and integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="container px-5 py-3">
              <h2 className="text-left">Counter</h2>
            </div>
            <div className="container p-5">
              <div className="row">
                <div className="col-md-4 py-3">
                  <div className="content border p-3 rounded border-primary">
                    <div className="delete">
                      <button>
                        <i class="fas fa-pen"></i>
                      </button>
                    </div>
                    <h2>Number of Trained Students</h2>
                    <h3 className="color">125000</h3>
                  </div>
                </div>
                <div className="col-md-4 py-3">
                  <div className="content border p-3 rounded border-primary">
                    <div className="delete">
                      <button>
                        <i class="fas fa-pen"></i>
                      </button>
                    </div>
                    <h2>Number of Enrolled Students</h2>
                    <h3 className="color">55000</h3>
                  </div>
                </div>
                <div className="col-md-4 py-3">
                  <div className="content border p-3 rounded border-primary">
                    <div className="delete">
                      <button>
                        <i class="fas fa-pen"></i>
                      </button>
                    </div>
                    <h2>Number of Courses</h2>
                    <h3 className="color">20</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container px-5 py-3">
              <h2 className="text-left">Courses</h2>
            </div>
            <div className="container text-left p-5">
              <div className="row">
                <div className="col-md-3 border py-3">
                  <div className="content">
                    <div className="delete">
                      <button>
                        <i class="fas fa-pen"></i>
                      </button>
                    </div>
                    <img src={course} width="100%" />
                    <div>
                      <h3>Web And Mobile</h3>
                      <ul>
                        <li>HTML 5</li>
                        <li>CSS</li>
                        <li>javaScript</li>
                        <li>ES-6</li>
                        <li>React</li>
                        <li>React Native</li>
                        <li>Mongo DB</li>
                        <li>Express JS</li>
                        <li>Node JS</li>
                      </ul>
                      <hr />
                      <p>Duration: 1 Year</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 border py-3">
                  <div className="content">
                    <div className="delete">
                      <button>
                        <i class="fas fa-pen"></i>
                      </button>
                    </div>
                    <img src={course} width="100%" />
                    <div>
                      <h3>CCA</h3>
                      <ul>
                        <li>Quick Book</li>
                        <li>PeachTree</li>
                        <li>Excell</li>
                      </ul>
                      <hr />
                      <p>Duration: 3 Months</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 border py-3">
                  <div className="content">
                    <div className="delete">
                      <button>
                        <i class="fas fa-pen"></i>
                      </button>
                    </div>
                    <img src={course} width="100%" />
                    <div>
                      <h3>CCO</h3>
                      <ul>
                        <li>MS Word</li>
                        <li>MS Excel</li>
                        <li>MS PowerPoint</li>
                        <li>MS Access</li>
                      </ul>
                      <hr />
                      <p>Duration: 6 Months</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 border py-3">
                  <div className="content">
                    <div className="delete">
                      <button>
                        <i class="fas fa-pen"></i>
                      </button>
                    </div>
                    <img src={course} width="100%" />
                    <div>
                      <h3>Graphic Designing</h3>
                      <ul>
                        <li>Adobe illustrator</li>
                        <li>Adobe Photoshop</li>
                        <li>Urdu Inpage</li>
                      </ul>
                      <hr />
                      <p>Duration: 6 Months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container px-5 py-3">
              <h2 className="text-left">Courses</h2>
            </div>
            <div className="container p-5">
              <div className="row">
                <div className="col-md-3">
                  <div className="content p-3">
                    <div className="delete">
                      <button>
                        <i class="fas fa-pen"></i>
                      </button>
                    </div>
                    <img src={aliMughal} width="100%" />
                    <div className="p-3">
                      <h4>Ali Mughal</h4>
                      <p>Manager SMIT</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content p-3">
                    <div className="delete">
                      <button>
                        <i class="fas fa-pen"></i>
                      </button>
                    </div>
                    <img src={aliMughal} width="100%" />
                    <div className="p-3">
                      <h4>Ali Mughal</h4>
                      <p>Manager SMIT</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content p-3">
                    <div className="delete">
                      <button>
                        <i class="fas fa-pen"></i>
                      </button>
                    </div>
                    <img src={aliMughal} width="100%" />
                    <div className="p-3">
                      <h4>Ali Mughal</h4>
                      <p>Manager SMIT</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content p-3">
                    <div className="delete">
                      <button>
                        <i class="fas fa-pen"></i>
                      </button>
                    </div>
                    <img src={aliMughal} width="100%" />
                    <div className="p-3">
                      <h4>Ali Mughal</h4>
                      <p>Manager SMIT</p>
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
