import React from "react";
import Teacher from "../components/sbil/teachers";
import Courses from "../components/sbil/courses";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";
import cover from "../images/cover2.png";

export default class SBIL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader />
        <div>
          <img src={cover} width="100%" />
        </div>
        <Teacher />
        <Courses />
        <Footer />
      </div>
    );
  }
}
