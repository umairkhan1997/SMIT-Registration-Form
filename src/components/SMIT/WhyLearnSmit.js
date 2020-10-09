import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import './SmitStyle.css'
import img1 from "../../images/admission.png";
import img2 from "../../images/online-learning.png";
import img3 from "../../images/top-couse.png";

export default class WhyLearnSmit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
  <>
<div
lassName="container-fluid  ex justify-content-center "
style={{ backgroundColor: "white", marginTop: 80 }}
>
<div className="container d-flex justify-content-center">
  <h1 className="HeadingSmit pt-3 text-center font-weight-bold">
    Why Learn On Saylani Mass IT{" "}
  </h1>
</div>
</div>

{/* Heading` */}
<div className="container-fluid ">
<div className="container p-5">
  <div className="row pt-5 pb-5">
    <div className="col-md-4">
      <section className="courseCard">
        <div className="m-4 ">
          {/* <div className="round-icon"> */}
          <img
            src={img1}
            style={{ width: 80, height: 80, marginTop: 0 }}
          />
          {/* </div> */}
          <div>
            <h2 className="p-3 coursesBlog">Explore Top Courses</h2>
            <p className="text-muted p-3">
              Accusantium quam, ultricies eget tempor id, aliquam eget
              nibh et. Maecen aliquam, risus at semper ullamcorper,
              magna
            </p>
          </div>
        </div>
      </section>
    </div>
    <div className="col-md-4">
      <section className="courseCard">
        <div className=" m-4">
          {/* <div className="round-icon"> */}
          <img
            src={img2}
            style={{ width: 80, height: 80, marginTop: 0 }}
          />
          {/* </div> */}
          <div>
            <h2 className="p-3 coursesBlog">All Courses</h2>
            <p className="text-muted p-3">
              Accusantium quam, ultricies eget tempor id, aliquam eget
              nibh et. Maecen aliquam, risus at semper ullamcorper,
              magna
            </p>
          </div>
        </div>
      </section>
    </div>
    <div className="col-md-4">
      <section className="courseCard">
        <div className=" m-4 ">
          {/* <div className="round-icon"> */}
          <img
            src={img3}
            style={{ width: 80, height: 80, marginTop: 0 }}
          />
          {/* </div> */}
          <div>
            <h2 className="p-3 coursesBlog">Got Admission</h2>
            <p className="text-muted p-3">
              Accusantium quam, ultricies eget tempor id, aliquam eget
              nibh et. Maecen aliquam, risus at semper ullamcorper,
              magna
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>
</div>
</>
)
}
}