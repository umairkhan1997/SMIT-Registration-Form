import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./SmitStyle.css";
import img4 from "../../images/course.jpg";
export default class MainCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div lassName="container-fluid  " style={{ marginTop: 40 }}>
          <h1 className="HeadingSmit p-3 text-center">
            Discover Courses Developed by Saylani Mass IT
          </h1>
        </div>

        {/* Heading` */}
        <div className="container pt-5 pb-5 ">
          <div className="row">
            <div className="col-md-4 p-4">
              <div className="courseCard">
                <img width="100%" src={img4} />
                <div className="text-left p-3">
                  <h2 className="coursesBlog">Web and Mobile</h2>
                  <p className="text-muted">Duration: 1 Year</p>
                  <hr />
                  <div>
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-4">
              <div className="courseCard">
                <img width="100%" src={img4} />
                <div className="p-3 text-left">
                  <h2 className="coursesBlog">Graphic Designing</h2>
                  <p className="text-muted">Duration: 6 Months</p>
                  <hr />
                  <div>
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-4">
              <div className="courseCard">
                <img width="100%" src={img4} />
                <div className="p-3 text-left">
                  <h2 className="coursesBlog">CCNA</h2>
                  <p className="text-muted">Duration: 5 Months</p>
                  <hr />
                  <div>
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-4">
              <div className="courseCard">
                <img width="100%" src={img4} />
                <div className="p-3 text-left">
                  <h2 className="coursesBlog">CCO</h2>
                  <p className="text-muted">Duration: 3 Months</p>
                  <hr />
                  <div>
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-4">
              <div className="courseCard">
                <img width="100%" src={img4} />
                <div className="p-3 text-left">
                  <h2 className="coursesBlog">CCA</h2>
                  <p className="text-muted">Duration: 3 Months</p>
                  <hr />
                  <div>
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-4">
              <div className="courseCard">
                <img width="100%" src={img4} />
                <div className="p-3 text-left">
                  <h2 className="coursesBlog">Video Editing</h2>
                  <p className="text-muted">Duration: 3 Months</p>
                  <hr />
                  <div>
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-4">
              <div className="courseCard">
                <img width="100%" src={img4} />
                <div className="p-3 text-left">
                  <h2 className="coursesBlog">Artificial Intelligence</h2>
                  <p className="text-muted">Duration: 3 Months</p>
                  <hr />
                  <div>
                    <button className="btn btn-primary">Read More</button>
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
