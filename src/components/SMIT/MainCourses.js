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
                  <div className="courseimg p-5">
                    {/* <img src={img5} width="100%" /> */}
                    <img width="100px" src={e.ico} />
                    <h3>{e.name}</h3>
                    <p className="text-muted">{e.duration}</p>
                  </div>
                </div>
              );
            })}
            <div className="col-md-8 p-4">
              <img className="courseimg" src={img5} width="100%" />
            </div>
            <div className="col-md-4 p-4 text-left">
              <h3 className="text-primary">
                Web And Mobile Application Development
              </h3>
              <ul className="p-3 text-muted">
                <li>HTML 5 & CSS3</li>
                {/* <li>CSS3</li> */}
                <li>JavaScript</li>
                <li>React & React Native</li>
                {/* <li></li> */}
                <li>Node JS & Express JS</li>
                <li>Mongo DB</li>
                {/* <li></li> */}
              </ul>
              <h4 className="border-top border-primary py-3">
                Duration: 1 Year
              </h4>
            </div>
          </div>
          <hr />
          {/* <div className="row">
            <div className="col-md-8 p-4">
              <img className="courseimg" src={img5} width="100%" />
            </div>
            <div className="col-md-4 p-4 text-left">
              <h3 className="text-primary">CCA</h3>
              <ul className="p-3 text-muted">
                <li>Quick Book</li>
                <li>PeachTree</li>
                <li>Excell</li>
              </ul>
              <h4 className="border-top border-primary py-3">
                Duration: 3 Months
              </h4>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-8 p-4">
              <img className="courseimg" src={img5} width="100%" />
            </div>
            <div className="col-md-4 p-4 text-left">
              <h3 className="text-primary">CCO</h3>
              <ul className="p-3 text-muted">
                <li>MS Word</li>
                <li>MS Excel</li>
                <li>MS PowerPoint</li>
                <li>MS Access</li>
              </ul>
              <h4 className="border-top border-primary py-3">
                Duration: 3 Months
              </h4>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-8 p-4">
              <img className="courseimg" src={img5} width="100%" />
            </div>
            <div className="col-md-4 p-4 text-left">
              <h3 className="text-primary">Graphic Designing</h3>
              <ul className="p-3 text-muted">
                <li>Adobe illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Urdu Inpage</li>
              </ul>
              <h4 className="border-top border-primary py-3">
                Duration: 6 Months
              </h4>
            </div>
          </div>
          <hr /> */}
        </div>
      </div>
    );
  }
}
