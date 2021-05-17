import React from "react";
import JobBank from "../components/JobBank/index";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";
import Navbar from "../smallcomponents/navbar";
export default class JobBankScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MainHeader />
        <Navbar />
        <JobBank />
        <Footer />
      </div>
    );
  }
}
