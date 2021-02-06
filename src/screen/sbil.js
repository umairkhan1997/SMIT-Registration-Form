import React from "react";
import Teacher from "../components/sbil/teachers";
import Courses from "../components/sbil/courses";
import MainHeader from "../components/Home/MainHeader";
import Footer from "../components/Footer";
import cover from "../images/cover2.png";
import Intro from "../components/sbil/intro";
import SideList from "../smallcomponents/sidelist";

export default class SBIL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [
        {
          listText: "Introduction",
          listIcon: "fas fa-door-open",
          id: "sbilIntroTable",
        },
        {
          listText: "Teacher",
          listIcon: "fas fa-chalkboard-teacher",
          id: "sbilTeacher",
        },
        {
          listText: "Courses",
          listIcon: "fas fa-book-open",
          id: "sbilCourses",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <SideList item={this.state.listItem} />
        <MainHeader />
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
