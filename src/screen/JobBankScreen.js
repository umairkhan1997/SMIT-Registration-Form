import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import JobBank from "../components/JobBank/index";
import MainHeader from "../components/Home/MainHeader";
import jobpic from '../images/jobbank.jpg'
import Footer from "../components/Footer";
export default class JobBankScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div >
    <MainHeader />
      <div style={{backgroundImage:`url(${jobpic})`}} className='back p-5'>
        <div style={{backgroundColor:'rgba(0,0,0,.5)'}} className='p-5'>
          <h1 className='p-3 text-white font-weight-bold'>Saylani  Job Bank</h1>
          <h3 className='text-white font-weight-bold'>Great Job</h3>
          <h3 className='text-white font-weight-bold' >Greater Talent</h3>
        </div>
      </div>
     <JobBank />
     <Footer />
     
</div>
    );
  }
}


