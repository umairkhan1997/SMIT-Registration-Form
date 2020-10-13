import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import MainHeader from "../components/Home/MainHeader";
import LinkLine from "../components/LinkLine";
import img6 from "../images/familyadop.jpg";
import CountUp from "react-countup";

export default class Welfare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ backgroundColor: "#f0f0f0" }}>
        {/* LinkLine Start*/}
        <LinkLine />
        {/* LinkLine End*/}

        {/* MainHeader Start*/}
        <MainHeader />
        {/* MainHeader End*/}

        <div className="container mt-6 " style={{ marginTop: 100 }}>
          <div className="p-3">
            <h1 className="Heading">Family Adoption</h1>
          </div>
          <div className="row">
            <div className="col-md-12">
              <section className="row courseCard" >
                <img src={img6} style={{ width: "40%", height: "100%" }} />
                <div>
                  <div className="row justify-content-between">
                    <div>
                      <h4
                        className=""
                        style={{
                          color: "#d43c18",
                          marginLeft: 40,
                          marginTop: 20,
                        }}
                      >
                        Saylani Welfare has Adopted more then{" "}
                      </h4>
                      {/* <h6 style={{textAlign:'left',marginLeft:40}}>While we are always happy to lend a helping hand to individuals, helping a </h6>
                      <h6 style={{textAlign:'left',marginLeft:40}}>family live a dignified life is also important to us. Our Family Adoption </h6>
                      <h6 style={{textAlign:'left',marginLeft:40}}>Program focuses on supporting the basic financial needs of adopted families </h6>
                      <h6 style={{textAlign:'left',marginLeft:40}}>based on their sizes. We provide families with kitchen ration, pay their utility </h6>
                      <h6 style={{textAlign:'left',marginLeft:40}}>bills, house rent and school fees and finance any other daily needs they might </h6>
                      <h6 style={{textAlign:'left',marginLeft:40}}>have. Today, we are proud to say that we have adopted more than 8,500 families</h6>
                      <h6 style={{textAlign:'left',marginLeft:40}}>and our wish is to support many more in the future.</h6> */}
                        <h6 style={{textAlign:'left',marginLeft:40}}>While we are always happy to lend a helping hand </h6>
                      <h6 style={{textAlign:'left',marginLeft:40}}>to individuals, helping a family live a dignified</h6>
                      <h6 style={{textAlign:'left',marginLeft:40}}>life is also important to us. Our Family Adoption</h6>
                      <h6 style={{textAlign:'left',marginLeft:40}}>Program focuses on supporting the basic financial </h6>
                      <h6 style={{textAlign:'left',marginLeft:40}}>needs of adopted families based on their sizes. We </h6>
                      <h6 style={{textAlign:'left',marginLeft:40}}>provide lies with kitchen ration, pay their utility</h6>
                      <h6 style={{textAlign:'left',marginLeft:40}}>bills, house rent and school fees and finance </h6>
                      <h6 style={{textAlign:'left',marginLeft:40}}>any other daily needs they might have. Today, we </h6>
                      <h6 style={{textAlign:'left',marginLeft:40}}>are proud to say that we have adopted more than 8,500 </h6>
                      <h6 style={{textAlign:'left',marginLeft:40}}>families and our wish is to support many more in the future. </h6>
                    </div>
                    <div
                      style={{ marginLeft: 20, marginTop: 30,backgroundColor:'#f0f0f0' }}
                      className="countDivWel"
                    >
                      <CountUp
                        style={{ fontSize: "2.5em", color: "#d43c18" }}
                        start={1000}
                        end={8500}
                        duration={4}
                      />
                      {" Families"}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

{/* <Wedding Help ></Wedding> */}


        <div className="container mt-6 " style={{ marginTop: 100 }}>
          <div className="p-3">
            <h1 className="Heading">Weddings Help</h1>
          </div>
          <div className="row">
            <div className="col-md-12">
              <section className="row courseCard" >
                <img src={img6} style={{ width: "30%", height: 250 }} />
                <div>
                  <div className="row justify-content-between">
                    <div>
                      <h2
                        className=""
                        style={{
                          color: "#d43c18",
                          marginLeft: 40,
                          marginTop: 20,
                          textAlign:'left'
                        }}
                      >
                        Saylani welfare financed yearly {" "}
                      </h2>
                      <h6 style={{textAlign:'left',marginLeft:40}}>Weddings are a happy occasion for families and financial burdens. Saylani helps</h6>
                      <h6 style={{textAlign:'left',marginLeft:40}}>needy families on this joyous occasion by providing financial assistance as well</h6>
                      <h6 style={{textAlign:'left',marginLeft:40}}>as giving them complete wedding packages including wedding arrangements, food</h6>
                      <h6 style={{textAlign:'left',marginLeft:40}}>furniture and other household items. With more than 600 weddings financed every </h6>
                      <h6 style={{textAlign:'left',marginLeft:40}}>month,  we continue to spread happiness during these precious moments </h6>
                    </div>
                    <div
                      style={{ marginLeft: 20, marginTop: 30 }}
                      className="countDivWel"
                    >
                      <CountUp
                        style={{ fontSize: "2.5em", color: "#d43c18" }}
                        start={1000}
                        end={7200}
                        duration={4}
                      />
                      {" Weddings"}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        
        <div className="container mt-6 " style={{ marginTop: 100 }}>
          
          <div className="p-3">
            <h1 className="Heading">Weddings Help</h1>
          </div>

          <div className="row">

              <div className="col-md-6">

            <img width='100%' src={img6} />
              </div>
              <div className="col-md-6 row bg-white">
              <div className="col-md-9">
                <p>asdasdddddddddddddd sadjhasdkgask skdhkashd kd asdasdddddddddddddd sadjhasdkgask skdhkashd kd asdasdddddddddddddd sadjhasdkgask skdhkashd kd</p>
              </div>
                <div className="col-md-3">
                <div
                      style={{ marginLeft: 20, marginTop: 30 }}
                      className="countDivWel"
                    >
                      <CountUp
                        style={{ fontSize: "2.5em", color: "#d43c18" }}
                        start={1000}
                        end={7200}
                        duration={4}
                      />
                      {" Weddings"}
                    </div>
                </div>
              </div>
            </div>
            </div>

      </div>
    );
  }
}
