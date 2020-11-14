import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import CountUp from "react-countup";

export default class DasterkhwanAdmin extends React.Component {
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
                <h2>Dasterkhwan Admin Panel</h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="content">
                  <div className="delete">
                    <button>
                      <i class="fas fa-pen"></i>
                    </button>
                  </div>
                  <div className="p-3">
                    <div className="roundIco">
                      <input  value='3500' className='count'/>
                      <CountUp
                        style={{ fontSize: "2.5em" }}
                        start={30}
                        end={3500}
                        duration={4}
                      />
                    </div>
                    <p className="Name">Employee</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="content">
                  <div className="delete">
                    <button>
                      <i class="fas fa-pen"></i>
                    </button>
                  </div>
                  <div className="p-3">
                    <div className="roundIco">
                      <input value='125' className='count' />
                      <CountUp
                        style={{ fontSize: "2.5em" }}
                        start={0}
                        end={125}
                        duration={4}
                      />
                    </div>
                    <p className="Name">Branches</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="content">
                  <div className="delete">
                    <button>
                      <i class="fas fa-pen"></i>
                    </button>
                  </div>
                  <div className="p-3">
                    <div className="roundIco">
                      <input value='12' className='count' />
                      <CountUp
                        style={{ fontSize: "2.5em" }}
                        start={0}
                        end={12}
                        duration={4}
                      />
                    </div>
                  </div>
                  <p className="Name">Cities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
