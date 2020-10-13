import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import MainHeader from "../components/Home/MainHeader";
import LinkLine from "../components/LinkLine";
import img6 from "../images/familyadop.jpg";
import wedding from '../images/wedding.jpg';
import CountUp from "react-countup";

export default class Welfare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ backgroundColor: "white", }}>
        {/* LinkLine Start*/}
        <LinkLine />
        {/* LinkLine End*/}

        {/* MainHeader Start*/}
        <MainHeader />
        {/* MainHeader End*/}



        <div className="container mt-6 " style={{ marginTop: 80 }}>
            
            <div className="p-3">
              <h1 className="Heading">Family Adoption</h1>
            </div>

            <div className="row">

                <div className="col-md-6">

              <img width='100%' src={img6} height='400px'/>
                </div>
                <div className="col-md-6  bg-white">
                    <p className="font-weight-bold text-capitalize text-left" style={{color:'dodgerblue',fontSize:26}}>Saylani has Adopted More then 8500 Families</p>
                  
                <div className=" text-left">
                  <p style={{fontSize:18}}>While we are always happy to lend a helping hand to individuals, helping a family live a dignified life is also important to us.
                     Our Family Adoption Program focuses on supporting the basic financial needs of adopted families based on their sizes.
                      We provide families with kitchen ration, pay their utility bills, house rent and school fees and finance any other daily needs they might have.
                     Today, we are proud to say that we have adopted more than 8,500 families and our wish is to support many more in the future.</p>
                </div>
                </div>
              </div>
              </div>

              <div className="container mt-6 " style={{ marginTop: 80 }}>
            
            <div className="p-3">
              <h1 className="Heading">Weddings Help</h1>
            </div>

            <div className="row">

                <div className="col-md-6">

              <img width='100%' src={wedding} height='400px'/>
                </div>
                <div className="col-md-6  bg-white">
                    <p className="font-weight-bold text-capitalize text-left" style={{color:'dodgerblue',fontSize:26}}>Saylani has arranged more then 7200 marraiges</p>
                  
                <div className=" text-left">
                  <p style={{fontSize:18}}>Weddings are a happy occasion for families and financial burdens should not be a damper.
                     Saylani helps needy families on this joyous occasion by providing financial assistance as well as giving them complete wedding packages 
                     including wedding arrangements, food, furniture and other household items. 
                    With more than 600 weddings financed every month, we continue to spread happiness during these precious moments.</p>
                </div>
                </div>
              </div>
              </div>




           

      </div>
    );
  }
}
