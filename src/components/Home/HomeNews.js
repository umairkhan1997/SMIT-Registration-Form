import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import './Home.css'
import img1 from '../../images/gray-background.jpg'
import img6 from "../../images/president.jpeg";
import img2 from '../../images/govern.jpg';
export default class HomeNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <>

        <div className="container-fluid" style={{backgroundColor:'#aaacab',backgroundImage:img1,height:'100%'}}>

        <h1 className="pt-4 " style={{color:'white'}}><strong>News</strong></h1>
     
        <div className="d-flex justify-content-center" style={{marginTop:100}}>
        <div className="col-md-3" >
        <section className="courseCard"  >
     
        <img src={img2} style={{width:'100%',height:200,}}/>
        <div className="recentpOst"></div>
                     <p style={{fontSize:24,fontWeight:"bold",textAlign:"left",padding:15}}>Mr. Mohammad Sarwar Governer of Punjab </p>
                     <p className="text-muted" style={{fontSize:18,fontWeight:"bold",textAlign:"left",padding:15}}>On 21 Sep,2020 Hazrat Moulana Bashir Sahab Visit Punjab Governer of to meet Mr. Mohammad Sarwar Governer of Punjab .</p>
         
        </section>
        </div>
                  <div className="col-md-3 " >
        <section className="courseCard" 
       //style={{height:500}}
       >
     
       <img src={img6} style={{width:'100%',height:200,}}/>
       <div className="recentpOst"></div>
                    <p style={{fontSize:24,fontWeight:"bold",textAlign:"left",padding:15}}>Dr. Arif Alvi (President of Pakistan)</p>
                    <p className="text-muted" style={{fontSize:18,fontWeight:"bold",textAlign:"left",padding:15}}>On 23 Feb,2020 Dr. Arif Alvi (President of Pakistan) Visit Saylani Welfare Head Office .</p>
       </section>
       </div>
     
       <div className="col-md-3">
       <section className="courseCard" >
     
       <img src={img2} style={{width:'100%',height:200,}}/>
       <div className="recentpOst"></div>
                    <p style={{fontSize:24,fontWeight:"bold",textAlign:"left",padding:15}}>Mr. Mohammad Sarwar Governer of Punjab </p>
                    <p className="text-muted" style={{fontSize:18,fontWeight:"bold",textAlign:"left",padding:15}}>On 21 Sep,2020 Hazrat Moulana Bashir Sahab Visit Punjab Governer of to meet Mr. Mohammad Sarwar Governer of Punjab .</p>
         
       </section>
       </div>
     
     
     
       </div>
     
     
     
     <div className="d-flex justify-content-center" style={{}}>
       <button type="button" className="btn donateBtn2 rounded" >Show More</button>
     </div>
     
     
       </div>


  </>
        );
    }
  }
  