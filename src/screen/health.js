import React from "react";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";
import Navbar from "../smallcomponents/navbar";
import HealthDetails from "../components/health/healthDetail";

export default class Health extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MainHeader />
        <Navbar />
        <HealthDetails />
        <Footer />
      </div>
    );
  }
}
