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
              detailName: "Web & Mobile App Development",
              duration: "1 Year",
              outline: [
                "HTML",
                "CSS",
                "Bootstrap",
                "Hosting",
                "Github",
                "JavaScript",
                "firebase",
                "ES6",
                "React JS",
                "Redux",
                "React Native",
                "Express/Node JS",
                "MongoDB",
              ],
              ico:
                "https://d3q6qq2zt8nhwv.cloudfront.net/course/458a308d42a149df91271f6b647eb085.png",
            },
            {
              name: "Graphic Designing",
              detailName: "Graphic Designing",
              duration: "6 Months",
              outline: ["Adobe Photoshop", "Adobe Illustrator", "Inpage"],
              ico:
                "https://www.walyou.com/wp-content/uploads/2009/10/3-d-rubiks-cube-is-a-combination-of-computer-applications1.jpg",
            },
            {
              name: "Video Editing",
              detailName: "Video Editing",
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
              detailName: "Cisco Certified Network Associate",
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
              detailName: "Cisco Certified Network Associate (Cyber Security)",
              duration: "6 Months",
              outline: [
                "Network Concepts",
                "Security Concepts",
                "Cryptography",
                "Host-Based Analysis",
                "Security Monitoring",
                "Attack Methods",
                "Endpoint Threat Analysis and Computer Forensics",
                "Network Intrusion Analysis",
                "Incident Response",
                "Data and Event Analysis",
                "Incident Handling",
              ],
              ico:
                "https://previews.123rf.com/images/stas11/stas111710/stas11171000033/88679415-cyber-security-icon-shield-with-lock-vector-illustration.jpg",
            },
            {
              name: "CCA",
              detailName: "Certified Computer Accountancy",
              duration: "3 Months",
              outline: ["PeachTree", "Tally", "Quick Book"],
              ico:
                "https://cdn2.iconfinder.com/data/icons/seo-web-optimization-ultimate-part1/512/graphics-512.png",
            },
            {
              name: "CCO",
              detailName: "Certified Computer Operaton",
              duration: "3 Months",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
              ico:
                "https://seeklogo.com/images/M/microsoft-project-logo-537F40B82B-seeklogo.com.png",
            },
            {
              name: "Cloud Native",
              detailName: "Cloud Native",
              duration: "1 Year",
              outline: [
                "Dockar",
                "Qubernities",
                "linux",
                "HTML",
                "CSS",
                "Bootstrap",
                "Hosting",
                "Github",
                "JavaScript",
                "firebase",
                "ES6",
                "React JS",
                "Redux",
                "React Native",
                "Express/Node JS",
                "MongoDB",
              ],
              ico:
                "https://www.paradymemanagement.com/wp-content/uploads/2020/02/icon06.png",
            },
            {
              name: "Internet of Things",
              detailName: "Internet of Things",
              duration: "1 Year",
              outline: [],
              moreOutline: {
                name1: "Quarter 1",
                name1Details: [
                  "Introduction to Internet of Things and Embedded Systems Basic Rust Programming",
                ],
                name2: "Quarter 2",
                name2Details: [
                  "Advanced Rust programming",
                  "Basic Embedded Rust programming",
                  "Advanced Embedded Rust programming",
                  "(We will learn how to write, build, flash and debug Embedded Rust on STM32F303)",
                ],
                name3: "Quarter 3",
                name3Details: [
                  "Rust Microservices",
                  "We will learn how to write down servers in Rust",
                  "Edge Computing",
                  "Dockers",
                  "Kubernetes",
                ],
                name4: "Quarter 4",
                name4Details: [
                  "Rust Microservices",
                  "We will learn how to write down servers in Rust",
                  "Edge Computing",
                  "Dockers",
                  "Kubernetes",
                ],
              },
              ico:
                "https://i.pinimg.com/originals/40/56/53/405653d4ba94244a15afec19e38de7d6.png",
            },
            {
              name: "Blockchain Technology",
              detailName: "Blockchain Technology",
              duration: "1 Year",
              outline: [
                "Digital Money, Bitcoin and Blockchain",
                "Crypto Tokens",
                "Blockchain Revolution",
                "Introduction to Decentralized Apps",
                "Ethereum and Hyperledger Fabric Basics",
                "Crypto Mining and Operations",
                "Introduction to Smart Contracts",
                "Solidity in Depth",
                "HTML, CSS, and JavaScriptCrash Course",
                "Blockchain WebApplications",
                "Web3 & Truffle",
                "BaaS (Blockchain-as-a-Service)",
                "The Art of Initial Coin Offering (ICO)",
                "Blockchain Projects for Islamic Finance -A Match Made in Heaven",
              ],
              ico:
                "https://cdn4.iconfinder.com/data/icons/blockchain-13/64/Blockchain-512.png",
            },
            {
              name: "Artificial Intelligence",
              detailName: "Artificial Intelligence",
              duration: "1 Year",
              outline: [
                "Object Oriented and Functional Programming using Python",
                "Advanced Python Libraries (Numpy , Pandas & Flask) with Anaconda",
                "Introduction to Linear Algebra and Statistics",
                "Data Science Essentials",
                "Nueral Networks",
                "Deep Learning with Keras",
                "Backend with TensorFlow",
                "Machine Learning",
              ],
              ico:
                "https://cdn2.iconfinder.com/data/icons/knowledge/512/electronic_brain-512.png",
            },
            {
              name: "Network Essential",
              detailName: "Network Essential",
              duration: "1 Year",
              outline: [
                "Introduction to Personal Computer Hardware",
                "PC Assembly",
                "Advance Computer Hardware",
                "Preventive Maintainance and Troubleshooting",
                "Networking Concepts",
                "Applied Networking",
                "Laptops and other Mobile Devices",
                "Printers",
                "Virtualization and Cloud Computing",
                "windows Installation",
                "windows Configuration",
                "Mobile, Linux, & OS X operating system",
                "Security",
                "The IT Professional",
              ],
              ico:
                "https://cdn2.iconfinder.com/data/icons/smashicons-the-essentials-webby-vol-3/55/197_-_Network_interaction_communication_essential-512.png",
            },
            {
              name: "Project Management",
              detailName: "Project Management",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
              ico:
                "https://icon-library.com/images/project-management-icon/project-management-icon-14.jpg",
            },
            {
              name: "Advance Dashboard Training",
              detailName: "Advance Dashboard Training",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
              ico:
                "https://icon-library.com/images/charts_analytics_kpi_dashboard_report_bar_pie-512.png",
            },
            {
              name: "Digital Marketing",
              detailName: "Digital Marketing",
              duration: "1 Year",
              outline: [
                "Digital Marketing Overview",
                "Website creation process",
                "Search Engine optimization",
                "PPC & Adwords Marketing",
                "Social Media Marketing",
                "Mobile Marketing",
                "Display Advertisement",
                "Email Marketing",
                "Lead Genertion",
                "ECommerce Marketing",
                "Affeliate Marketing",
                "Sales Funnels",
                "Google Analytics",
                "Blogging",
                "Freelancing",
                "Develop Online Ad Stretigy",
                "Make Mony from Droshipping",
                "Copywriting",
              ],
              ico:
                "https://nova.makerfaire.com/wp-content/uploads/sites/23/2016/06/services-icon-social-media-marketing.png",
            },
            {
              name: "Microsoft Office Specialist",
              detailName: "Microsoft Office Specialist",
              duration: "3 Months",
              outline: ["MS Word", "MS Excel", "MS PowerPoint", "MS Access"],
              ico:
                "https://office-365.co.uk/wp-content/uploads/2019/11/Office-365-logo-in-circle.png",
            },
            {
              name: "Robotics",
              detailName: "Robotics",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
              ico:
                "https://icon-library.com/images/robot-icon-free/robot-icon-free-10.jpg",
            },
            {
              name: "Database Administrator",
              detailName: "Database Administrator",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
              ico: "https://www.revalsys.com/images/DB-Icon-1.jpg",
            },
            {
              name: "Bike Repairing Course",
              detailName: "Certified Motor Bike Repairing Course",
              duration: "1 Year",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
              ico:
                "https://cdn4.iconfinder.com/data/icons/motorcycle-5/48/garage-workshop-motorcyle-repair-fix-mechanic-bike-512.png",
            },
            {
              name: "Mobile Repairing Course",
              detailName: "Certified Mobile Repairing Course",
              duration: "4 Months",
              outline: [
                "shorting clear (Half and full)",
                "LCD Replacement",
                "Charging jack",
                "Software Installation",
              ],
              ico:
                "https://thumbs.dreamstime.com/b/phone-repair-logo-vector-smart-phone-device-repair-symbol-phone-repair-logo-vector-smart-phone-device-repair-symbol-144302316.jpg",
            },
            {
              name: "RO Plant Technician",
              detailName: "Certified RO Plant Technician",
              duration: "3 Months",
              outline: ["MS Word", "MS Excel", "MS PowerPoint"],
              ico:
                "https://previews.123rf.com/images/nachai/nachai1809/nachai180900836/109877362-water-treatment-and-water-filter-icon-48x48-pixel-perfect-and-editable-stroke-.jpg",
            },
            {
              name: "Textile Training",
              detailName: "Certified Textile Training",
              duration: "40 Days",
              outline: [],
              moreOutline: {
                name1:
                  "Industrial Sewing Machine Operator - Duration one month",
                name1Details: [
                  "Overview of Garment and textile Industry",
                  "Standard operating procedures",
                  "Basic requirements of Quality",
                  "Machine Learning",
                  "Skill development and upgradation",
                  "Hands on experience of multiple sewing machineries",
                  "Stamina building",
                  "Career Counselling",
                ],
                name2: "Quality Checker - Duration one month",
                name2Details: [
                  "Overview of Garment and textile Industry",
                  "Standard operating procedures",
                  "Quality Standards and its Requirements",
                  "Clockwise Inspection Procedure",
                  "Defect Identification and Analysis",
                  "Defects Classification",
                  "Stamina Building",
                  "Career Counselling",
                ],
                name3: "Quality Auditor - Duration one month",
                name3Details: [
                  "Overview of Garment and textile Industry",
                  "Standard operating procedures",
                  "Quality Standards and its Requirements",
                  "Clockwise Inspection Procedure",
                  "Inspection Protocols",
                  "Defect Identification and Analysis",
                  "Defects Classification",
                  "Acceptable Quality Level",
                  "Defects Rate Analysis and Calculation",
                  "How to Measures",
                  "Stamina Building",
                  "Career Counselling",
                ],
              },

              ico: "https://ajsavjtextilehub.online/src/img/icon_flechten.png",
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
                  {this.state.currentCourse.detailName}
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
                  <hr />
                  {this.state.currentCourse.moreOutline ? (
                    <h6>{this.state.currentCourse.moreOutline.name1}</h6>
                  ) : null}
                  {this.state.currentCourse.moreOutline
                    ? this.state.currentCourse.moreOutline.name1Details.map(
                      (e, i) => {
                        return (
                          <li className="text-muted" key={i}>
                            {e}
                          </li>
                        );
                      }
                    )
                    : null}
                  <hr />
                  {this.state.currentCourse.moreOutline ? (
                    <h6>{this.state.currentCourse.moreOutline.name2}</h6>
                  ) : null}
                  {this.state.currentCourse.moreOutline
                    ? this.state.currentCourse.moreOutline.name2Details.map(
                      (e, i) => {
                        return (
                          <li className="text-muted" key={i}>
                            {e}
                          </li>
                        );
                      }
                    )
                    : null}
                  <hr />
                  {this.state.currentCourse.moreOutline ? (
                    <h6>{this.state.currentCourse.moreOutline.name3}</h6>
                  ) : null}
                  {this.state.currentCourse.moreOutline
                    ? this.state.currentCourse.moreOutline.name3Details.map(
                      (e, i) => {
                        return (
                          <li className="text-muted" key={i}>
                            {e}
                          </li>
                        );
                      }
                    )
                    : null}
                  <hr />
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
