import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import masajid from "../../images/masajid.jpg";
import MainHeader from '../../components/Home/MainHeader';
import Footer from '../../components/Footer'

export default class OnlineQ extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <div>
            <MainHeader />
  <div className="back" style={{ backgroundImage: `url(${masajid})` }}>
          <div style={{ backgroundColor: "rgba(0,0,0,.5)" }} className="p-5">
            <h1 className="text-white p-3">Online Masajid Registeration</h1>
          </div>
        </div>

        <div className='container-fluid'>
            <div className='flex-wrap d-flex justify-content-center'>

            <div className="col-md-5 pt-3">
                <label for="maleName" className="inpLab font-weight-bold">
                Student Name
                </label>
                <input
                  id="maleName"
                  className="inp"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="col-md-5 pt-3">
                <label for="maleName" className="inpLab font-weight-bold">
                Father Name
                </label>
                <input
                  id="maleName"
                  className="inp"
                  placeholder="Enter Father Name"
                />
              </div>
              <div className="col-md-5 pt-3 pb-3">
                <label for="maleName" className="inpLab font-weight-bold">
                Age
                </label>
                <input
                  id="maleName"
                  className="inp"
                  placeholder="Enter Age"
                  type='number'
                />
              </div>
              <div className="col-md-5 pt-3 pb-3">
                <label for="maleName" className="inpLab font-weight-bold">
                Date of Birth
                </label>
                <input
                  id="maleName"
                  className="inp"
                //   placeholder="Enter Male Name"
                  type='date'
                />
              </div>
              <div className="col-md-5 ">
                <label className="inpLab font-weight-bold">Gender</label>
                <select className="inp">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div> 
              <div className="col-md-5 ">
                <label className="inpLab font-weight-bold">Select Course</label>
                <select className="inp">
                  <option>Ilm-o-Fahm-e-Deen Course</option>
                </select>
              </div> 

              <div className="col-md-5 pt-3">
                <label for="maleName" className="inpLab font-weight-bold">
                Email
                </label>
                <input
                  id="maleName"
                  className="inp"
                  placeholder="Email"
                />
              </div>
              <div className="col-md-5 pt-3">
                <label for="maleName" className="inpLab font-weight-bold">
                Skype ID
                </label>
                <input
                  id="maleName"
                  className="inp"
                  placeholder="Skype ID"
                />
              </div>
              <div className="col-md-5 pt-3">
                <label for="maleName" className="inpLab font-weight-bold">
                Cell Number
                </label>
                <input
                  id="maleName"
                  className="inp"
                  placeholder="Email"
                  type='number'
                />
              </div>
              <div className="col-md-5 pt-3">
                <label for="maleName" className="inpLab font-weight-bold">
                WhatsApp Number
                </label>
                <input
                  id="maleName"
                  className="inp"
                  placeholder="Skype ID"
                  type='number'
                />
              </div>
              <div className="col-md-10 pt-3">
                <label for="maleName" className="inpLab font-weight-bold">
                Upload you recent Image (face front without glasses and with a single-colored background)
                </label>
                <input
                  id="maleName"
                  className="inp"
                  placeholder="image"
                  type='image'
                />
              </div>
              <div className="col-md-5 pt-3 mb-5 mt-3">
              <button className="btn btn-block btn-primary">Submit</button>
              </div>
              {/* <input type="image" src="img_submit.gif" alt="Submit" width="48" height="48"></input> */}



        </div>

            </div>
            <Footer />
        </div>
    );
  }
}
