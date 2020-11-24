import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import image from "../../images/Dr.jpg";
import CountUp from "react-countup";

export default class ContactAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3 bg-light text-primary shadow p-5">
            <div className="p-4">
              <img src={logo} width="100%" />
            </div>
            <div className='p-5'>
              <h2>Dasterkhwan</h2>
            </div>
            <div className="p-4">
              <ul>
                <li>Count Up</li>
                <li>Roti Bank</li>
                <li>Cost of per person</li>
              </ul>
            </div>
          </div>
          <div
            style={{ height: "100vh", overflow: "scroll" }}
            className="col-md-9"
          >
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
                        <input value='3500' className='count' />
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
            <div className='container'>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='content'>
                    <div className='delete'>
                      <button><i class="fas fa-pen"></i></button>
                    </div>
                    <img width='100%' src={image} />
                    <div className='p-3'>
                      <h3>
                        Saylani Roti Bank
                      </h3>
                      <p>
                        Saylani is providing pack food to deserving and hungry peoples for the first time in Pakistan through “SAYLANI ROTI BANK” where anyone can get the food for their families from the counter of Roti Bank.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='content'>
                    <div className='delete'>
                      <button><i class="fas fa-pen"></i></button>
                    </div>
                    <img width='100%' src={image} />
                    <div className='p-3'>
                      <h3>
                        Saylani Roti Bank
                      </h3>
                      <p>
                        Saylani is providing pack food to deserving and hungry peoples for the first time in Pakistan through “SAYLANI ROTI BANK” where anyone can get the food for their families from the counter of Roti Bank.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='content'>
                    <div className='delete'>
                      <button><i class="fas fa-pen"></i></button>
                    </div>
                    <img width='100%' src={image} />
                    <div className='p-3'>
                      <h3>
                        Saylani Roti Bank
                      </h3>
                      <p>
                        Saylani is providing pack food to deserving and hungry peoples for the first time in Pakistan through “SAYLANI ROTI BANK” where anyone can get the food for their families from the counter of Roti Bank.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='container'>
              <div className="displayheading">
                <h2>Donate In Langarkhana</h2>
              </div>
              <div className='content p-5'>
                <div className='delete'>
                  <button><i class="fas fa-pen"></i></button>
                </div>
                <table className="text-left mt-5 mb-5 table-responsive-sm" width="100%">
                  <thead className="tableHead">
                    <tr>
                      <td>Description</td>
                      <td>Per Day</td>
                      <td>Per Month</td>
                      <td>Per Year</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tableList">
                      <td>Cost Per Person</td>
                      <td>50</td>
                      <td>50</td>
                      <td>50</td>
                    </tr>
                    <tr className="tableList">
                      <td>No Of People</td>
                      <td>1200</td>
                      <td>36000</td>
                      <td>438000</td>
                    </tr>
                    <tr className="tableList">
                      <td>Meal 1 for Lunch</td>
                      <td>PKR 30000 (50x600)</td>
                      <td>PKR 900000 (50x18000)</td>
                      <td>PKR 10800000 (50x216000)</td>
                    </tr>
                    <tr className="tableList">
                      <td>Meal 2 for Dinner</td>
                      <td>PKR 30000 (50x600)</td>
                      <td>PKR 900000 (50x18000)</td>
                      <td>PKR 10800000 (50x216000)</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="tableList">
                      <td>Total</td>
                      <td>PKR 60000</td>
                      <td>PKR 1800000</td>
                      <td>PKR 21600000</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

