import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import JobBank from "../components/JobBank/index";
import MainHeader from "../components/Home/MainHeader";
import jobpic from "../images/jobbank.jpg";
import Footer from "../components/Footer";
export default class JobBankScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MainHeader />
        <JobBank />
        <Footer />
      </div>
    );
  }
}
