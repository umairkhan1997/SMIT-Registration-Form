import React from "react";
import "./home.css";
import teacher1 from "../../images/teachers/teacher1.png";
import teacher2 from "../../images/teachers/teacher2.png";
import teacher3 from "../../images/teachers/teacher3.png";
import teacher4 from "../../images/teachers/teacher4.png";
import teacher5 from "../../images/teachers/teacher5.png";
import teacher6 from "../../images/teachers/teacher6.png";

export default class Teacher extends React.Component {
  render() {
    return (
      <div id="teachers">
        <div className="py-5 bg-light">
          <div className="container py-5">
            <div>
              <h3 className="font-weight-bold">Teachers</h3>
              <p>Meet Professional Trainers</p>
            </div>
            <div className="row">
              <div className="col-md-3 my-3">
                <div className="teacherCard shadow bg-white">
                  <img width="100%" src={teacher2} />
                  <div className="text-left p-3">
                    <h5 className="font-weight-bold">Muhammad Nasir</h5>
                    {/* <p>Senior Faculty</p> */}
                    <p style={{ color: "#0a4b9f", fontWeight: "bold" }}>
                      FA<sub>1</sub>, FA<sub>2</sub>, & F<sub>3</sub>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="teacherCard shadow bg-white">
                  <img width="100%" src={teacher3} />
                  <div className="text-left p-3">
                    <h5 className="font-weight-bold">Sadiq Farooq</h5>
                    <p style={{ color: "#0a4b9f", fontWeight: "bold" }}>
                      MA<sub>1</sub>, MA<sub>2</sub>, & F<sub>2</sub>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="teacherCard shadow bg-white">
                  <img width="100%" src={teacher4} />
                  <div className="text-left p-3">
                    <h5 className="font-weight-bold">Sageer Muhammad</h5>
                    <p style={{ color: "#0a4b9f", fontWeight: "bold" }}>
                      F<sub>1</sub>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="teacherCard shadow bg-white">
                  <img width="100%" src={teacher1} />
                  <div className="text-left p-3">
                    <h5 className="font-weight-bold">Shahnawaz Ahmed</h5>
                    <p style={{ color: "#0a4b9f", fontWeight: "bold" }}>
                      F<sub>6</sub>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="teacherCard shadow bg-white">
                  <img width="100%" src={teacher5} />
                  <div className="text-left p-3">
                    <h5 className="font-weight-bold">Faizan Farooq</h5>
                    <p style={{ color: "#0a4b9f", fontWeight: "bold" }}>
                      F<sub>4</sub>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="teacherCard shadow bg-white">
                  <img width="100%" src={teacher6} />
                  <div className="text-left p-3">
                    <h5 className="font-weight-bold">Taha Popatiya</h5>
                    <p style={{ color: "#0a4b9f", fontWeight: "bold" }}>
                      F<sub>5</sub>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
