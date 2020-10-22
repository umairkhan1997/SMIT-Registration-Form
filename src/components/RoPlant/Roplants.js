import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import './Rop.css'

import img1 from '../../images/roplants.jpg'
export default class Roplants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
    
<div className='container-fluid mt-5'>
    <div className='row'>

    <div className='col-md-5'>
        <img src={img1} width='650px' height='400px' style={{marginLeft:50}}/>
    </div>
    <div className='col-md-7 text-left'  >
        <h1 style={{color:'#007bff',fontWeight:'bold',marginLeft:5}}>Saylani RO Plant</h1>
        <h3 style={{color:'#537d41',fontWeight:'bold',marginTop:20,marginLeft:5}}>Available 24/7 </h3>
        <p style={{width:'65%',marginTop:10 ,marginLeft:5}} className='font-weight-bold'>Access to clean water is a
         right that none of us should be forced to forego. Despite an abundant endowment Pakistan is one of the most water-stressed 
         countries in the world. Around 16 million people in Pakistan and trillions more around the world do not have access to clean water, 
        with countless being forced to drink unsafe water, die thirsty or suffer water borne diseases.</p>
        
    </div>


<div className='container-fluid mt-5 ml-5'>
        <h2 className=' font-weight-bold text-left' style={{color:'#007bff'}} >More About Saylani RO Plant</h2>
        <h6 className='mt-4 font-weight-bold text-left' style={{width:'90%',marginLeft:20}}>Clean water has the power to change lives. It is the road to building a better future with fewer water resulting diseases,
           healthier communities and richer lives in terms of quality. Saylani Welfare International Trust launched its ‘Saaf Pani Project’ 
           to ensure effective, sustainable, and easily accessible supply of safe drinking water to the marginalized communities. Our aim is 
           that no person should live without access to this most basic human need. 
          This is achieved by drilling water-wells, installing RO (Reverse Osmosis) plants, and installing water chillers in deserving areas.</h6>
        <h6 className='mt-3 font-weight-bold text-left' style={{width:'90%',marginLeft:20}} >So far over 100 RO plants have been installed, about 
        150 water wells have been dug and approximately 1,000 water 
        chillers have been installed by Saylani throughout Pakistan. Our aim is to install 100 new RO plants across the nation.</h6> 
                <h6 className='mt-3 font-weight-bold text-left' style={{width:'90%',marginLeft:20}}>We have also signed MOU with Sindh Rangers,
                 Sindh Police, Mayor Karachi and Commissioner Karachi for association in installation of RO plants.
</h6>

</div>
    </div>

</div>

      </div>
    );
  }
}


