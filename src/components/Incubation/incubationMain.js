import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./incubation.css";
import MainHeader from "../Home/MainHeader";
import { Link } from "react-router-dom";
import Fade from "react-reveal";
import img1 from '../../images/incu1.jpg'
import img2 from '../../images/ai.png'
import img3 from '../../images/ar.png'
import img4 from '../../images/ecommerce.png'
import img5 from '../../images/iot.png'
import img6 from '../../images/mar.png'
import img7 from '../../images/aliMughal.png'
import img8 from '../../images/uma.jpg'
import img9 from '../../images/zeeshan.png'
export default class incubationMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
             <MainHeader />


         <div className='container-fluid mt-5'>
             <div className='row'>
            <div className='col-6'>
                <img src={img1} width='90%' height='100%' className='img1'/>
            </div>
            <div className='col-6'>
                <h1 className='incuMainhead'>Saylani Incubation Center</h1>
                <p className='incuPara'>In collaboration with SMIT, the Saylani Incubators Program is designed to inculcate in students an advanced level of 
                    entrepreneurial vision and will. The program helps young freelancers and entrepreneurs solve some of the problems 
                    commonly associated with running a startup by providing them with necessary workspace, equipment, mentoring and training.</p>
                    <p className='incuPara'>The Incubator Program aims to help individuals strenghten their entrepreneurial motives and acquire
                     the skills and capabilities necessary to play their entrepreneurial role effectively and
                     commence new professional or business ventures, thus eventually helping foster a rapidly growing I.T industry.</p>
             </div>
            </div>
         </div>

{/* Division */}
         <div className='container-fluid mt-5'>
<h3 className='font-weight-bold'>Following summarizes the venture services offered by the Saylani Incubation Center</h3>

        <div className='container mt-5'>
                <div className='row flex-wrap'>

                <div className="col-md-4 p-3">
              <Fade up>
                <Link to="incubation" style={{textDecoration:'none'}}>
                  <div className="iconHover">
                    <p style={{ fontSize: "3.5em" }}>
                      <img src={img2} width='100px' height='100px'/>
                    </p>
                    <p style={{ fontSize: "1.5em",fontWeight:'bold' }}>Artificial Intelligence</p>
                  </div>
                </Link>
              </Fade>
            </div>
            
            
            <div className="col-md-4 p-3 mt-2">
              <Fade up>
                <Link to="incubation" style={{textDecoration:'none'}}>
                  <div className="iconHover">
                    <p style={{ fontSize: "3.5em" }}>
                    <i class="fas fa-tractor"></i>
                    </p>
                    <p style={{ fontSize: "1.5em",fontWeight:'bold',marginTop:10 }}>Agriculture</p>
                  </div>
                </Link>
              </Fade>
            </div>

            <div className="col-md-4 p-3">
              <Fade up>
                <Link to="incubation" style={{textDecoration:'none'}}>
                  <div className="iconHover">
                    <p style={{ fontSize: "3.5em" }}>
                      <img src={img3} width='80px' height='80px'/>
                    </p>
                    <p style={{ fontSize: "1.5em",fontWeight:'bold' }}>AR / VR</p>
                  </div>
                </Link>
              </Fade>
            </div>

            <div className="col-md-4 p-3">
              <Fade up>
                <Link to="incubation" style={{textDecoration:'none'}}>
                  <div className="iconHover">
                    <p style={{ fontSize: "3.5em" }}>
                      <img src={img4} width='80px' height='80px'/>
                    </p>
                    <p style={{ fontSize: "1.5em",fontWeight:'bold' }}>Ecommerce</p>
                  </div>
                </Link>
              </Fade>
            </div>
            
            <div className="col-md-4 p-3">
              <Fade up>
                <Link to="incubation" style={{textDecoration:'none'}}>
                  <div className="iconHover">
                    <p style={{ fontSize: "3.5em" }}>
                      <img src={img5} width='80px' height='80px' style={{marginLeft:25}}/>
                    </p>
                    <p style={{ fontSize: "1.5em",fontWeight:'bold' }}>IOT</p>
                  </div>
                </Link>
              </Fade>
            </div>

            <div className="col-md-4 p-3">
              <Fade up>
                <Link to="incubation" style={{textDecoration:'none'}}>
                  <div className="iconHover">
                    <p style={{ fontSize: "3.5em" }}>
                      <img src={img6} width='80px' height='80px' />
                    </p>
                    <p style={{ fontSize: "1.5em",fontWeight:'bold' }}>Media & Marketing</p>
                  </div>
                </Link>
              </Fade>
            </div>
                </div>
        </div>
         </div>

