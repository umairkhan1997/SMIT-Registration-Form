import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import MainHeader from "../components/Home/MainHeader";
import welfare from "../images/welfare.jpg";
import Services from "../components/welfare/services";
import DataTable from "../components/welfare/data";
import Steps from "../components/welfare/steps";
import Footer from "../components/Footer";

export default class Welfare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MainHeader />
        <DataTable />
        <Services />
        <Steps />
        <Footer />
      </div>
    );
  }
}
