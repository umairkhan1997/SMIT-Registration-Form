import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import Teacher from '../components/schools/teacher';
import Counter from '../components/schools/studentsCounter';
import Faculty from '../components/schools/faculty';
import Campus from '../components/schools/campus';
import Footer from '../components/Footer';


export default class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>
        <MainHeader />
        <Teacher />
        <Counter />
        <Faculty />
        <Campus />
        <Footer />
    </div>;
  }
}
