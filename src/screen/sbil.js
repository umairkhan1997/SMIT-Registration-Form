import React from "react";
import Teacher from "../components/sbil/teachers";
import Courses from "../components/sbil/courses";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";
import cover from "../images/cover2.png";
import Intro from "../components/sbil/intro";

import Navbar from "../smallcomponents/navbar";
export default class SBIL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <MainHeader />
        <Navbar />
        <div>
          <img src={cover} width="100%" />
        </div>
        <Intro />
        <Teacher />
        <Courses />
        <Footer />
      </div>
    );
  }
}
