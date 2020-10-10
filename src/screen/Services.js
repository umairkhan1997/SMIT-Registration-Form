import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import '../App.css';
import MainHeader from '../components/Home/MainHeader'




export default class Services extends React.Component {
    constructor(props) {
      super(props);
      this.state = {navBackground:'transparent',navbarStat:'absolute',topStat:20};
    }

  


    render() {
        return (
            <div>
<MainHeader />
<div className="container-fluid" >

<h1 className="pt-4" style={{color:'dodgerblue'}}><strong>Projects - Services</strong></h1>
<p style={{color:'gray',fontSize:18,marginTop:40}}>In order to help you , our carefully selected experts can advise you in in the following areas:</p>
</div>

<div className="container-fluid" >



<div className='row d-flex justify-content-center' style={{marginTop:60}}>
          


            <div className="col-md-3 p-3">
              <div className="small" style={{borderColor:"dodgerblue"}}>
                <p style={{ fontSize: "3.5em" }}>
                  <i class="fas fa-donate" style={{color:"dodgerblue"}}></i>
                </p>
                <p style={{ fontSize: "1.5em" ,color:"dodgerblue"}}>Online Sadqa</p>
              </div>
            </div>
            <div className="col-md-3 p-3" >
              <a href="smit">
                  <div className="small" style={{borderColor:"dodgerblue"}} >
                <p style={{ fontSize: "3.5em" }}>
                  <i class="fas fa-laptop-code" style={{color:"dodgerblue"}}></i>
                </p>
                <p style={{ fontSize: "1.5em" ,color:"dodgerblue"}}>Saylani Mass IT</p>
              </div>
                  </a>
            </div>
            <div className="col-md-3 p-3">
              <div className="small" style={{borderColor:"dodgerblue"}} >
                <p style={{ fontSize: "3.5em" }}>
                  <i class="fas fa-school" style={{color:"dodgerblue"}}></i>
                </p>
                <p style={{ fontSize: "1.5em" ,color:"dodgerblue"}}>Incubation center</p>
              </div>
            </div>
            <div className="col-md-3 p-3" >
            <a href="welfare">
              <div className="small" style={{borderColor:"dodgerblue"}}>
                <p style={{ fontSize: "3.5em" }}>
                  <i class="fas fa-people-arrows" style={{color:"dodgerblue"}}></i>
                </p>
                <p style={{ fontSize: "1.5em",color:'dodgerblue' }}>Welfare</p>
              </div>
              </a>
            </div>
            <div className="col-md-3 p-3">
              <div className="small" style={{borderColor:"dodgerblue"}}>
                <p style={{ fontSize: "3.5em" }}>
                  <i class="fas fa-hand-holding-medical" style={{color:"dodgerblue"}}></i>
                </p>
                <p style={{ fontSize: "1.5em",color:"dodgerblue" }}>Medical</p>
              </div>
            </div>
            <div className="col-md-3 p-3">
              <div className="small"style={{borderColor:"dodgerblue"}}>
                <p style={{ fontSize: "3.5em" }}>
                  <i class="fas fa-utensils"style={{color:"dodgerblue"}}></i>
                </p>
                <p style={{ fontSize: "1.5em",color:"dodgerblue" }}>Dasterkhwan</p>
              </div>
            </div>
            <div className="col-md-3 p-3">
              <div className="small" style={{borderColor:"dodgerblue"}}>
                <p style={{ fontSize: "3.5em" }}>
                  <i class="fas fa-faucet" style={{color:"dodgerblue"}}></i>
                </p>
                <p style={{ fontSize: "1.5em",color:"dodgerblue" }}>RO Plant</p>
              </div>
            </div>
            <div className="col-md-3 p-3">
              <div className="small" style={{borderColor:"dodgerblue"}}>
                <p style={{ fontSize: "3.5em" }}>
                  <i class="fas fa-book-open" style={{color:"dodgerblue"}}></i>
                </p>
                <p style={{ fontSize: "1.5em",color:"dodgerblue" }}>Education</p>
              </div>
            </div>
            <div className="col-md-3 p-3">
              <div className="small"style={{borderColor:"dodgerblue"}}>
                <p style={{ fontSize: "3.5em" }}>
                  <i class="fas fa-user-md"style={{color:"dodgerblue"}}></i>
                </p>
                <p style={{ fontSize: "1.5em",color:"dodgerblue" }}>Job Bank</p>
              </div>
            </div>
            <div className="col-md-3 p-3">
              <div className="small" style={{borderColor:"dodgerblue"}}>
                <p style={{ fontSize: "3.5em" }}>
                  <i class="fas fa-store-alt" style={{color:"dodgerblue"}}></i>
                </p>
                <p style={{ fontSize: "1.5em",color:"dodgerblue" }}>Books Store</p>
              </div>
            </div>
            <div className="col-md-3 p-3">
              <div className="small" style={{borderColor:"dodgerblue"}}>
                <p style={{ fontSize: "3.5em" }}>
                  <i class="fas fa-mosque" style={{color:"dodgerblue"}}></i>
                </p>
                <p style={{ fontSize: "1.5em",color:"dodgerblue" }}>Online Masjid</p>
              </div>
            </div>
            <div className="col-md-3 p-3">
              <div className="small" style={{borderColor:"dodgerblue"}}>
                <p style={{ fontSize: "3.5em" }}>
                  <i class="fas fa-quran" style={{color:"dodgerblue"}}></i>
                </p>
                <p style={{ fontSize: "1.5em",color:"dodgerblue" }}>Online Taweezat / Istekhara</p>
              </div>
            </div>

      
</div>



</div>

            </div>

        )
    }
}