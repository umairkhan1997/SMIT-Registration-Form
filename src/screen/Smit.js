import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import MainHeader from "../components/MainHeader";
import img1 from "../images/admission.png";
import img2  from "../images/online-learning.png";
import img3 from "../images/top-couse.png";
import img4 from "../images/cisco.jpg";
import img5  from "../images/graphic.jpg";
import img6 from "../images/react.jpg";
import img7 from "../images/human.JPG";
import logo from "../images/logo.png";
import BottomSide from '../components/BottomSide'
import NewUpdates from "../components/NewUpdates";
import LinkLine from '../components/LinkLine';


export default class Smit extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  render() {
    return (
        <div
      style={{backgroundColor:'#f0f0f0'}}
      >


        {/* LinkLine Start*/}
        <LinkLine />
        {/* LinkLine End*/}

        {/* MainHeader Start*/}
        <MainHeader />
        {/* MainHeader End*/}

{/* 

        UPCOMING COURSES 
        <div lassName="container-fluid  ex justify-content-center" style={{backgroundColor: "white",marginTop:30}}>
        <div className="container d-flex justify-content-center" >
          <h1 className="HeadingSmit p-3 text-center">Upcoming Courses</h1>
        </div>
        </div>

  ServiceCounter Start
 <div className="upCour" style={{height:'100%',backgroundColor: "white",}}>
<div className="upCourTwo">

start

<div className="container-fluid ">
        <div className="container ">
          <div className="row  pb-5">
            <div className="col-md-4">
              <div className="m-4 ">
                <div>
                  <h2 className="p-3 ComCourses">Web and Mobile Development</h2>
                  <p className=" p-3 ComCourses">
                    Accusantium quam, ultricies eget tempor id, aliquam eget
                    nibh et. Maecen aliquam, risus at semper ullamcorper, magna
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" m-4">
                <div>
                  <h2 className="p-3 ComCourses">CCNA Networking</h2>
                  <p className=" p-3 ComCourses">
                    Accusantium quam, ultricies eget tempor id, aliquam eget
                    nibh et. Maecen aliquam, risus at semper ullamcorper, magna
                  </p>
                </div>
              
              </div>
            </div>
            <div className="col-md-4">
              <div className=" m-4 ">
                <div>
                  <h2 className="p-3 ComCourses">Graphic designing</h2>
                  <p className=" p-3 ComCourses">
                    Accusantium quam, ultricies eget tempor id, aliquam eget
                    nibh et. Maecen aliquam, risus at semper ullamcorper, magna
                  </p>
                </div>
            
              </div>
            </div>
       
          </div>
        </div>
      </div>

END
</div>
 </div>
        ServiceCounter End */}

<div className="container mt-6 " style={{marginTop:100}}>
<div className='p-3'>
          <h1 className="Heading">Upcoming Courses</h1>
          </div>
          <div className="row">
            <div className="col-md-9">
             <section className="courseCard">
               <img src={img6} style={{width:'100%',height:400,}}/>
               <div className="recentpOst"></div>
               <p style={{fontSize:24,fontWeight:"bold",textAlign:"left",padding:15}}>Mobile And Web Application Development</p>
               <div className="recentpOst"></div>
               <div className="row justify-content-left">
<p className="courseDateInfo">On April 2020</p>
<p className="courseDateInfo">By Steven Masters</p>
<p className="courseDateInfo">In Head Office</p>
                 </div>
<div className="recentpOst"></div>
<div>
<p style={{fontSize:14,textAlign:"left",padding:15,color:'gray',wordSpacing:3,}}>Mobile And Web Application Development Mobile And Web Application Development Mobile And Web Application Development Mobile And Web Application Development 
Mobile And Web Application Development Mobile And Web Application Development Mobile And Web Application Development Mobile And Web Application Development Mobile And Web Application Development Mobile And Web Application Development 
Mobile And Web Application Development Mobile And Web Application Development Mobile And Web Application Development Mobile And Web Application Development Mobile And Web Application Development 
</p>
</div>
             </section>
             <section className="courseCard">
               <img src={img6} style={{width:'100%',height:400,}}/>
               <div className="recentpOst"></div>
               <p style={{fontSize:24,fontWeight:"bold",textAlign:"left",padding:15}}>Mobile And Web Application Development</p>
               <div className="recentpOst"></div>
               <div className="row justify-content-left">
<p className="courseDateInfo">On April 2020</p>
<p className="courseDateInfo">By Steven Masters</p>
<p className="courseDateInfo">In Head Office</p>
                 </div>
<div className="recentpOst"></div>
<div>
<p style={{fontSize:14,textAlign:"left",padding:15,color:'gray',wordSpacing:3,}}>Mobile And Web Application Development Mobile And Web Application Development Mobile And Web Application Development Mobile And Web Application Development 
Mobile And Web Application Development Mobile And Web Application Development Mobile And Web Application Development Mobile And Web Application Development Mobile And Web Application Development Mobile And Web Application Development 
Mobile And Web Application Development Mobile And Web Application Development Mobile And Web Application Development Mobile And Web Application Development Mobile And Web Application Development 
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







        <div lassName="container-fluid  ex justify-content-center " style={{backgroundColor: "#f0f0f0",marginTop:80}}>
        <div className="container d-flex justify-content-center" >
          <h1 className="HeadingSmit p-3 text-center " >Why Learn On Saylani Mass IT </h1>
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
                <img src={img1} style={{width:80,height:80,marginTop:0}}/>
                {/* </div> */}
                <div>
                  <h2 className="p-3 coursesBlog">Explore Top Courses</h2>
                  <p className="text-muted p-3">
                    Accusantium quam, ultricies eget tempor id, aliquam eget
                    nibh et. Maecen aliquam, risus at semper ullamcorper, magna
                  </p>
                </div>
              </div>
            </section>
            </div>
            <div className="col-md-4">
            <section className="courseCard">
              <div className=" m-4">
                 {/* <div className="round-icon"> */}
                 <img src={img2} style={{width:80,height:80,marginTop:0}}/>
                {/* </div> */}
                <div>
                  <h2 className="p-3 coursesBlog">All Courses</h2>
                  <p className="text-muted p-3">
                    Accusantium quam, ultricies eget tempor id, aliquam eget
                    nibh et. Maecen aliquam, risus at semper ullamcorper, magna
                  </p>
                </div>
              
              </div>
              </section>
            </div>
            <div className="col-md-4">
            <section className="courseCard">
              <div className=" m-4 ">
                {/* <div className="round-icon"> */}
                <img src={img3} style={{width:80,height:80,marginTop:0}}/>
                {/* </div> */}
                <div>
                  <h2 className="p-3 coursesBlog">Got Admission</h2>
                  <p className="text-muted p-3">
                    Accusantium quam, ultricies eget tempor id, aliquam eget
                    nibh et. Maecen aliquam, risus at semper ullamcorper, magna
                  </p>
                </div>
            
              </div>
              </section>
            </div>
       
          </div>
        </div>
      </div>
{/* END END END */}

<div lassName="container-fluid  ex justify-content-center" style={{backgroundColor: "##f0f0f0"}}>
        <div className="container d-flex justify-content-center" >
          <h1 className="HeadingSmit p-3 text-center">Discover Courses Developed by Saylani Mass IT</h1>
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
                <img src={img6} style={{width:'100%',height:150}}/>
                {/* </div> */}
                <div>
                  <h2 className="p-3 coursesBlog">Web and Mobile Development</h2>
                  <p className="text-muted p-3">
                    Accusantium quam, ultricies eget tempor id, aliquam eget
                    nibh et. Maecen aliquam, risus at semper ullamcorper, magna
                  </p>
                </div>
              </div>
              </section>
            </div>
            <div className="col-md-4">
            <section className="courseCard">
              <div className=" m-4">
                 {/* <div className="round-icon"> */}
                 <img src={img5} style={{width:'100%',height:150}}/>
                {/* </div> */}
                <div>
                  <h2 className="p-3 coursesBlog">Graphic Designing</h2>
                  <p className="text-muted p-3">
                    Accusantium quam, ultricies eget tempor id, aliquam eget
                    nibh et. Maecen aliquam, risus at semper ullamcorper, magna 
                    risus at semper ullamcorper, magna
                  </p>
                </div>
              </div>
              </section>
            </div>
            <div className="col-md-4">
            <section className="courseCard">
              <div className=" m-4 ">
                {/* <div className="round-icon"> */}
                <img src={img4} style={{width:'100%',height:150}}/>
                {/* </div> */}
                <div>
                  <h2 className="p-3 coursesBlog">CCNA</h2>
                  <p className="text-muted p-3">
                    Accusantium quam, ultricies eget tempor id, aliquam eget
                    nibh et. Maecen aliquam, risus at risus at semper ullamcorper, magna
                    semper ullamcorper, magna
                  </p>
                </div>
            
              </div>
              </section>
            </div>
       
          </div>
        </div>
      </div>
{/* END END END */}


{/* HUMAN AND TEXT  */}

<div className="container">
          {/* <h2 className="Heading mt-3 mb-3">Up Comming Projects</h2> */}
          <div className="row determineTxt">
            <div className="col-md-6 ">
            <img src={img7} style={{width:'100%',height:400}}/>
            </div>
            <div className="col-md-6 " >
            <p className="p-1 pText determineTxt" >
                    Determine the right learning path for you
                  </p>
                  <p className="p-1 pTextTwo">
                    Determine the right learning path for you
                    Determine the right learning path for you
                    Determine the right learning path for you
                    Determine the right learning path for you
                    Determine the right learning path for you
                    Determine the right learning path for you
                    Determine the right learning path for you
                    Determine the right learning path for you
                    Determine the right learning path for you
                    Determine the right learning path for you
                    Determine the right learning path for you
                    Determine the right learning path for you
                    Determine the right learning path for you
                    Determine the right learning path for you
                    Determine the right learning path for you
                    Determine the right learning path for you
                    Determine the right learning path for you
                    Determine the right learning path for you
                  </p>
</div>
            </div>
            </div>


            <div className="messagebox">
            <h5 >Leave a message or query here</h5>
            <textarea cols='60' rows='10' className="messageBoxTxt" />
            <p>

              <input type="text" id="author" name="author"  size="45" className="inptTxt"/>
              <label className='messageLabl'>Name *</label>
            </p>
            <p>

<input type="text" id="email" name="email"  size="45" className="inptTxtTwo"/>
<label className='messageLabl'>Email *</label>
</p>

<button className="messageBtn">Add Message</button>
</div>


            {/* <div className="container-fluid bg-dark text-white">
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-md-4">
                <img width="100%" src={logo} />
              </div>
            </div>
          </div>
        </div> */}

<BottomSide />
        
      </div>
        )
        }
        }