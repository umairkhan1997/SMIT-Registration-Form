import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";
import ROLocation from "../components/RO_Plant/rolocation";
import ProjectCost from "../components/RO_Plant/projectcost";
import TableData from "../components/RO_Plant/tableData";
import Navbar from "../smallcomponents/navbar";
export default class ROplant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader />
        <Navbar />
        <TableData />
        <ProjectCost />
        <ROLocation />
        <Footer />
      </div>
    );
  }
}
