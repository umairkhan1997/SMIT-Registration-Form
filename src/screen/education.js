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


      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <table className="showtable">
              <tr>
                <td colspan="2">Quality Education For All</td>
              </tr>
              <tr>
                <td>Total Students</td>
                <td>1200+</td>
              </tr>

              <tr>
                <td>Total Campuses</td>
                <td>04 Campuses</td>
              </tr>
              <tr>
                <td>Total Faculty</td>
                <td>75+</td>
              </tr>
              <tr>
                <td>Total Pass Out</td>
                <td>2000+</td>
              </tr>
            </table>
          </div>
          <div className="col-md-6 p-2">
            <iframe
              width="100%"
              height="320"
              src="https://www.youtube.com/embed/N4DIjxCGWVc"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <Campus />
      <Teacher />
      {/* <Counter /> */}
      {/* <Faculty /> */}
      <Footer />
    </div>;
  }
}
