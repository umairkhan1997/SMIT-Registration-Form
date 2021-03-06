import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import MainHeader from "../components/Home/MainHeader";
import ContactForm from "../components/contact/contactForm";
import Footer from "../components/Footer";
import Branches from "../components/contact/branches";
import SideList from "../smallcomponents/sidelist";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [
        {
          listText: "Contact Form",
          listIcon: "fas fa-align-left",
          id: "contactForm",
        },
        {
          listText: "Branches",
          listIcon: "fas fa-code-branch",
          id: "contactBranches",
        },
        {
          listText: "Head Office",
          listIcon: "fas fa-map-marked-alt",
          id: "headOfficeLocation",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <SideList item={this.state.listItem} />
        <MainHeader />
        <ContactForm />
        <Branches />
        <div id="headOfficeLocation" className=" py-5"></div>
        <div className="bg-image">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.447066649314!2d67.06596461432055!3d24.882727750494166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eebb56aaaab%3A0x27ab04809ef5020a!2sSaylani%20Welfare%20Head%20Office.!5e0!3m2!1sen!2s!4v1602255797545!5m2!1sen!2s"
            width="100%"
            height="450"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <Footer />
      </div>
    );
  }
}
