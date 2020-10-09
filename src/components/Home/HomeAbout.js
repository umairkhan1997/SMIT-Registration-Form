import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/rashan2.jpg";
import slide3 from "../../images/back.jpg";
const images = [slide1, slide2, slide3];
export default class HomeAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
<>
<div className="container">

<h1 className="pt-4"><strong>About</strong></h1>
<p style={{marginTop:60}} className="pt-4 text-center text-muted">Established in May 1999 by famous spiritual and religious scholar Maulana Bashir Ahmed Farooqui, Saylani Welfare 
  International Trust was built on the fundamentals of breaking the cycle of poverty, alleviating the financial 
  troubles of the poor, giving people a chance to live a dignified life and spreading happiness.</p>
  <p className="pt-4 text-center text-muted">
  We are an organization that believes in lighting up the lives of underprivileged people across the world. We endeavor to provide the best quality services in areas including food, education, medical and social welfare free of cost to people living in the dark. With over 60 different sectors, we feed thousands of hungry people each day, hundreds more are given the hope of life through medical 
  health care, many are educated to become leaders of tomorrow and several are given the opportunity to stand on their feet financially.
  </p>
  <p className="pt-4 text-center text-muted">
  Today, we are proud to say that our physical presence extends throughout Pakistan with a vast network of 125 branches operating in major cities including Karachi, Lahore, Islamabad, Rawalpindi, Hyderabad and Faisalabad. Apart from Pakistan, we have overseas offices in the UK, USA and UAE as well. Our worldwide branches are operating under the guidance of a team of over 3,500 working professionals who help almost 150,000 people on a daily basis.
  </p>
<p className="pt-4 text-center text-muted" style={{marginBottom:100}}>
We strongly believe that a little help goes a long way and our work would not be possible without the generous support of our valuable donors. Our local and international donors have graciously lent us a hand by supporting our causes and enabling us to serve the needs of people in need.


</p>
</div>
  </>      
        );
    }
  }
  