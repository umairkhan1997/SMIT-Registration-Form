import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import '../App.css'

export default class WhatweDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <div className="container-fluid pt-5 pb-5 bg-light">
        <div className="container">
        <div className='p-3'>
          <h1 className="Heading">What We Do</h1>
          </div>
          <div className="row">
            <div className="col-md-4 p-3">
              <div className="small">
                <p style={{ fontSize: "3.5em" }}>
                  <i class="fas fa-donate"></i>
                </p>
                <p style={{ fontSize: "1.5em" }}>Online Sadqa</p>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="small">
                <p style={{ fontSize: "3.5em" }}>
                  <i class="fas fa-people-arrows"></i>
                </p>
                <p style={{ fontSize: "1.5em" }}>Welfare</p>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="small">
                <p style={{ fontSize: "3.5em" }}>
                  <i class="fas fa-hand-holding-medical"></i>
                </p>
                <p style={{ fontSize: "1.5em" }}>Medical</p>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="small">
                <p style={{ fontSize: "3.5em" }}>
                  <i class="fas fa-utensils"></i>
                </p>
                <p style={{ fontSize: "1.5em" }}>Dasterkhwan</p>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="small">
                <p style={{ fontSize: "3.5em" }}>
                  <i class="fas fa-faucet"></i>
                </p>
                <p style={{ fontSize: "1.5em" }}>RO Plant</p>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="small">
                <p style={{ fontSize: "3.5em" }}>
                  <i class="fas fa-book-open"></i>
                </p>
                <p style={{ fontSize: "1.5em" }}>Education</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        );
    }
  }
  