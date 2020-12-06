import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import image from "../../images/Dr.jpg";
import aliMughal from "../../images/aliMughal.png";
import ziakhan from "../../images/ziaKhan.png";
import course from "../../images/course1.jpeg";
export default class SMITAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faculty: true,
      courses: false,
      numbeOfStudent: false,
      events: false,
      teachers: false,
      // EDIT Control
      facultyImage: false,
      facultyText: false,
      courseEdit: false,
      studentsEdit: false,
      currentEdit: "",
      teacherEdit:false
    };
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3 bg-light text-primary shadow p-5">
            <div className="p-4">
              <img src={logo} width="100%" />
            </div>
            <div className="p-5">
              <h2>SMIT</h2>
            </div>
            <div className="p-4">
              <ul className="list">
                <li
                  onClick={() =>
                    this.setState({
                      faculty: true,
                      courses: false,
                      numbeOfStudent: false,
                      events: false,
                      teachers: false,
                    })
                  }
                >
                  Faculty
                </li>
                <li
                  onClick={() =>
                    this.setState({
                      faculty: false,
                      courses: true,
                      numbeOfStudent: false,
                      events: false,
                      teachers: false,
                    })
                  }
                >
                  Cources
                </li>
                <li
                  onClick={() =>
                    this.setState({
                      faculty: false,
                      courses: false,
                      numbeOfStudent: true,
                      events: false,
                      teachers: false,
                    })
                  }
                >
                  Number of Students
                </li>
                <li
                  onClick={() =>
                    this.setState({
                      faculty: false,
                      courses: false,
                      numbeOfStudent: false,
                      events: true,
                      teachers: false,
                    })
                  }
                >
                  Events
                </li>
                <li
                  onClick={() =>
                    this.setState({
                      faculty: false,
                      courses: false,
                      numbeOfStudent: false,
                      events: false,
                      teachers: true,
                    })
                  }
                >
                  Teachers
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{ height: "100vh", overflow: "scroll" }}
            className="col-md-9"
          >
            <div style={{ overflowX: "hidden" }} className="container">
              <div>
                {this.state.faculty ? (
                  <div>
                    {this.state.facultyImage ? (
                      <div className="fixed-top full">
                        <div className="px-5">
                          <button
                            className="prevbtn"
                            onClick={() =>
                              this.setState({ facultyImage: false })
                            }
                          >
                            <i class="fas fa-times"></i>
                          </button>
                        </div>
                        <div className="p-3 m-3  rounded shadow ">
                          <h3>Edit Image</h3>
                          <input className="uploadCV" type="file" />
                        </div>
                      </div>
                    ) : null}
                    {this.state.facultyText ? (
                      <div className="fixed-top full">
                        <div className="px-5">
                          <button
                            className="prevbtn"
                            onClick={() =>
                              this.setState({ facultyText: false })
                            }
                          >
                            <i class="fas fa-times"></i>
                          </button>
                        </div>
                        <div className="p-3 m-3 bg-light rounded shadow">
                          <h3>Edit Faculty</h3>
                          <div className="py-3">
                            <input
                              className="inp"
                              placeholder="Faculty Name"
                              type="text"
                            />
                          </div>
                          <div className="py-3">
                            <input
                              className="inp"
                              placeholder="Designation"
                              type="text"
                            />
                          </div>
                          <div className="py-3">
                            <textarea
                              placeholder="Enter Description"
                              className="inp"
                              rows="8"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    <div>
                      <div className="px-5 py-3">
                        <h2 className="text-left">Faculty</h2>
                      </div>
                      <div className="container p-5">
                        <div className="row">
                          <div className="col-md-2 py-3">
                            <div className="content">
                              <div className="delete">
                                <button
                                  onClick={() =>
                                    this.setState({
                                      facultyImage: true,
                                      facultyText: false,
                                    })
                                  }
                                >
                                  <i class="fas fa-pen"></i>
                                </button>
                              </div>
                              <img
                                className="shadow"
                                src={ziakhan}
                                width="100%"
                              />
                            </div>
                          </div>
                          <div className="col-md-9 py-3">
                            <div className="content text-left">
                              <div className="delete">
                                <button
                                  onClick={() =>
                                    this.setState({
                                      facultyImage: false,
                                      facultyText: true,
                                    })
                                  }
                                >
                                  <i class="fas fa-pen"></i>
                                </button>
                              </div>
                              <h2>Zia Khan</h2>
                              <p>Faculty Head</p>
                              <p>
                                Building Internet-Scale Multi-Cloud Global Apps
                                | Software Developer & Architect | Innovation
                                Coach & Mentor I believe that technology and
                                software can help elevate the human condition. I
                                have spent my life developing global
                                internet-scale applications and mentoring others
                                to do the same. Have more than twenty years of
                                experience in software architecture, design,
                                development, implementation, and integration.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container p-5">
                        <div className="row">
                          <div className="col-md-2 py-3">
                            <div className="content">
                              <div className="delete">
                                <button
                                  onClick={() =>
                                    this.setState({
                                      facultyImage: true,
                                      facultyText: false,
                                    })
                                  }
                                >
                                  <i class="fas fa-pen"></i>
                                </button>
                              </div>
                              <img
                                className="shadow"
                                src={aliMughal}
                                width="100%"
                              />
                            </div>
                          </div>
                          <div className="col-md-9 py-3">
                            <div className="content text-left">
                              <div className="delete">
                                <button
                                  onClick={() =>
                                    this.setState({
                                      facultyImage: false,
                                      facultyText: true,
                                    })
                                  }
                                >
                                  <i class="fas fa-pen"></i>
                                </button>
                              </div>
                              <h2>Muhammad Ali Mughal</h2>
                              <p>Manager SMIT</p>
                              <p>
                                Building Internet-Scale Multi-Cloud Global Apps
                                | Software Developer & Architect | Innovation
                                Coach & Mentor I believe that technology and
                                software can help elevate the human condition. I
                                have spent my life developing global
                                internet-scale applications and mentoring others
                                to do the same. Have more than twenty years of
                                experience in software architecture, design,
                                development, implementation, and integration.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                {this.state.numbeOfStudent ? (
                  <div>
                    {this.state.studentsEdit ? (
                      <div className="fixed-top full">
                        <div className="px-5">
                          <button
                            className="prevbtn"
                            onClick={() =>
                              this.setState({ studentsEdit: false })
                            }
                          >
                            <i class="fas fa-times"></i>
                          </button>
                        </div>
                        <div className="p-3 m-3  rounded shadow ">
                          <h3>Edit Statistics</h3>
                          <div className="py-3">
                            <h3>{this.state.currentEdit}</h3>
                            <input
                              className="inp"
                              placeholder="Enter Course Name"
                            />
                          </div>
                        </div>
                      </div>
                    ) : null}
                    <div className="container px-5 py-3">
                      <h2 className="text-left">Counter</h2>
                    </div>
                    <div className="container p-5">
                      <div className="row">
                        <div className="col-md-4 py-3">
                          <div className="content border p-3 rounded border-primary">
                            <div className="delete">
                              <button
                                onClick={() =>
                                  this.setState({
                                    studentsEdit: true,
                                    currentEdit: "Number Of Trained",
                                  })
                                }
                              >
                                <i class="fas fa-pen"></i>
                              </button>
                            </div>
                            <h2>Number of Trained Students</h2>
                            <h3 className="color">125000</h3>
                          </div>
                        </div>
                        <div className="col-md-4 py-3">
                          <div className="content border p-3 rounded border-primary">
                            <div className="delete">
                              <button
                                onClick={() =>
                                  this.setState({
                                    studentsEdit: true,
                                    currentEdit: "Number Of Inrolled",
                                  })
                                }
                              >
                                <i class="fas fa-pen"></i>
                              </button>
                            </div>
                            <h2>Number of Enrolled Students</h2>
                            <h3 className="color">55000</h3>
                          </div>
                        </div>
                        <div className="col-md-4 py-3">
                          <div className="content border p-3 rounded border-primary">
                            <div className="delete">
                              <button
                                onClick={() =>
                                  this.setState({
                                    studentsEdit: true,
                                    currentEdit: "Number Of Courses",
                                  })
                                }
                              >
                                <i class="fas fa-pen"></i>
                              </button>
                            </div>
                            <h2>Number of Courses</h2>
                            <h3 className="color">20</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                {this.state.courses ? (
                  <div>
                    {this.state.courseEdit ? (
                      <div className="fixed-top full">
                        <div className="px-5">
                          <button
                            className="prevbtn"
                            onClick={() => this.setState({ courseEdit: false })}
                          >
                            <i class="fas fa-times"></i>
                          </button>
                        </div>
                        <div className="p-3 m-3  rounded shadow ">
                          <h3>Edit Course</h3>
                          <div className="py-3">
                            <input
                              className="inp"
                              placeholder="Enter Course Name"
                            />
                          </div>
                          <div className="py-3">
                            <input
                              className="inp"
                              placeholder="Enter Course Duration"
                            />
                          </div>
                          <div className="py-3">
                            <input
                              className="inp"
                              placeholder="Enter Course Topics seperate by (,)"
                            />
                          </div>
                          <input className="" type="file" />
                        </div>
                      </div>
                    ) : null}
                    <div className="container px-5 py-3">
                      <h2 className="text-left">Courses</h2>
                    </div>
                    <div className="container text-left p-5">
                      <div className="row">
                        <div className="col-md-3 border py-3">
                          <div className="content">
                            <div className="delete">
                              <button
                                onClick={() =>
                                  this.setState({ courseEdit: true })
                                }
                              >
                                <i class="fas fa-pen"></i>
                              </button>
                            </div>
                            <img src={course} width="100%" />
                            <div>
                              <h3>Web And Mobile</h3>
                              <ul>
                                <li>HTML 5</li>
                                <li>CSS</li>
                                <li>javaScript</li>
                                <li>ES-6</li>
                                <li>React</li>
                                <li>React Native</li>
                                <li>Mongo DB</li>
                                <li>Express JS</li>
                                <li>Node JS</li>
                              </ul>
                              <hr />
                              <p>Duration: 1 Year</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 border py-3">
                          <div className="content">
                            <div className="delete">
                              <button
                                onClick={() =>
                                  this.setState({ courseEdit: true })
                                }
                              >
                                <i class="fas fa-pen"></i>
                              </button>
                            </div>
                            <img src={course} width="100%" />
                            <div>
                              <h3>CCA</h3>
                              <ul>
                                <li>Quick Book</li>
                                <li>PeachTree</li>
                                <li>Excell</li>
                              </ul>
                              <hr />
                              <p>Duration: 3 Months</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 border py-3">
                          <div className="content">
                            <div className="delete">
                              <button
                                onClick={() =>
                                  this.setState({ courseEdit: true })
                                }
                              >
                                <i class="fas fa-pen"></i>
                              </button>
                            </div>
                            <img src={course} width="100%" />
                            <div>
                              <h3>CCO</h3>
                              <ul>
                                <li>MS Word</li>
                                <li>MS Excel</li>
                                <li>MS PowerPoint</li>
                                <li>MS Access</li>
                              </ul>
                              <hr />
                              <p>Duration: 6 Months</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 border py-3">
                          <div className="content">
                            <div className="delete">
                              <button
                                onClick={() =>
                                  this.setState({ courseEdit: true })
                                }
                              >
                                <i class="fas fa-pen"></i>
                              </button>
                            </div>
                            <img src={course} width="100%" />
                            <div>
                              <h3>Graphic Designing</h3>
                              <ul>
                                <li>Adobe illustrator</li>
                                <li>Adobe Photoshop</li>
                                <li>Urdu Inpage</li>
                              </ul>
                              <hr />
                              <p>Duration: 6 Months</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 border py-3">
                          <div>
                            <button
                              onClick={() =>
                                this.setState({ courseEdit: true })
                              }
                              className="btn-block prevbtn"
                            >
                              Add New Course
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                {this.state.teachers ? (
                  <div>
                    {this.state.teacherEdit ? (
                      <div className="fixed-top full">
                        <div className="px-5">
                          <button
                            className="prevbtn"
                            onClick={() =>
                              this.setState({ teacherEdit: false })
                            }
                          >
                            <i class="fas fa-times"></i>
                          </button>
                        </div>
                        <div className="p-3 m-3  rounded shadow ">
                          <h3>Edit Teacher</h3>
                          <div className="py-3">
                            <input
                              className="inp"
                              placeholder="Enter Name"
                            />
                            </div>
                            <div className="py-3">
                            <input
                              className="inp"
                              placeholder="Enter Course"
                            />
                          </div>
                            <div className="py-3">
                            <input
                            type='file'
                              className="uploadCV"
                              placeholder="Enter Course"
                            />
                          </div>
                          <div className='py-3'>
                            <button className='prevbtn'>Update</button>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    <div className="container px-5 py-3">
                      <h2 className="text-left">Teachers</h2>
                    </div>
                    <div className="container p-5">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="content p-3">
                            <div className="delete">
                              <button onClick={()=>this.setState({teacherEdit:true})}>
                                <i class="fas fa-pen"></i>
                              </button>
                            </div>
                            <img src={aliMughal} width="100%" />
                            <div className="p-3">
                              <h4>Ali Mughal</h4>
                              <p>Manager SMIT</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="content p-3">
                            <div className="delete">
                              <button onClick={()=>this.setState({teacherEdit:true})}>
                                <i class="fas fa-pen"></i>
                              </button>
                            </div>
                            <img src={aliMughal} width="100%" />
                            <div className="p-3">
                              <h4>Ali Mughal</h4>
                              <p>Manager SMIT</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="content p-3">
                            <div className="delete">
                              <button onClick={()=>this.setState({teacherEdit:true})}>
                                <i class="fas fa-pen"></i>
                              </button>
                            </div>
                            <img src={aliMughal} width="100%" />
                            <div className="p-3">
                              <h4>Ali Mughal</h4>
                              <p>Manager SMIT</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="content p-3">
                            <div className="delete">
                              <button onClick={()=>this.setState({teacherEdit:true})}>
                                <i class="fas fa-pen"></i>
                              </button>
                            </div>
                            <img src={aliMughal} width="100%" />
                            <div className="p-3">
                              <h4>Ali Mughal</h4>
                              <p>Manager SMIT</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
