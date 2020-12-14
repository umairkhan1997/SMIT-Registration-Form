import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./SmitStyle.css";
import img4 from "../../images/course.jpg";
import img5 from "../../images/course1.jpeg";
export default class MainCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Karachi",
      cityDetails: {
        karachi: {
          course: [
            {
              name: "Web & Mobile App Development",
              duration: "1 Year",
              outline: [
                "HTML",
                "CSS",
                "Javascript",
                "React JS",
                "React Native",
                "Mongo DB",
                "Node JS",
                "Express JS",
              ],
              ico:
                "https://d3q6qq2zt8nhwv.cloudfront.net/course/458a308d42a149df91271f6b647eb085.png",
            },
            {
              name: "Graphic Designing",
              duration: "6 Months",
              outline: ["Adobe Photoshop", "Adobe Illustrator", "Inpage"],
              ico:
                "https://www.walyou.com/wp-content/uploads/2009/10/3-d-rubiks-cube-is-a-combination-of-computer-applications1.jpg",
            },
            {
              name: "Video Editing",
              duration: "6 Months",
              outline: [
                "Adobe Premier",
                "Adobe After Effect",
                "Adobe Audition",
              ],
              ico:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKM5b7dfBqAQ1yRviEKSJ_DaTWVMFu9HrMw&usqp=CAU",
            },
            {
              name: "CCNA (R&S)",
              duration: "6 Months",
              outline: [
                "Network fundamentals",
                "LAN switching technologies",
                "IPv4 and IPv6 routing technologies",
                "WAN technologies",
                "Infrastructure services",
                "Infrastructure security",
                "Infrastructure management",
              ],
              ico:
                "https://www.clipartkey.com/mpngs/m/87-871720_clip-art-cisco-switch-icons-network-switch-logo.png",
            },
            {
              name: "CCNA (Cyber Security)",
              duration: "6 Months",
              outline: [
                "Adobe Premier",
                "Adobe After Effect",
                "Adobe Audition",
              ],
              ico:
                "https://previews.123rf.com/images/stas11/stas111710/stas11171000033/88679415-cyber-security-icon-shield-with-lock-vector-illustration.jpg",
            },
            {
              name: "CCA",
              duration: "3 Months",
              outline: ["PeachTree", "Tally", "Quick Book"],
              ico:
                "https://cdn2.iconfinder.com/data/icons/seo-web-optimization-ultimate-part1/512/graphics-512.png",
            },
            {
              name: "CCO",
              duration: "3 Months",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
              ico:
                "https://seeklogo.com/images/M/microsoft-project-logo-537F40B82B-seeklogo.com.png",
            },
            {
              name: "Cloud Native",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
              ico:
                "https://www.paradymemanagement.com/wp-content/uploads/2020/02/icon06.png",
            },
            {
              name: "Internet of Things",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
              ico:
                "https://i.pinimg.com/originals/40/56/53/405653d4ba94244a15afec19e38de7d6.png",
            },
            {
              name: "Blockchain Technology",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
              ico:
                "https://cdn4.iconfinder.com/data/icons/blockchain-13/64/Blockchain-512.png",
            },
            {
              name: "Artificial Intelligence",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
              ico:
                "https://cdn2.iconfinder.com/data/icons/knowledge/512/electronic_brain-512.png",
            },
            {
              name: "Network Essential",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
            },
            {
              name: "Cisco Certified Network Associate",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
            },
            {
              name: "Project Management",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
            },
            {
              name: "Advance Dashboard Training",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
            },
            {
              name: "Digital Marketing",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
            },
            {
              name: "Microsoft Office Specialist",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
            },
            {
              name: "Robotics",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
            },
            {
              name: "Database Administrator",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
            },
            {
              name: "Certified Motor Bike Reapairing Course",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
            },
            {
              name: "Certified Mobile Repairing Course",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
            },
            {
              name: "Certified RO Plant Technician",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
            },
            {
              name: "Certified Textile Training",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
            },
          ],
        },
        hyderabad: {
          course: [],
        },
        faisalabad: {
          course: [],
        },
        islamabad: {
          course: [],
        },
      },
      currentCourse: {
        name: "Certified Textile Training",
        duration: "1 Year",
        outline: ["MS Word", "MS Excel", "MS PowerPoint"],
      },
    };
  }
  render() {
    const { cityDetails } = this.state;
    // console.log(cityDetails.karachi.course.length);
    return (
      <div>
        <div className="container pt-5 pb-5 ">
          <h2 className="p-3" style={{ color: "#1371b8" }}>
            Discover Courses Developed by Saylani Mass IT
          </h2>
        </div>
        <div className="container pb-5 ">
          <div className="row">
            {cityDetails.karachi.course.map((e, i) => {
              return (
                <div className="col-md-4 text-center p-4">
                  <div
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    className="courseimg p-5"
                    onClick={() => this.setState({ currentCourse: e })}
                  >
                    {/* <img src={img5} width="100%" /> */}
                    <img width="100px" src={e.ico} />
                    <h3>{e.name}</h3>
                    <p className="text-muted">{e.duration}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
        </div>
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div
                style={{ backgroundColor: "#0267b4", color: "white" }}
                class="modal-header"
              >
                <h5 class="modal-title" id="exampleModalLongTitle">
                  {this.state.currentCourse.name}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h4 style={{ color: "#0267b4" }}>Duration</h4>
                <p className="text-muted">
                  {this.state.currentCourse.duration}
                </p>
                <hr />
                <h4 style={{ color: "#0267b4" }}>Course Outline</h4>
                <ul>
                  {this.state.currentCourse.outline.map((e, i) => {
                    return (
                      <li className="text-muted" key={i}>
                        {e}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div class="modal-footer">
                <button type="button" class="prevbtn" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
