import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import '../App.css'

export default class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
  <>
  
  <div className="container-fluid" style={{backgroundColor:'#292825'}}>
  <div className="row d-flex justify-content-left" style={{paddingTop:50}}>
 
  <div className="col-md-2" >
  <h3 style={{color:'white'}}>Saylani Service</h3>
  {/* <ul>
  <li style={{color:'white'}}>Hajj Application Form</li>
  <li style={{color:'white'}}>Saylani Dastarkhwan</li>
  <li style={{color:'white'}}>Online Sadqa Form</li>
  <li style={{color:'white'}}>Saylani Job Bank</li>
  </ul> */}
   <div className='row' style={{marginLeft:25}}>
    <h6 style={{ fontSize: "1em",color:'gray',marginRight:10 }}>
                    {/* <i className="keyboard_arrow_right "></i> */}
                    <i className="material-icons">keyboard_arrow_right</i>
                  </h6>
   <h6 style={{color:'gray',textAlign:'left'}}>Hajj Application Form</h6>
   </div>
   <div className='row' style={{marginLeft:25}}>
    <h6 style={{ fontSize: "1em",color:'gray',marginRight:10 }}>
                    {/* <i className="keyboard_arrow_right "></i> */}
                    <i className="material-icons">keyboard_arrow_right</i>
                  </h6>
  <h6 style={{color:'gray',textAlign:'left'}}>Saylani Dastarkhwan</h6>
  </div>
  <div className='row' style={{marginLeft:25}}>
    <h6 style={{ fontSize: "1em",color:'gray',marginRight:10 }}>
                    {/* <i className="keyboard_arrow_right "></i> */}
                    <i className="material-icons">keyboard_arrow_right</i>
                  </h6>
                  <h6 style={{color:'gray',textAlign:'left'}}>Online Sadqa Form</h6>
  </div>
  <div className='row' style={{marginLeft:25}}>
    <h6 style={{ fontSize: "1em",color:'gray',marginRight:10 }}>
                    {/* <i className="keyboard_arrow_right "></i> */}
                    <i className="material-icons">keyboard_arrow_right</i>
                  </h6>
                  <h6 style={{color:'gray',textAlign:'left'}}>Saylani Job Bank</h6>
  </div>
  </div>
  <div className="col-md-2">
  <h3 style={{color:'white',marginLeft:-60}}>Education</h3>
  <div className='row' style={{marginLeft:25}}>
    <h6 style={{ fontSize: "1em",color:'gray',marginRight:10 }}>
                    {/* <i className="keyboard_arrow_right "></i> */}
                    <i className="material-icons">keyboard_arrow_right</i>
                  </h6>
   <h6 style={{color:'gray',textAlign:'left'}}>Saylani Mass IT</h6>
   </div>
   <div className='row' style={{marginLeft:25}}>
    <h6 style={{ fontSize: "1em",color:'gray',marginRight:10 }}>
                    {/* <i className="keyboard_arrow_right "></i> */}
                    <i className="material-icons">keyboard_arrow_right</i>
                  </h6>
  <h6 style={{color:'gray',textAlign:'left'}}>Saylani Incubation Center</h6>
  </div>
  <div className='row' style={{marginLeft:25}}>
    <h6 style={{ fontSize: "1em",color:'gray',marginRight:10 }}>
                    {/* <i className="keyboard_arrow_right "></i> */}
                    <i className="material-icons">keyboard_arrow_right</i>
                  </h6>
                  <h6 style={{color:'gray',textAlign:'left'}}>Saylani Green house</h6>
  </div>
  <div className='row' style={{marginLeft:25}}>
    <h6 style={{ fontSize: "1em",color:'gray',marginRight:10 }}>
                    {/* <i className="keyboard_arrow_right "></i> */}
                    <i className="material-icons">keyboard_arrow_right</i>
                  </h6>
                  <h6 style={{color:'gray',textAlign:'left'}}>Saylani Job Bank</h6>
  </div>
  </div>
  <div className="col-md-2">
  <h3 style={{color:'white'}}>Future Project</h3>
 
  <div className='row' style={{marginLeft:25}}>
    <h6 style={{ fontSize: "1em",color:'gray',marginRight:10 }}>
                    {/* <i className="keyboard_arrow_right "></i> */}
                    <i className="material-icons">keyboard_arrow_right</i>
                  </h6>
   <h6 style={{color:'gray',textAlign:'left'}}>Saylani University</h6>
   </div>
   <div className='row' style={{marginLeft:25}}>
    <h6 style={{ fontSize: "1em",color:'gray',marginRight:10 }}>
                    {/* <i className="keyboard_arrow_right "></i> */}
                    <i className="material-icons">keyboard_arrow_right</i>
                  </h6>
  <h6 style={{color:'gray',textAlign:'left'}}>Saylani City</h6>
  </div>
  
 
  </div>
 
  </div>
  </div>
  <div className="cotainer" style={{backgroundColor:'#242320',height:60}}>
  <h6 style={{paddingTop:20,color:'white'}}>Copyright © 2020 Saylani Welfare</h6>
  </div>
</>
      )
}
}