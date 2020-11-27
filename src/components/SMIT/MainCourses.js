import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./SmitStyle.css";
import img4 from "../../images/course.jpg";
import img5 from "../../images/course1.jpeg";
export default class MainCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container pt-5 pb-5 ">
          <h2 className="p-3 font-weight-bold" style={{ color: "#1371b8" }}>
            Discover Courses Developed by Saylani Mass IT
          </h2>
        </div>
        <div className="container pb-5 ">
          <div className="row">
            <div className="col-md-8 p-4" >
              <img className="courseimg" src={img5} width="100%" />
            </div>
            <div className="col-md-4 p-4 text-left" >
              <h3 className="text-primary">
                Web And Mobile Application Development
              </h3>
              <ul className="p-3 text-muted">
                <li>HTML 5 & CSS3</li>
                {/* <li>CSS3</li> */}
                <li>JavaScript</li>
                <li>React & React Native</li>
                {/* <li></li> */}
                <li>Node JS & Express JS</li>
                <li>Mongo DB</li>
                {/* <li></li> */}
              </ul>
              <h4 className='border-top border-primary py-3'>Duration: 1 Year</h4>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-8 p-4">
              <img className="courseimg" src={img5} width="100%" />
            </div>
            <div className="col-md-4 p-4 text-left">
              <h3 className="text-primary">
                CCA
              </h3>
              <ul className="p-3 text-muted">
                <li>Quick Book</li>
                <li>PeachTree</li>
                <li>Excell</li>
              </ul>
              <h4 className='border-top border-primary py-3'>Duration: 3 Months</h4>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-8 p-4">
              <img className="courseimg" src={img5} width="100%" />
            </div>
            <div className="col-md-4 p-4 text-left">
              <h3 className="text-primary">
                CCO
              </h3>
              <ul className="p-3 text-muted">
                <li>MS Word</li>
                <li>MS Excel</li>
                <li>MS PowerPoint</li>
                <li>MS Access</li>
              </ul>
              <h4 className='border-top border-primary py-3'>Duration: 3 Months</h4>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-8 p-4">
              <img className="courseimg" src={img5} width="100%" />
            </div>
            <div className="col-md-4 p-4 text-left">
              <h3 className="text-primary">
                Graphic Designing
              </h3>
              <ul className="p-3 text-muted">
                <li>Adobe illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Urdu Inpage</li>
              </ul>
              <h4 className='border-top border-primary py-3'>Duration: 6 Months</h4>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}
