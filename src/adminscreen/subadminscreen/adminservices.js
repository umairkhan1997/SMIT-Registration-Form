import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
export default class ServicesAdmin extends React.Component {
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
                <h2>Services Admin Panel</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          {/* <div className="p-3">
            <h1 className="Heading">What We Do</h1>
          </div> */}
          <div className="row">
            <div className="col-md-12 p-3">
              <div className="row small">
                <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                  <p style={{ fontSize: "3.5em" }}>
                    <i class="fas fa-folder-plus"></i>
                  </p>
                </div>
                <div className="col-md-9 p-5 text-left">
                  <input
                    className="add"
                    placeholder="Click to add new Service"
                  />
                  <input
                    className="addSub"
                    placeholder="Click to add Subtitle"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <div className="content">
                <div className="delete">
                  <button>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
                <div className="row box">
                  <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-desktop"></i>
                    </p>
                  </div>
                  <div className="col-md-9 p-5 text-left">
                    <h3 className="text-muted">Saylani Mass Training</h3>
                    <p className="text-muted">
                      Best free IT Education In Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <div className="content">
                <div className="delete">
                  <button>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
                <div className="row box">
                  <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-people-arrows"></i>
                    </p>
                  </div>
                  <div className="col-md-9 p-5 text-left">
                    <h3 className="text-muted">Welfare</h3>
                    <p className="text-muted">Help for Needy Person</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <div className="content">
                <div className="delete">
                  <button>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
                <div className="row box">
                  <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="far fa-newspaper"></i>
                    </p>
                  </div>
                  <div className="col-md-9 p-5 text-left">
                    <h3 className="text-muted">NEWS</h3>
                    <p className="text-muted">Saylani News And Media</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <div className="content">
                <div className="delete">
                  <button>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
                <div className="row box">
                  <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-book-open"></i>
                    </p>
                  </div>
                  <div className="col-md-9 p-5 text-left">
                    <h3 className="text-muted">Education</h3>
                    <p className="text-muted">
                      Schooling Education for Needy Person
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 p-3">
              <div className="content">
                <div className="delete">
                  <button>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
                <div className="row box">
                  <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-school"></i>
                    </p>
                  </div>
                  <div className="col-md-9 p-5 text-left">
                    <h3 className="text-muted">Incubation center</h3>
                    <p className="text-muted">
                      Your Idea or Startup is our Priority
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 p-3">
              <div className="content">
                <div className="delete">
                  <button>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
                <div className="row box">
                  <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-donate"></i>
                    </p>
                  </div>
                  <div className="col-md-9 p-5 text-left">
                    <h3 className="text-muted">Online Sadqa</h3>
                    <p className="text-muted">
                      Your Sadqa from anywhere online
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 p-3">
              <div className="content">
                <div className="delete">
                  <button>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
                <div className="row box">
                  <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-hand-holding-medical"></i>
                    </p>
                  </div>
                  <div className="col-md-9 p-5 text-left">
                    <h3 className="text-muted">Medical</h3>
                    <p className="text-muted">Medical Help for Needy patient</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <div className="content">
                <div className="delete">
                  <button>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
                <div className="row box">
                  <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-tint"></i>
                    </p>
                  </div>
                  <div className="col-md-9 p-5 text-left">
                    <h3 className="text-muted">Blood Bank</h3>
                    <p className="text-muted">
                      Blood Transfusion service in all over Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <div className="content">
                <div className="delete">
                  <button>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
                <div className="row box">
                  <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-mosque"></i>
                    </p>
                  </div>
                  <div className="col-md-9 p-5 text-left">
                    <h3 className="text-muted">
                      Saylani Online Masajid Registeration
                    </h3>
                    <p className="text-muted">
                      Blood Transfusion service in all over Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <div className="content">
                <div className="delete">
                  <button>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
                <div className="row box">
                  <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-quran"></i>
                    </p>
                  </div>
                  <div className="col-md-9 p-5 text-left">
                    <h3 className="text-muted">Quran Pak Registeration</h3>
                    <p className="text-muted">
                      Blood Transfusion service in all over Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <div className="content">
                <div className="delete">
                  <button>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
                <div className="row box">
                  <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-utensils"></i>
                    </p>
                  </div>
                  <div className="col-md-9 p-5 text-left">
                    <h3 className="text-muted">Dastarkhwan</h3>
                    <p className="text-muted">
                      Food for needy people and for wayfarer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <div className="content">
                <div className="delete">
                  <button>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
                <div className="row box">
                  <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-faucet"></i>
                    </p>
                  </div>
                  <div className="col-md-9 p-5 text-left">
                    <h3 className="text-muted">RO Plant</h3>
                    <p className="text-muted">Clean water for every people.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <div className="content">
                <div className="delete">
                  <button>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
                <div className="row box">
                  <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-user-tie"></i>
                    </p>
                  </div>
                  <div className="col-md-9 p-5 text-left">
                    <h3 className="text-muted">Job Bank</h3>
                    <p className="text-muted">
                      Remove unemployment in Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <div className="content">
                <div className="delete">
                  <button>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
                <div className="row box">
                  <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-pen-nib"></i>
                    </p>
                  </div>
                  <div className="col-md-9 p-5 text-left">
                    <h3 className="text-muted">Books</h3>
                    <p className="text-muted">Islamic Books PDF</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <div className="content">
                <div className="delete">
                  <button>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
                <div className="row box">
                  <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-pen-nib"></i>
                    </p>
                  </div>
                  <div className="col-md-9 p-5 text-left">
                    <h3 className="text-muted">Online Istikhara</h3>
                    <p className="text-muted">Online Istikhara </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <div className="content">
                <div className="delete">
                  <button>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
                <div className="row box">
                  <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-kaaba"></i>
                    </p>
                  </div>
                  <div className="col-md-8 p-5 text-left">
                    <h3 className="text-muted">Hajj Application</h3>
                    <p className="text-muted">Collection of Hajj application</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <div className="content">
                <div className="delete">
                  <button>
                    <i class="fas fa-pen"></i>
                  </button>
                </div>
                <div className="row box">
                  <div className="col-md-3 p-5 d-flex justify-content-center align-items-center">
                    <p style={{ fontSize: "3.5em" }}>
                      <i class="fas fa-quran"></i>
                    </p>
                  </div>
                  <div className="col-md-9 p-5 text-left">
                    <h3 className="text-muted">Quran App (Taftessh)</h3>
                    <p className="text-muted">
                      Quran Application Esaal-e-Sawaab
                    </p>
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
