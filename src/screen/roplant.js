import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";
import ROLocation from "../components/RO_Plant/rolocation";
import ProjectCost from "../components/RO_Plant/projectcost";
import TableData from "../components/RO_Plant/tableData";
import SideList from "../smallcomponents/sidelist";

export default class ROplant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [
        {
          listText: "Introduction",
          listIcon: "fas fa-door-open",
          id: "roPlantIntro",
        },
        {
          listText: "Project Costing",
          listIcon: "far fa-money-bill-alt",
          id: "roPlantProjectCost",
        },
        {
          listText: "Location",
          listIcon: "fas fa-map-marked-alt",
          id: "roPlantLocation",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <SideList item={this.state.listItem} />
        <MainHeader />
        <TableData />
        <ProjectCost />
        <ROLocation />
        <Footer />
      </div>
    );
  }
}
