import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./Home.css";
import Reveal from 'react-reveal/Reveal';
import hazrat from '../../images/hazrat.jpg'
export default class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="container pt-5 pb-5">
          <div className="p-3">
            <h1 className="Heading">Introduction</h1>
          </div>
          {/* <Fade left cascade>
            <p className="text-muted text-justify">
              Established in May 1999 by famous spiritual and religious scholar
              Maulana Bashir Ahmed Farooqui, Saylani Welfare International Trust
              was built on the fundamentals of breaking the cycle of poverty,
              alleviating the financial troubles of the poor, giving people a
              chance to live a dignified life and spreading happiness.
            </p>
          </Fade>
          <Fade left cascade>
            <p className="text-muted text-justify">
              We are an organization that believes in lighting up the lives of
              underprivileged people across the world. We endeavor to provide
              the best quality services in areas including food, education,
              medical and social welfare free of cost to people living in the
              dark. With over 60 different sectors, we feed thousands of hungry
              people each day, hundreds more are given the hope of life through
              medical health care, many are educated to become leaders of
              tomorrow and several are given the opportunity to stand on their
              feet financially.
            </p>
          </Fade> */}
          <div className='col-md-12 row'>
<div className="col-md-6">
<img src={hazrat} style={{width:'100%',height:330}}/>
</div>
<div className="col-md-6">
          <Reveal effect="fadeInUp">
            <p className="text-muted text-justify">
              Established in May 1999 by famous spiritual and religious scholar
              Maulana Bashir Ahmed Farooqui, Saylani Welfare International Trust
              was built on the fundamentals of breaking the cycle of poverty,
              alleviating the financial troubles of the poor, giving people a
              chance to live a dignified life and spreading happiness.
            </p>
            <p className="text-muted text-justify">
              We are an organization that believes in lighting up the lives of
              underprivileged people across the world. We endeavor to provide
              the best quality services in areas including food, education,
              medical and social welfare free of cost to people living in the
              dark. With over 60 different sectors, we feed thousands of hungry
              people each day, hundreds more are given the hope of life through
              medical health care, many are educated to become leaders of
              tomorrow and several are given the opportunity to stand on their
              feet financially.
            </p>
          </Reveal>
</div>
          </div>
        </div>
      </div>
    );
  }
}
