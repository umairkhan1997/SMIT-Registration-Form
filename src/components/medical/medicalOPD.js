import React from "react";
import "./medical.css";
import Modal from "react-awesome-modal";

export default class MedicalOPD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      consultantOPD: {
        generalOPD: [
          {
            opd: "General Physician",
            day: "Mon to Sat",
            time: "9:00am to 4:00pm",
            doctor: "Dr Farhad Mashriqi",
          },
          {
            opd: "General Physician",
            day: "Mon, Wed, Fri and Sat",
            time: "9:00am to 4:00pm",
            doctor: "Dr Muhammad Amin",
          },
          {
            opd: "General Physician (Female)",
            day: "Mon to Sat",
            time: "9:00am to 12:45pm",
            doctor: "Dr Razia Ali",
          },
        ],
        gyanocology: [
          {
            opd: "Gynecologist",
            day: "Mon to Sat",
            time: "9:30am to 01:00pm",
            doctor: "Dr Tehmeena Kaleem",
          },
        ],
        childSpecialist: [
          {
            opd: "Child Specialist",
            day: "Mon, Tue, Thu, Fri and Sat",
            time: "9:30am to 01:00pm",
            doctor: "Dr Riaz Ahmed",
          },
          {
            opd: "Child Specialist",
            day: "Mon, Wed, Sat ",
            time: "2:00pm to 04:00pm",
            doctor: "Dr Riaz Ahmed",
          },
          {
            doctor: "Dr Muhammad Aslam",
            opd: "Child Specialist",
            day: "Wed, Fri, Sat",
            time: "02:30pm to 04:30pm",
          },
        ],
        eyeCareClinic: [
          {
            doctor: "Dr Muhammad Ilyas",
            opd: "Eye Care Specialist",
            day: "Mon to Sat ",
            time: "10:00am to 01:00pm",
          },
        ],
        dental: [
          {
            doctor: "Dr Abdul Rahman",
            opd: "Dentist Specialist",
            day: "Mon to Sat ",
            time: "09:00am to 03:00pm",
          },
          {
            doctor: "Dr Nazia Naeem",
            opd: "Dentist Specialist (Female)",
            day: "Mon to Fri ",
            time: "09:00am to 03:00pm",
          },
          {
            doctor: "Dr Sana Khan",
            opd: "Dentist Specialist (Female)",
            day: "Mon to Sat ",
            time: "09:00am to 01:00pm",
          },
          {
            doctor: "Dr Fozia",
            opd: "Dentist Specialist (Female)",
            day: "Mon to Sat ",
            time: "10:00am to 02:00pm",
          },
        ],
        orthopedic: [
          {
            doctor: "Dr Shahid Ilyas",
            opd: "Orthopedic",
            day: "Tue ",
            time: "03:00pm to 04:00pm",
          },
          {
            doctor: "Dr Shahid Ilyas",
            opd: "Orthopedic",
            day: "Thu ",
            time: "09:30am to 10:30am",
          },
          {
            doctor: "Dr Ambreen Farhan",
            opd: "Orthopedic",
            day: "Sat ",
            time: "10:00am to 11:00am",
          },
        ],
        cancer: [
          {
            doctor: "Dr Saeed Ahmed",
            opd: "Cancer",
            day: "Fri ",
            time: "11:30am to 12:30pm",
          },
        ],
        urology: [
          {
            doctor: "Dr Muhammad Ali",
            opd: "Urology",
            day: "Sat ",
            time: "02:00pm to 04:00pm",
          },
        ],
        diabetic: [
          {
            doctor: "Dr Muhammad Idress",
            opd: "Diabetic",
            day: "Thu, Fri ",
            time: "02:30pm to 04:30pm",
          },
          {
            doctor: "Dr Muhammad Idress",
            opd: "Diabetic",
            day: "Sat",
            time: "10:00am to 12:00pm",
          },
          {
            doctor: "Dr Basit Shaukat",
            opd: "Diabetic",
            day: "Mon, Tue, Wed",
            time: "02:00pm to 04:00pm",
          },
          {
            doctor: "Dr Kehkashan Khursheed",
            opd: "Diabetic (Female)",
            day: "Mon to Sat",
            time: "10:00am to 01:00pm",
          },
        ],
        cardiology: [
          {
            doctor: "Dr Arif Razzaq",
            opd: "Cardiologist",
            day: "Fri",
            time: "03:00pm to 04:30pm",
          },
          {
            doctor: "Dr Saeed Ahmed",
            opd: "Cardiologist",
            day: "Mon, Tue, Thu",
            time: "03:00pm to 04:30pm",
          },
        ],
        neurology: [
          {
            doctor: "Dr Saeed Mazhar",
            opd: "Neurology",
            day: "Mon, Fri",
            time: "09:30am to 10:30am",
          },
          {
            doctor: "Dr Saeed Mazhar",
            opd: "Neurology",
            day: "Mon, Fri",
            time: "03:00pm to 04:30pm",
          },
        ],
        sonology: [
          {
            doctor: "Dr Irum Faisal",
            opd: "Sonologist",
            day: "Tue, Thu, Sat",
            time: "09:30am to 12:30pm",
          },
          {
            doctor: "Dr Sobia Ubaid",
            opd: "Sonologist",
            day: "Mon, Wed, Fri",
            time: "10:00am to 12:00pm",
          },
        ],
        psychology: [
          {
            doctor: "Dr Ashfaq",
            opd: "Psychologist",
            day: "Mon",
            time: "10:00am to 12:00pm",
          },
        ],
        nephrology: [
          {
            doctor: "Dr Abdul Rab",
            opd: "Nephrology",
            day: "Wed, Sat",
            time: "02:30pm to 04:30pm",
          },
        ],
        dermatology: [
          {
            doctor: "Dr Kiran Rashid",
            opd: "Dermatology",
            day: "Fri",
            time: "10:00am to 12:00pm",
          },
          {
            doctor: "Dr Junaid Rabbani",
            opd: "Dermatology",
            day: "Tue, Thu, Fri",
            time: "03:00pm to 04:30pm",
          },
        ],
        physiotherapy: [
          {
            doctor: "Rabia Zaidi",
            opd: "Physiotherapy",
            day: "Mon to Sat",
            time: "09:30am to 01:00pm",
          },
          {
            doctor: "Muhammad Hameed",
            opd: "Physiotherapy",
            day: "Mon to Sat",
            time: "03:00pm to 06:30pm",
          },
        ],
        audiology: [
          {
            doctor: "Shagufta Jawaid",
            opd: "Audiologist",
            day: "Sat",
            time: "02:00pm to 04:30pm",
          },
        ],
      },
      currentOPDDetails: [
        {
          opd: "General Physician",
          day: "Mon to Sat",
          time: "9:00am to 4:00pm",
          doctor: "Dr Farhad Mashriqi",
        },
        {
          opd: "General Physician",
          day: "Mon, Wed, Fri and Sat",
          time: "9:00am to 4:00pm",
          doctor: "Dr Muhammad Amin",
        },
        {
          opd: "General Physician (Female)",
          day: "Mon to Sat",
          time: "9:00am to 12:45pm",
          doctor: "Dr Razia Ali",
        },
      ],
      homeo: false,
      hikmat: false,
      hijama: false,
    };
  }
  render() {
    return (
      <div>
        <div className="container pt-5 pb-5">
          <div className="Heading">
            <h1>Consultant OPD</h1>
          </div>
          <div className="row">
            <div className="col-md-3">
              <button
                onClick={() =>
                  this.setState({
                    currentOPDDetails: this.state.consultantOPD.generalOPD,
                  })
                }
                className="opdBtn"
              >
                General OPD
              </button>
            </div>
            <div className="col-md-3">
              <button
                onClick={() =>
                  this.setState({
                    currentOPDDetails: this.state.consultantOPD.gyanocology,
                  })
                }
                className="opdBtn"
              >
                Gynecology OPD
              </button>
            </div>
            <div className="col-md-3">
              <button
                onClick={() =>
                  this.setState({
                    currentOPDDetails: this.state.consultantOPD.childSpecialist,
                  })
                }
                className="opdBtn"
              >
                Child Specialist OPD
              </button>
            </div>
            <div className="col-md-3">
              <button
                onClick={() =>
                  this.setState({
                    currentOPDDetails: this.state.consultantOPD.eyeCareClinic,
                  })
                }
                className="opdBtn"
              >
                Eye Care OPD
              </button>
            </div>
            <div className="col-md-3">
              <button
                onClick={() =>
                  this.setState({
                    currentOPDDetails: this.state.consultantOPD.dental,
                  })
                }
                className="opdBtn"
              >
                Dental OPD
              </button>
            </div>
            <div className="col-md-3">
              <button
                onClick={() =>
                  this.setState({
                    currentOPDDetails: this.state.consultantOPD.orthopedic,
                  })
                }
                className="opdBtn"
              >
                Orthopedic OPD
              </button>
            </div>
            <div className="col-md-3">
              <button
                onClick={() =>
                  this.setState({
                    currentOPDDetails: this.state.consultantOPD.cancer,
                  })
                }
                className="opdBtn"
              >
                Cancer OPD
              </button>
            </div>
            <div className="col-md-3">
              <button
                onClick={() =>
                  this.setState({
                    currentOPDDetails: this.state.consultantOPD.urology,
                  })
                }
                className="opdBtn"
              >
                Urology OPD
              </button>
            </div>
            <div className="col-md-3">
              <button
                onClick={() =>
                  this.setState({
                    currentOPDDetails: this.state.consultantOPD.diabetic,
                  })
                }
                className="opdBtn"
              >
                Diabetic OPD
              </button>
            </div>
            <div className="col-md-3">
              <button
                onClick={() =>
                  this.setState({
                    currentOPDDetails: this.state.consultantOPD.cardiology,
                  })
                }
                className="opdBtn"
              >
                Cardiology OPD
              </button>
            </div>
            <div className="col-md-3">
              <button
                onClick={() =>
                  this.setState({
                    currentOPDDetails: this.state.consultantOPD.neurology,
                  })
                }
                className="opdBtn"
              >
                Neurology OPD
              </button>
            </div>
            <div className="col-md-3">
              <button
                onClick={() =>
                  this.setState({
                    currentOPDDetails: this.state.consultantOPD.sonology,
                  })
                }
                className="opdBtn"
              >
                Sonology OPD
              </button>
            </div>
            <div className="col-md-3">
              <button
                onClick={() =>
                  this.setState({
                    currentOPDDetails: this.state.consultantOPD.psychology,
                  })
                }
                className="opdBtn"
              >
                Psychology OPD
              </button>
            </div>
            <div className="col-md-3">
              <button
                onClick={() =>
                  this.setState({
                    currentOPDDetails: this.state.consultantOPD.nephrology,
                  })
                }
                className="opdBtn"
              >
                Nephrology OPD
              </button>
            </div>
            <div className="col-md-3">
              <button
                onClick={() =>
                  this.setState({
                    currentOPDDetails: this.state.consultantOPD.dermatology,
                  })
                }
                className="opdBtn"
              >
                Dermatology OPD
              </button>
            </div>
            <div className="col-md-3">
              <button
                onClick={() =>
                  this.setState({
                    currentOPDDetails: this.state.consultantOPD.physiotherapy,
                  })
                }
                className="opdBtn"
              >
                Physiotherapy
              </button>
            </div>
            <div className="col-md-3">
              <button
                onClick={() =>
                  this.setState({
                    currentOPDDetails: this.state.consultantOPD.audiology,
                  })
                }
                className="opdBtn"
              >
                Audiology
              </button>
            </div>
          </div>
          <div className="row border-top my-5 py-4">
            {this.state.currentOPDDetails.map((e, i) => {
              return (
                <div className="col-md-3" key={i}>
                  <div
                    style={{ height: "100%" }}
                    className="clinicCard shadow p-4"
                  >
                    <h4>{e.opd}</h4>
                    <p className="color">{e.doctor}</p>
                    <p>{e.day}</p>
                    <p>{e.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container text-white pt-5 pb-5">
          <div className="row text-white pt-5 pb-5">
            <div
              style={{ backgroundColor: "rgb(120 185 255)" }}
              className="col-md-4"
            >
              <div className="p-4">
                <p style={{ fontSize: "2.5em" }}>
                  <i class="fas fa-tint"></i>
                </p>
                <h4>Hijama</h4>
                <h5>Mon To Sat</h5>
                <div className="py-3">
                  <button
                    onClick={() =>
                      this.setState({ visible: true, hijama: true })
                    }
                    className="btn btn-outline-light rounded-pill px-4"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "rgb(69 159 255)" }}
              className="col-md-4"
            >
              <div className="p-4">
                <p style={{ fontSize: "2.5em" }}>
                  <i class="fas fa-mortar-pestle"></i>
                </p>
                <h4>Homeaopathic</h4>
                <h5>Mon To Sat</h5>
                <div className="py-3">
                  <button
                    onClick={() =>
                      this.setState({ visible: true, homeo: true })
                    }
                    className="btn btn-outline-light rounded-pill px-4"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "rgb(0 123 255)" }}
              className="col-md-4"
            >
              <div className="p-4">
                <p style={{ fontSize: "2.5em" }}>
                  <i class="fab fa-pagelines"></i>
                </p>
                <h4>Hikmat</h4>
                <h5>Mon To Sat</h5>
                <div className="py-3">
                  <button
                    onClick={() =>
                      this.setState({ visible: true, hikmat: true })
                    }
                    className="btn btn-outline-light rounded-pill px-4"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          visible={this.state.visible}
          width="90%"
          effect="fadeInUp"
          onClickAway={() =>
            this.setState({
              visible: false,
              hikmat: false,
              hijama: false,
              homeo: false,
            })
          }
        >
          <button
            style={{ position: "absolute", top: "-50px", right: "0" }}
            className="prevbtn"
            onClick={() =>
              this.setState({
                visible: false,
                hikmat: false,
                hijama: false,
                homeo: false,
              })
            }
          >
            <i class="fas fa-times"></i>
          </button>
          <div className="rounded">
            <div className="p-4 backgroundDark text-white">
              {this.state.hijama ? (
                <h3>Hijama Clinic</h3>
              ) : this.state.hikmat ? (
                <h3>Hikmat Clinic</h3>
              ) : this.state.homeo ? (
                <h3>Homeopathic Clinic</h3>
              ) : (
                false
              )}
            </div>
            {this.state.hijama ? (
              <div className="p-4">
                <h4 className="color">Timing (For Gents)</h4>
                <p>Mon, Tue, Thu, Sat</p>
                <p>9:00am to 5:00pm</p>
                <p>Wed, Fri</p>
                <p>9:00am to 1:00pm</p>
                <p style={{ fontStyle: "italic" }} className="color">
                  Mansoor Turabi
                </p>
                <hr />
                <h4 className="color">Timing (For Ladies)</h4>
                <p>Mon to Sat</p>
                <p>9:00am to 1:00pm</p>
              </div>
            ) : null}
            {this.state.homeo ? (
              <div className="p-4">
                <h4 className="color">Timing</h4>
                <p>Mon, Sat</p>
                <p>9:30am to 12:30pm</p>
                <hr />
                <p style={{ fontStyle: "italic" }} className="color">
                  Dr Sadiq
                </p>
              </div>
            ) : null}
            {this.state.hikmat ? (
              <div className="p-4">
                <h4 className="color">Timing</h4>
                <p>Mon, Sat</p>
                <p>9:30am to 12:30pm</p>
                <hr />
                <p style={{ fontStyle: "italic" }} className="color">
                  Hakeem Noor Muhammad
                </p>
              </div>
            ) : null}
            <div className="backgroundLight p-3 text-center">
              <a
                target="_blank"
                className="color bg-white p-2 shadow rounded-pill"
                href="https://goo.gl/maps/SLok2JDKw3P2ciADA"
              >
                Click to see location <i class="fas fa-map-marker-alt"></i>
              </a>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
