import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import image from "../../images/Dr.jpg";
export default class JobBankAdmin extends React.Component {
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
            <div className="p-5">
              <h2>Job Bank</h2>
            </div>
            <div className="p-4">
              <ul className='list'>
                <li>Employee Data</li>
                <li>Job Reqruiter</li>
              </ul>
            </div>
          </div>
          <div
            style={{ height: "100vh", overflow: "scroll" }}
            className="col-md-9"
          >
            <div className="container">
                <div className="displayheading">
                  <h3>Employee Data</h3>
                </div>
                <table class="jobTable" style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th>Full Name</th>
                      <th>Occupation</th>
                      <th>Age</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Kamran</td>
                      <td>Electrician</td>
                      <td>23</td>
                      <td>
                        <button class="viePro">View Profile</button>
                      </td>
                      <td>
                        <button class="viePro">Show</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Kamran</td>
                      <td>Electrician</td>
                      <td>23</td>
                      <td>
                        <button class="viePro">View Profile</button>
                      </td>
                      <td>
                        <button class="viePro">Show</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Kamran</td>
                      <td>Electrician</td>
                      <td>23</td>
                      <td>
                        <button class="viePro">View Profile</button>
                      </td>
                      <td>
                        <button class="viePro">Show</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Kamran</td>
                      <td>Electrician</td>
                      <td>23</td>
                      <td>
                        <button class="viePro">View Profile</button>
                      </td>
                      <td>
                        <button class="viePro">Show</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Kamran</td>
                      <td>Electrician</td>
                      <td>23</td>
                      <td>
                        <button class="viePro">View Profile</button>
                      </td>
                      <td>
                        <button class="viePro">Show</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Kamran</td>
                      <td>Electrician</td>
                      <td>23</td>
                      <td>
                        <button class="viePro">View Profile</button>
                      </td>
                      <td>
                        <button class="viePro">Show</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Kamran</td>
                      <td>Electrician</td>
                      <td>23</td>
                      <td>
                        <button class="viePro">View Profile</button>
                      </td>
                      <td>
                        <button class="viePro">Show</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <div className='displayheading'>
                    <h3>Reqruiter Form</h3>
                  </div>
                  <table>
                    <thead>
                    <tr>
                      <th>Company Name or Person Name</th>
                      <th>Nature of job</th>
                      <th>Location</th>
                      <th>Approx Sallary</th>
                      <th>Time Period to fill start</th>
                      <th>HR or Personal Contact Number</th>
                      <th>Job Title</th>
                      <th>Approx Duration</th>
                      <th>Experiance required</th>
                      <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>abc</td>
                        <td>Driver</td>
                        <td>Location</td>
                        <td>25000</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
