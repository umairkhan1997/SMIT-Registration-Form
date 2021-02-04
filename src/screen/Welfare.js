import React from "react";

import MainHeader from "../components/Home/MainHeader";
import Services from "../components/welfare/services";
import DataTable from "../components/welfare/data";
import Steps from "../components/welfare/steps";
import Footer from "../components/Footer";
import SideList from "../smallcomponents/sidelist";

export default class Welfare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [
        {
          listText: "Introduction",
          listIcon: "fas fa-door-open",
          id: "introTable",
        },
        {
          listText: "Services",
          listIcon: "fas fa-hands-helping",
          id: "welfareServices",
        },
        {
          listText: "Steps",
          listIcon: "fas fa-walking",
          id: "welfareSteps",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <SideList item={this.state.listItem} />
        <MainHeader />
        <DataTable />
        <Services />
        <Steps />
        <Footer />
      </div>
    );
  }
}
