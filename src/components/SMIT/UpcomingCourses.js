import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import './SmitStyle.css'
import img6 from "../../images/react.jpg";
export default class UpcomingCourses extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
  <>

<div
className="container mt-6 "
style={{ marginTop: 100, marginBottom: 100 }}
>
<div className="">
  <h1 className="Heading font-weight-bold">Upcoming Courses News</h1>
</div>
<div className="row">
  <div className="col-md-9">
    <section className="courseCard">
      <img src={img6} style={{ width: "100%", height: 400 }} />
      <div className="recentpOst"></div>
      <p
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "left",
          padding: 15,
        }}
      >
        Mobile And Web Application Development
      </p>
      <div className="recentpOst"></div>
      <div className="row justify-content-left">
        <p className="courseDateInfo">On April 2020</p>
        <p className="courseDateInfo">By Steven Masters</p>
        <p className="courseDateInfo">In Head Office</p>
      </div>
      <div className="recentpOst"></div>
      <div>
        <p
          style={{
            fontSize: 14,
            textAlign: "left",
            padding: 15,
            color: "gray",
            wordSpacing: 3,
          }}
        >
          Mobile And Web Application Development Mobile And Web
          Application Development Mobile And Web Application
          Development Mobile And Web Application Development Mobile
          And Web Application Development Mobile And Web Application
          Development Mobile And Web Application Development Mobile
          And Web Application Development Mobile And Web Application
          Development Mobile And Web Application Development Mobile
          And Web Application Development Mobile And Web Application
          Development Mobile And Web Application Development Mobile
          And Web Application Development Mobile And Web Application
          Development
        </p>
      </div>
    </section>
    <section className="courseCard">
      <img src={img6} style={{ width: "100%", height: 400 }} />
      <div className="recentpOst"></div>
      <p
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "left",
          padding: 15,
        }}
      >
        Mobile And Web Application Development
      </p>
      <div className="recentpOst"></div>
      <div className="row justify-content-left">
        <p className="courseDateInfo">On April 2020</p>
        <p className="courseDateInfo">By Steven Masters</p>
        <p className="courseDateInfo">In Head Office</p>
      </div>
      <div className="recentpOst"></div>
      <div>
        <p
          style={{
            fontSize: 14,
            textAlign: "left",
            padding: 15,
            color: "gray",
            wordSpacing: 3,
          }}
        >
          Mobile And Web Application Development Mobile And Web
          Application Development Mobile And Web Application
          Development Mobile And Web Application Development Mobile
          And Web Application Development Mobile And Web Application
          Development Mobile And Web Application Development Mobile
          And Web Application Development Mobile And Web Application
          Development Mobile And Web Application Development Mobile
          And Web Application Development Mobile And Web Application
          Development Mobile And Web Application Development Mobile
          And Web Application Development Mobile And Web Application
          Development
        </p>
      </div>
    </section>
  </div>
  <div className="col-md-3">
    <div className="recentpOst"></div>
    <h5>Recent Announced Courses</h5>
    <marquee
      id="myMarquee"
      behavior="scroll"
      direction="up"
      //   onmouseover="this.stop();" onmouseout="this.start();"
    >
      {/* Go on... hover over me!  Go on... hover over me!  Go on... hover over me!  Go on... hover over me!  Go on... hover over me!  Go on... hover over me!
      Go on... hover over me!  Go on... hover over me!  Go on... hover over me!  Go on... hover over me!  Go on... hover over me!  Go on... hover over me! */}
      <p>Web and Mobile</p>
      <div className="recentpOst"></div>
      <p>CCNA Cisco</p>
      <div className="recentpOst"></div>
      <p>Graphic Designing</p>
      <div className="recentpOst"></div>
    </marquee>
  </div>
</div>
</div>

{/* END UPCOMING COURSES  */}
</>
)
}
}