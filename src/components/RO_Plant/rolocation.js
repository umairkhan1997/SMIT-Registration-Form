import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./ro.css";
import Fade from "react-reveal";

export default class ROLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [
        {
          name: "FIA",
          area: "Civic Center, Mountain View, CA 94041, United States",
          mapLocation:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.0010145974393!2d-122.08360258469334!3d37.389808279831406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIzJzIzLjMiTiAxMjLCsDA0JzUzLjEiVw!5e0!3m2!1sen!2s!4v1607670019957!5m2!1sen!2s",
        },
        {
          name: "Pak Chowk",
          area: "Morer St, New Chali Karachi",
          mapLocation:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.323201276102!2d67.0108049150026!3d24.85280868405755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzEwLjEiTiA2N8KwMDAnNDYuOCJF!5e0!3m2!1sen!2s!4v1607670107558!5m2!1sen!2s",
        },
        {
          name: "NJV School",
          area: "NJV MA Jinnah Road Karachi",
          mapLocation:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.323201276102!2d67.0108049150026!3d24.85280868405755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzEwLjEiTiA2N8KwMDAnNDYuOCJF!5e0!3m2!1sen!2s!4v1607670107558!5m2!1sen!2s",
        },
        {
          name: "Baldia Noor Ul Quran",
          area: "Jahangir Pirzada Rd, Qaddafi Colony, Karachi",
          mapLocation:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.3257783898684!2d66.96582791500397!3d24.92096948402547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU1JzE1LjUiTiA2NsKwNTgnMDQuOSJF!5e0!3m2!1sen!2s!4v1607670800270!5m2!1sen!2s",
        },
        {
          name: "Korangi qarimiya qadriya",
          area: "Sector 48 E Korangi, Karachi",
          mapLocation:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.492022560432!2d67.14536481500191!3d24.81284208407642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzQ2LjIiTiA2N8KwMDgnNTEuMiJF!5e0!3m2!1sen!2s!4v1607670921208!5m2!1sen!2s",
        },
        {
          name: "Government collage of technology",
          area: "Central Ave, Sindh Industrial Trading Estate, Karachi",
          mapLocation:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.953732173805!2d66.98369931500353!3d24.899559784035574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUzJzU4LjQiTiA2NsKwNTknMDkuMiJF!5e0!3m2!1sen!2s!4v1607671022901!5m2!1sen!2s",
        },
        {
          name: "Balida PTC",
          area: "Plot #761,762 Baldia Town,Saeedabad, Karachi",
          mapLocation:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3618.2238089607536!2d66.973611111111!3d24.924444444444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315316d0ef89f%3A0x3373486be2ae62b0!2sBaldia%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1607671121170!5m2!1sen!2s",
        },
        {
          name: "Korangi bhaijan chowk",
          area: "Plot ST 6, Sector 33/C Sector 33 C Korangi, Karachi",
          mapLocation:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.019805908824!2d67.13930791500212!3d24.828996284068893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ5JzQ0LjQiTiA2N8KwMDgnMjkuNCJF!5e0!3m2!1sen!2s!4v1607671208747!5m2!1sen!2s",
        },
        {
          name: "Dalmia school",
          area: "Shanti Nagar Colony Main Rd, Shanti Nagar Karachi",
          mapLocation:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.91443847666!2d67.09751301500371!3d24.90089998403477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU0JzAzLjIiTiA2N8KwMDUnNTguOSJF!5e0!3m2!1sen!2s!4v1607671290756!5m2!1sen!2s",
        },
        {
          name: "Dalimia UC",
          area: "Shanti Nagar Karachi",
          mapLocation:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.863296825656!2d67.09979281500375!3d24.902644184034006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU0JzA5LjUiTiA2N8KwMDYnMDcuMSJF!5e0!3m2!1sen!2s!4v1607671376712!5m2!1sen!2s",
        },
        {
          name: "Malir model colony",
          area: "Moinabad Rd, Model Colony Ammerabad, Karachi",
          mapLocation:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.0582281742913!2d67.18239581500349!3d24.89599538403714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUzJzQ1LjYiTiA2N8KwMTEnMDQuNSJF!5e0!3m2!1sen!2s!4v1607671509471!5m2!1sen!2s",
        },
        {
          name: "ISI",
          area: "DHA Link Rd, Karachi Cantonment, Karachi",
          mapLocation:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.651018954784!2d67.04818141500245!3d24.84160538406288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUwJzI5LjgiTiA2N8KwMDMnMDEuMyJF!5e0!3m2!1sen!2s!4v1607671578343!5m2!1sen!2s",
        },
        {
          name: "City court 1",
          area: "Adhumal Oodharam Quarter, Karachi",
          mapLocation:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.2289207204744!2d67.0045465150027!3d24.856029884056085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzIxLjciTiA2N8KwMDAnMjQuMyJF!5e0!3m2!1sen!2s!4v1607671798379!5m2!1sen!2s",
        },
        {
          name: "City court 2",
          area: "Adhumal Oodharam Quarter, Karachi",
          mapLocation:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.274774601776!2d67.00441281500271!3d24.85446328405677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzE2LjEiTiA2N8KwMDAnMjMuOCJF!5e0!3m2!1sen!2s!4v1607671913089!5m2!1sen!2s",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "#d8dfe6",
          }}
          className="bg-image"
        >
          <div
            style={{ borderBottom: "1.5px solid dodgerblue" }}
            className="container-fluid"
          >
            <div className="container p-4">
              <h2 className="Heading font-weight-bold">
                Ro Plant Location In Pakistan
              </h2>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#d8dfe6",
          }}
          className="bg-image "
        >
          <div className="container">
            <div className="row">
              {this.state.locations.map((item, i) => {
                return (
                  <div className="col-md-3 p-3">
                    <div
                      style={{ height: "100%" }}
                      className="p-3 bg-white shadow rounded"
                    >
                      <h3>{item.name}</h3>
                      <p>{item.area}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
