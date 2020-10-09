import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import './SmitStyle.css'
import img6 from "../../images/react.jpg";
import img4 from "../../images/cisco.jpg";
import img5 from "../../images/graphic.jpg";
export default class MainCourses extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
  <>

<div
lassName="container-fluid  "
style={{ marginTop: 40 }}
>
<h1 className="HeadingSmit p-3 text-center font-weight-bold">
  Discover Courses Developed by Saylani Mass IT
</h1>
</div>

{/* Heading` */}
<div className="container pt-5 pb-5 ">
<div className="row">
  <div className="col-md-4 p-4">
    <section className="courseCardSec">
      <div className="m-4 ">
        {/* <div className="round-icon"> */}
        <img src={img6} style={{ width: "100%", height: 150 }} />
        {/* </div> */}
        <div>
          <h2 className="p-3 coursesBlog">
            Web and Mobile Development
          </h2>
          <p className="text-muted p-3">
            Accusantium quam, ultricies eget tempor id, aliquam eget
            nibh et. Maecen aliquam, risus at semper ullamcorper,
            magna
          </p>
        </div>
      </div>
    </section>
  </div>
  <div className="col-md-4 p-4">
    <section className="courseCardSec">
      <div className=" m-4">
        {/* <div className="round-icon"> */}
        <img src={img5} style={{ width: "100%", height: 150 }} />
        {/* </div> */}
        <div>
          <h2 className="p-3 coursesBlog">Graphic Designing</h2>
          <p className="text-muted p-3">
            Accusantium quam, ultricies eget tempor id, aliquam eget
            nibh et. Maecen aliquam, risus at semper ullamcorper,
            magna risus at semper ullamcorper, magna
          </p>
        </div>
      </div>
    </section>
  </div>
  <div className="col-md-4 p-4">
    <section className="courseCardSec">
      <div className=" m-4 ">
        {/* <div className="round-icon"> */}
        <img src={img4} style={{ width: "100%", height: 150 }} />
        {/* </div> */}
        <div>
          <h2 className="p-3 coursesBlog">CCNA</h2>
          <p className="text-muted p-3">
            Accusantium quam, ultricies eget tempor id, aliquam eget
            nibh et. Maecen aliquam, risus at risus at semper
            ullamcorper, magna semper ullamcorper, magna
          </p>
        </div>
      </div>
    </section>
  </div>
  <div className="col-md-4 p-4">
    <section className="courseCardSec">
      <div className=" m-4 ">
        {/* <div className="round-icon"> */}
        <img src={img4} style={{ width: "100%", height: 150 }} />
        {/* </div> */}
        <div>
          <h2 className="p-3 coursesBlog">CCNA</h2>
          <p className="text-muted p-3">
            Accusantium quam, ultricies eget tempor id, aliquam eget
            nibh et. Maecen aliquam, risus at risus at semper
            ullamcorper, magna semper ullamcorper, magna
          </p>
        </div>
      </div>
    </section>
  </div>
  <div className="col-md-4 p-4">
    <section className="courseCardSec">
      <div className=" m-4 ">
        {/* <div className="round-icon"> */}
        <img src={img4} style={{ width: "100%", height: 150 }} />
        {/* </div> */}
        <div>
          <h2 className="p-3 coursesBlog">CCNA</h2>
          <p className="text-muted p-3">
            Accusantium quam, ultricies eget tempor id, aliquam eget
            nibh et. Maecen aliquam, risus at risus at semper
            ullamcorper, magna semper ullamcorper, magna
          </p>
        </div>
      </div>
    </section>
  </div>
</div>
</div>
</>
)
}
}