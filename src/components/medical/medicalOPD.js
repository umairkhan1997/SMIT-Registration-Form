import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./medical.css";

export default class MedicalOPD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
            doctor: "Dr Muhammad Sohail",
            opd: "Dentist Specialist",
            day: "Mon to Sat ",
            time: "09:00am to 03:00pm",
          },
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
            opd: "Phsycologist",
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
                Gyanocology OPD
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
                  <div className="clinicCard shadow p-4">
                    <h4>{e.opd}</h4>
                    <p className="DrName">{e.doctor}</p>
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
              <div
                data-toggle="modal"
                data-target="#staticBackdrop"
                className="p-4"
              >
                <p style={{ fontSize: "2.5em" }}>
                  <i class="fas fa-tint"></i>
                </p>
                <h4>Hijama</h4>
                <h5>Mon To Sat</h5>
                <p className="text-right">9:00 to 5:00</p>
              </div>
            </div>
            <div
              style={{ backgroundColor: "rgb(69 159 255)" }}
              className="col-md-4"
            >
              <div
                data-toggle="modal"
                data-target="#staticBackdrop"
                className="p-4"
              >
                <p style={{ fontSize: "2.5em" }}>
                  <i class="fas fa-mortar-pestle"></i>
                </p>
                <h4>Homeaopathic</h4>
                <h5>Mon To Sat</h5>
                <p className="text-right">9:00 to 1:00</p>
              </div>
            </div>
            <div
              style={{ backgroundColor: "rgb(0 123 255)" }}
              className="col-md-4"
            >
              <div
                data-toggle="modal"
                data-target="#staticBackdrop"
                className="p-4"
              >
                <p style={{ fontSize: "2.5em" }}>
                  <i class="fab fa-pagelines"></i>
                </p>
                <h4>Hikmat</h4>
                <h5>Mon To Sat</h5>
                <p className="text-right">9:00 to 1:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
