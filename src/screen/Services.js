import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import logo from "../images/logo.png";
import '../App.css';
import $ from 'jquery';
import { Zoom } from "react-slideshow-image";



export default class Services extends React.Component {
    constructor(props) {
      super(props);
      this.state = {navBackground:'transparent',navbarStat:'absolute',topStat:20};
    }

  


    render() {
        return (
            <div>

<div className="container-fluid" >

<h1 className="pt-4" style={{color:'black'}}><strong>Services</strong></h1>
<p style={{color:'gray',fontSize:18}}>In order to help you , our carefully selected experts can advise you in in the following areas:</p>
</div>

<div className="container-fluid" >



<div className='row' style={{marginTop:100}}>
            <div className="col-md-4">
                <h1>sdadasd</h1>
                <h1>sdadasd</h1>
                <h1>sdadasd</h1>
            </div>
            <div className="col-md-4">
                <h1>sdadasd</h1>
                <h1>sdadasd</h1>
                <h1>sdadasd</h1>
            </div>
            <div className="col-md-4">
                <h1>sdadasd</h1>
                <h1>sdadasd</h1>
                <h1>sdadasd</h1>
            </div>
</div>



</div>

            </div>

        )
    }
}