import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./SmitStyle.css";
// import img4 from "../../images/course.jpg";
// import img5 from "../../images/course1.jpeg";
export default class MainCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Karachi",
      cityDetails: {
        karachi: {
          course: [

            //course one
            {
              name: "Web & Mobile App Development",
              detailName: "Web & Mobile App Development",
              duration: "1 Year",
              outline: [
                {
                  name: "HTML",
                  nameDetails: []
                },
                {
                  name: "CSS",
                  nameDetails: []
                },
                {
                  name: "Bootstrap",
                  nameDetails: []
                },
                {
                  name: "Hosting",
                  nameDetails: []
                },
                {
                  name: "Github",
                  nameDetails: []
                },
                {
                  name: "JavaScript",
                  nameDetails: []
                },
                {
                  name: "firebase",
                  nameDetails: []
                },
                {
                  name: "ES6",
                  nameDetails: []
                },
                {
                  name: "React JS",
                  nameDetails: []
                },
                {
                  name: "Redux",
                  nameDetails: []
                },
                {
                  name: "React Native",
                  nameDetails: []
                },
                {
                  name: "Express/Node JS",
                  nameDetails: []
                },
                {
                  name: "MongoDB",
                  nameDetails: []
                }
              ],
              ico:
                "https://d3q6qq2zt8nhwv.cloudfront.net/course/458a308d42a149df91271f6b647eb085.png",
            },
            {
              name: "Graphic Designing",
              detailName: "Graphic Designing",
              duration: "6 Months",
              outline: [{ name: "Adobe Photoshop", nameDetails: [] }, { name: "Adobe Illustrator", nameDetails: [] }, { name: "Inpage", nameDetails: [] }],
              ico:
                "https://www.walyou.com/wp-content/uploads/2009/10/3-d-rubiks-cube-is-a-combination-of-computer-applications1.jpg",
            },
            {
              name: "Video Editing",
              detailName: "Video Editing",
              duration: "6 Months",
              outline: [
                { name: "Adobe Premier", nameDetails: [] },
                { name: "Adobe After Effect", nameDetails: [] },
                { name: "Adobe Audition", nameDetails: [] }
              ],
              ico:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKM5b7dfBqAQ1yRviEKSJ_DaTWVMFu9HrMw&usqp=CAU",
            },
            {
              name: "CCNA (R&S)",
              detailName: "Cisco Certified Network Associate",
              duration: "6 Months",
              outline: [
                { name: "Network fundamentals", nameDetails: [] },
                { name: "LAN switching technologies", nameDetails: [] },
                { name: "IPv4 and IPv6 routing technologies", nameDetails: [] },
                { name: "WAN technologies", nameDetails: [] },
                { name: "Infrastructure services" },
                { name: "Infrastructure security", nameDetails: [] },
                { name: "Infrastructure management", nameDetails: [] },
              ],
              ico:
                "https://www.clipartkey.com/mpngs/m/87-871720_clip-art-cisco-switch-icons-network-switch-logo.png",
            },
            {
              name: "CCNA (Cyber Security)",
              detailName: "Cisco Certified Network Associate (Cyber Security)",
              duration: "6 Months",
              outline: [
                { name: "Network Concepts", nameDetails: [] },
                { name: "Security Concepts", nameDetails: [] },
                { name: "Cryptography", nameDetails: [] },
                { name: "Host-Based Analysis", nameDetails: [] },
                { name: "Security Monitoring", nameDetails: [] },
                { name: "Attack Methods", nameDetails: [] },
                { name: "Endpoint Threat Analysis and Computer Forensics", nameDetails: [] },
                { name: "Network Intrusion Analysis", nameDetails: [] },
                { name: "Incident Response", nameDetails: [] },
                { name: "Data and Event Analysis", nameDetails: [] },
                { name: "Incident Handling", nameDetails: [] },
              ],
              ico:
                "https://previews.123rf.com/images/stas11/stas111710/stas11171000033/88679415-cyber-security-icon-shield-with-lock-vector-illustration.jpg",
            },
            {
              name: "CCA",
              detailName: "Certified Computer Accountancy",
              duration: "3 Months",
              outline: [{ name: "PeachTree", nameDetails: [] }, { name: "Tally", nameDetails: [] }, { name: "Quick Book", nameDetails: [] }
              ],
              ico:
                "https://cdn2.iconfinder.com/data/icons/seo-web-optimization-ultimate-part1/512/graphics-512.png",
            },
            {
              name: "CCO",
              detailName: "Certified Computer Operaton",
              duration: "3 Months",
              outline: [{ name: "MS Word", nameDetails: [] }, { name: "MS Excel", nameDetails: [] }, { name: "MS PowerPoint", nameDetails: [] }],
              ico:
                "https://seeklogo.com/images/M/microsoft-project-logo-537F40B82B-seeklogo.com.png",
            },
            {
              name: "Cloud Native",
              detailName: "Cloud Native",
              duration: "1 Year",
              outline: [
                { name: "Dockar", nameDetails: [] },
                { name: "Qubernities", nameDetails: [] },
                { name: "linux", nameDetails: [] },
                { name: "HTML", nameDetails: [] },
                { name: "CSS", nameDetails: [] },
                { name: "Bootstrap", nameDetails: [] },
                { name: "Hosting", nameDetails: [] },
                { name: "Github", nameDetails: [] },
                { name: "JavaScript", nameDetails: [] },
                { name: "firebase", nameDetails: [] },
                { name: "ES6", nameDetails: [] },
                { name: "React JS", nameDetails: [] },
                { name: "Redux", nameDetails: [] },
                { name: "React Native", nameDetails: [] },
                { name: "Express/Node JS", nameDetails: [] },
                { name: "MongoDB", nameDetails: [] },
              ],
              ico:
                "https://www.paradymemanagement.com/wp-content/uploads/2020/02/icon06.png",
            },

            {
              name: "Internet of Things",
              detailName: "Internet of Things",
              duration: "1 Year",
              outline: [{
                name: "Quarter 1",
                nameDetails: [
                  "Introduction to Internet of Things and Embedded Systems Basic Rust Programming",
                ]
              },
              {
                name: "Quarter 2",
                nameDetails: [
                  "Advanced Rust programming",
                  "Basic Embedded Rust programming",
                  "Advanced Embedded Rust programming",
                  "(We will learn how to write, build, flash and debug Embedded Rust on STM32F303)",
                ]
              },
              {
                name: "Quarter 3",
                nameDetails: [
                  "Rust Microservices",
                  "We will learn how to write down servers in Rust",
                  "Edge Computing",
                  "Dockers",
                  "Kubernetes",
                ]
              },
              {
                name: "Quarter 4",
                nameDetails: [
                  "Rust Microservices",
                  "We will learn how to write down servers in Rust",
                  "Edge Computing",
                  "Dockers",
                  "Kubernetes",
                ]
              },
              ],
              ico:
                "https://i.pinimg.com/originals/40/56/53/405653d4ba94244a15afec19e38de7d6.png",
            },
            {
              name: "Blockchain Technology",
              detailName: "Blockchain Technology",
              duration: "1 Year",
              outline: [
                { name: "Digital Money, Bitcoin and Blockchain", nameDetails: [] },
                { name: "Crypto Tokens", nameDetails: [] },
                { name: "Blockchain Revolution", nameDetails: [] },
                { name: "Introduction to Decentralized Apps", nameDetails: [] },
                { name: "Ethereum and Hyperledger Fabric Basics", nameDetails: [] },
                { name: "Crypto Mining and Operations", nameDetails: [] },
                { name: "Introduction to Smart Contracts", nameDetails: [] },
                { name: "Solidity in Depth", nameDetails: [] },
                { name: "HTML, CSS, and JavaScriptCrash Course", nameDetails: [] },
                { name: "Blockchain WebApplications", nameDetails: [] },
                { name: "Web3 & Truffle", nameDetails: [] },
                { name: "BaaS (Blockchain-as-a-Service)", nameDetails: [] },
                { name: "The Art of Initial Coin Offering (ICO)", nameDetails: [] },
                { name: "Blockchain Projects for Islamic Finance -A Match Made in Heaven", nameDetails: [] },
              ],
              ico:
                "https://cdn4.iconfinder.com/data/icons/blockchain-13/64/Blockchain-512.png",
            },
            {
              name: "Artificial Intelligence",
              detailName: "Artificial Intelligence",
              duration: "1 Year",
              outline: [
                { name: "Object Oriented and Functional Programming using Python", nameDetails: [] },
                { name: "Advanced Python Libraries (Numpy , Pandas & Flask) with Anaconda", nameDetails: [] },
                { name: "Introduction to Linear Algebra and Statistics", nameDetails: [] },
                { name: "Data Science Essentials", nameDetails: [] },
                { name: "Nueral Networks", nameDetails: [] },
                { name: "Deep Learning with Keras", nameDetails: [] },
                { name: "Backend with TensorFlow", nameDetails: [] },
                { name: "Machine Learning", nameDetails: [] },
              ],
              ico:
                "https://cdn2.iconfinder.com/data/icons/knowledge/512/electronic_brain-512.png",
            },
            {
              name: "Network Essential",
              detailName: "Network Essential",
              duration: "1 Year",
              outline: [
                { name: "Introduction to Personal Computer Hardware", nameDetails: [] },
                { name: "PC Assembly", nameDetails: [] },
                { name: "Advance Computer Hardware", nameDetails: [] },
                { name: "Preventive Maintainance and Troubleshooting", nameDetails: [] },
                { name: "Networking Concepts", nameDetails: [] },
                { name: "Applied Networking", nameDetails: [] },
                { name: "Laptops and other Mobile Devices", nameDetails: [] },
                { name: "Printers", nameDetails: [] },
                { name: "Virtualization and Cloud Computing", nameDetails: [] },
                { name: "windows Installation", nameDetails: [] },
                { name: "windows Configuration", nameDetails: [] },
                { name: "Mobile, Linux, & OS X operating system", nameDetails: [] },
                { name: "Security", nameDetails: [] },
                { name: "The IT Professional", nameDetails: [] },
              ],
              ico:
                "https://cdn2.iconfinder.com/data/icons/smashicons-the-essentials-webby-vol-3/55/197_-_Network_interaction_communication_essential-512.png",
            },
            {
              name: "Project Management",
              detailName: "Project Management",
              duration: "1 Year",
              outline: [{ name: "MS Word", nameDetails: [] }, { name: "MS Excel", nameDetails: [] }, { name: "MS PowerPoint", nameDetails: [] }],
              ico:
                "https://icon-library.com/images/project-management-icon/project-management-icon-14.jpg",
            },
            {
              name: "Advance Dashboard Training",
              detailName: "Advance Dashboard Training",
              duration: "1 Year",
              outline: [{ name: "MS Word", nameDetails: [] }, { name: "MS Excel", nameDetails: [] }, { name: "MS PowerPoint", nameDetails: [] }],
              ico:
                "https://icon-library.com/images/charts_analytics_kpi_dashboard_report_bar_pie-512.png",
            },
            {
              name: "Digital Marketing",
              detailName: "Digital Marketing",
              duration: "1 Year",
              outline: [
                { name: "Digital Marketing Overview", nameDetails: [] },
                { name: "Website creation process", nameDetails: [] },
                { name: "Search Engine optimization", nameDetails: [] },
                { name: "PPC & Adwords Marketing", nameDetails: [] },
                { name: "Social Media Marketing", nameDetails: [] },
                { name: "Mobile Marketing", nameDetails: [] },
                { name: "Display Advertisement", nameDetails: [] },
                { name: "Email Marketing", nameDetails: [] },
                { name: "Lead Genertion", nameDetails: [] },
                { name: "ECommerce Marketing", nameDetails: [] },
                { name: "Affeliate Marketing", nameDetails: [] },
                { name: "Sales Funnels", nameDetails: [] },
                { name: "Google Analytics", nameDetails: [] },
                { name: "Blogging", nameDetails: [] },
                { name: "Freelancing", nameDetails: [] },
                { name: "Develop Online Ad Stretigy", nameDetails: [] },
                { name: "Make Mony from Droshipping", nameDetails: [] },
                { name: "Copywriting", nameDetails: [] },
              ],
              ico:
                "https://nova.makerfaire.com/wp-content/uploads/sites/23/2016/06/services-icon-social-media-marketing.png",
            },
            {
              name: "Microsoft Office Specialist",
              detailName: "Microsoft Office Specialist",
              duration: "3 Months",
              outline: [{ name: "MS Word", nameDetails: [] }, { name: "MS Excel", nameDetails: [] }, { name: "MS PowerPoint", nameDetails: [] }],
              ico:
                "https://office-365.co.uk/wp-content/uploads/2019/11/Office-365-logo-in-circle.png",
            },
            {
              name: "Robotics",
              detailName: "Robotics",
              duration: "1 Year",
              outline: [{ name: "MS Word", nameDetails: [] }, { name: "MS Excel", nameDetails: [] }, { name: "MS PowerPoint", nameDetails: [] }],
              ico:
                "https://icon-library.com/images/robot-icon-free/robot-icon-free-10.jpg",
            },
            {
              name: "Database Administrator",
              detailName: "Database Administrator",
              duration: "1 Year",
              outline: [
                { name: "Using Structured Query Language (SQL)", nameDetails: [] },
                { name: "Using Data Manipulation Language (DML) and Transaction Control Language (TCL)", nameDetails: [] },
                { name: "Using Basic SELECT statements", nameDetails: [] },
                { name: "Defining Table Joins", nameDetails: [] },
                { name: "Using Conversion Functions and Conditional Expressions", nameDetails: [] },
                { name: "Displaying Data from Multiple Tables", nameDetails: [] },
                { name: "Using the Set Operators", nameDetails: [] },
                { name: "Using DDL Statements to Create and Manage Tables", nameDetails: [] },
                { name: "Managing Objects with Data Dictionary Views", nameDetails: [] },
                { name: "Managing Schema Objects", nameDetails: [] },
                { name: "Using Data Definition Language (DDL)", nameDetails: [] },
                { name: "Defining SELECT Statements", nameDetails: [] },
                { name: "Restricting and Sorting Data", nameDetails: [] },
                { name: "Using Single-Row Functions to Customize Output", nameDetails: [] },
                { name: "Reporting Aggregated Data Using the Group Functions", nameDetails: [] },
                { name: "Using Subqueries to Solve Queries", nameDetails: [] },
                { name: "Manipulating Data", nameDetails: [] },
                { name: "Creating Other Schema Objects", nameDetails: [] },
                { name: "Controlling User Access", nameDetails: [] },
                { name: "Manipulating Large Data Sets", nameDetails: [] },
              ],
              ico: "https://www.revalsys.com/images/DB-Icon-1.jpg",
            },
            {
              name: "Bike Repairing Course",
              detailName: "Certified Motor Bike Repairing Course",
              duration: "1 Year",
              outline: [{ name: "MS Word", nameDetails: [] }, { name: "MS Excel", nameDetails: [] }, { name: "MS PowerPoint", nameDetails: [] }],
              ico:
                "https://cdn4.iconfinder.com/data/icons/motorcycle-5/48/garage-workshop-motorcyle-repair-fix-mechanic-bike-512.png",
            },
            {
              name: "Mobile Repairing Course",
              detailName: "Certified Mobile Repairing Course",
              duration: "4 Months",
              outline: [
                { name: "shorting clear (Half and full)", nameDetails: [] },
                { name: "LCD Replacement", nameDetails: [] },
                { name: "Charging jack", nameDetails: [] },
                { name: "Software Installation", nameDetails: [] },
              ],
              ico:
                "https://thumbs.dreamstime.com/b/phone-repair-logo-vector-smart-phone-device-repair-symbol-phone-repair-logo-vector-smart-phone-device-repair-symbol-144302316.jpg",
            },
            {
              name: "RO Plant Technician",
              detailName: "Certified RO Plant Technician",
              duration: "3 Months",
              outline: [{ name: "MS Word", nameDetails: [] }, { name: "MS Excel", nameDetails: [] }, { name: "MS PowerPoint", nameDetails: [] }],
              ico:
                "https://previews.123rf.com/images/nachai/nachai1809/nachai180900836/109877362-water-treatment-and-water-filter-icon-48x48-pixel-perfect-and-editable-stroke-.jpg",
            },
            //course two
            {
              name: "Textile Training",
              detailName: "Certified Textile Training",
              duration: "40 Days",
              outline: [
                {
                  name:
                    "Industrial Sewing Machine Operator - Duration one month",
                  nameDetails: [
                    "Overview of Garment and textile Industry",
                    "Standard operating procedures",
                    "Basic requirements of Quality",
                    "Machine Learning",
                    "Skill development and upgradation",
                    "Hands on experience of multiple sewing machineries",
                    "Stamina building",
                    "Career Counselling",
                  ]
                },
                {
                  name: "Quality Checker - Duration one month",
                  nameDetails: [
                    "Overview of Garment and textile Industry",
                    "Standard operating procedures",
                    "Quality Standards and its Requirements",
                    "Clockwise Inspection Procedure",
                    "Defect Identification and Analysis",
                    "Defects Classification",
                    "Stamina Building",
                    "Career Counselling",
                  ]
                },
                {
                  name: "Quality Auditor - Duration one month",
                  nameDetails: [
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
                  ]
                },
              ],
              ico: "https://ajsavjtextilehub.online/src/img/icon_flechten.png",
            }

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
                        {e.name}
                        {e.nameDetails && e.nameDetails.map(
                          (e, i) => {
                            return (
                              <ul>
                                <li className="text-muted" key={i}>
                                  {e}
                                </li>
                              </ul>
                            );
                          }
                        )
                        }
                      </li>
                    );
                  })}
                  <hr />
                  {/* {this.state.currentCourse.moreOutline ? (
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
                                    <hr />*/}
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