{/* Division END*/}


{/* MENTORS  */}
<div className='container mt-5'>
<h3 className='text-left font-weight-bold'>Our Mentors</h3>
<br />
<div className='row'>

<div className='col-4 '>
<img src={img7} width='250px' height='250px'/>
<div className='mt-3'>
  <h5>Muhammad Ali Mughal</h5>
  <h5>Data Scientist</h5>
</div>
</div>

<div className='col-4 '>
<img src={img9} width='250px' height='250px'/>
<div className='mt-3'>
  <h5>Zeeshan Hanif</h5>
  <h5>MEAN Stack</h5>
</div>
</div>

<div className='col-4 '>
<img src={img8} width='245px' height='250px'/>
<div className='mt-3'>
  <h5>Muhammad Umair Khan</h5>
  <h5>Full Stack Developer</h5>
</div>
</div>


</div>
</div>

{/* MENTORS ENDS */}

{/* EVENTS  */}

<div className='container ' style={{marginTop:100}}>

  <div className='row'>

<div className='col-md-9' className='img2'>
{/* <img src={img1} width='100%' height='100%' /> */}
<h1 style={{color:'white',textAlign:'left',margin:30,marginBottom:50}}>UPCOMING EVENTS</h1>
<div className='row'>

<div className="col-md-5 text-left" style={{marginLeft:20,borderWidth:3,borderColor:'#2fbfc2'}}>
<h3 style={{color:'white',}} className='font-weight-bold'>OCT 23</h3>
<h5 style={{color:'white',}} className='font-weight-bold'>Web & Mobile Hackthon</h5>
<h6 style={{color:'white',width:'70%'}} className='font-weight-bold'>
  Are you a Developer ? Then come and join us .
</h6>
<h6 style={{color:'white',}} className='font-weight-bold'>
9 am - 6:00 pm
</h6>
</div>

<div className="col-md-5 text-left" style={{marginLeft:20,borderWidth:3,borderColor:'#2fbfc2'}}>
<h3 style={{color:'white',}} className='font-weight-bold'>OCT 23</h3>
<h5 style={{color:'white',}} className='font-weight-bold'>Web & Mobile Hackthon</h5>
<h6 style={{color:'white',width:'70%'}} className='font-weight-bold'>
  Are you a Developer ? Then come and join us .
</h6>
<h6 style={{color:'white',}} className='font-weight-bold'>
9 am - 6:00 pm
</h6>
</div>

</div>


<div className='text-right' style={{marginTop:60,marginRight:40}}>
  <h4 style={{color:'white'}}>View all</h4>
</div>
</div>

<div className='col-md-3 ' style={{marginTop:-10}}>
<h1 className='text-left font-weight-bold'>News</h1>
<div className='border'>
  <div>
<h3 className='font-weight-bold text-left ml-2' style={{color:'#2fbfc2',marginTop:10}}>OCT 23</h3>
<h6 className='font-weight-bold text-left ml-2'>Web & Mobile Hackthon</h6>
<hr />
  </div>
  <div>
<h3 className='font-weight-bold text-left ml-2' style={{color:'#2fbfc2',marginTop:10}}>OCT 23</h3>
<h6 className='font-weight-bold text-left ml-2'>Web & Mobile Hackthon</h6>
<hr />
  </div>
  <div>
<h3 className='font-weight-bold text-left ml-2' style={{color:'#2fbfc2',marginTop:10}}>OCT 23</h3>
<h6 className='font-weight-bold text-left ml-2'>Web & Mobile Hackthon</h6>
<hr />
  </div>
  <div className='row '>
<h6 className='font-weight-bold text-left ml-4' style={{marginTop:0}}>View All</h6>
<p style={{ fontSize: "1em" ,marginLeft:10,marginTop:-2}}>
                    <i class="fas fa-chevron-right"></i>
                    </p>
  </div>
</div>
  </div>

</div>

<div className='mt-5'>

</div>

</div>

{/* EVENTS END */}

      </div>
    );
  }
}
