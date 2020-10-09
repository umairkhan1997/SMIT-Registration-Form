import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import './SmitStyle.css'
import img6 from "../../images/react.jpg";
import img7 from "../../images/human.JPG";
import img8 from "../../images/RO.jpg";
import img9 from "../../images/bike.jpg";
import img10 from '../../images/mobile.jpg'
import img11 from '../../images/textile.jpg'


export default class VocaTrain extends React.Component {
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
          Vacational Programs Developed by Saylani Mass IT
          </h1>
        </div>

        {/* Heading` */}
        <div className="container pt-5 pb-5 ">
          <div className="row">
            <div className="col-md-4 p-4">
              <section className="courseCardSec">
                <div className="m-4 ">
                  {/* <div className="round-icon"> */}
                  <img src={img8} style={{ width: "100%", height: 150 }} />
                  {/* </div> */}
                  <div>
                    <h2 className="p-3 coursesBlog">
                    RO Plant
                    </h2>
                    <p className="text-muted p-3">
                      Accusantium quam, ultricies eget tempor id, aliquam eget
                      nibh et. Maecen aliquam, risus at semper ullamcorper,
                      magna ullamcorper, magna ullamcorper, magna
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-md-4 p-4">
              <section className="courseCardSec">
                <div className=" m-4">
                  {/* <div className="round-icon"> */}
                  <img src={img9} style={{ width: "100%", height: 150 }} />
                  {/* </div> */}
                  <div>
                    <h2 className="p-3 coursesBlog">Bike Repairing</h2>
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
                  <img src={img10} style={{ width: "100%", height: 150 }} />
                  {/* </div> */}
                  <div>
                    <h2 className="p-3 coursesBlog">Mobile Repairing</h2>
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
                  <img src={img11} style={{ width: "100%", height: 150 }} />
                  {/* </div> */}
                  <div>
                    <h2 className="p-3 coursesBlog">Textile Training</h2>
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
}}