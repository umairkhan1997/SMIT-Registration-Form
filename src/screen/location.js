import React from "react";
import MainHeader from "../components/Home/MainHeader";
import Navbar from "../smallcomponents/navbar";

export default class Location extends React.Component {
  state = {
    locations: [
      {
        locationName: "Bahadurabad",
        area: "(head Office)",
        number: "(92-21) 3413-0786 (5 Lines)",
      },
      {
        locationName: "Aliabad",
        area: "(Branch)",
        number: "0333-120-1801",
      },
      {
        locationName: "Ameer Hamza",
        area: "(Branch)",
        number: "0333-120-1803",
      },
      {
        locationName: "Burns Road",
        area: "(Branch)",
        number: "0333-120-1654",
      },
      {
        locationName: "Boultan Market",
        area: "(Branch)",
        number: "0333-120-1621",
      },
      {
        locationName: "Badar Commercial (DHA)",
        area: "(Branch)",
        number: "0333-120-1809",
      },
      {
        locationName: "Civil (Chand Bibi Road)",
        area: "(Branch)",
        number: "0333-120-1805",
      },
      {
        locationName: "Clifton (Khaleeq-Uz-Zaman)",
        area: "(Branch)",
        number: "0333-120-1807|08",
      },
      {
        locationName: "Cloth Market",
        area: "(Branch)",
        number: "0333-120-1657",
      },
      {
        locationName: "Delton (Khadda Market)",
        area: "(Branch)",
        number: "0333-120-1653",
      },
      {
        locationName: "Gulshan (Maskan Chawrangi)",
        area: "(Branch)",
        number: "0333-120-1817",
      },
      {
        locationName: "Gulistan-e-Johar |",
        area: "(Branch)",
        number: "0333-120-1833",
      },
      {
        locationName: "Ghani Chawrangi",
        area: "(Branch)",
        number: "0333-120-1811",
      },
      {
        locationName: "Gulistan-e-Johar ||",
        area: "(Branch)",
        number: "0333-120-1813",
      },
      {
        locationName: "Garden",
        area: "(Branch)",
        number: "0333-120-1810",
      },
      {
        locationName: "Hill Park",
        area: "(Branch)",
        number: "0333-120-1591",
      },
      {
        locationName: "Hassan Square Shade",
        area: "(Branch)",
        number: "0333-120-1846",
      },
      {
        locationName: "Jinnah Avenue",
        area: "(Branch)",
        number: "0333-120-1837",
      },
      {
        locationName: "Kharadar",
        area: "(Branch)",
        number: "0333-120-1815",
      },
      {
        locationName: "Korangi-4",
        area: "(Branch)",
        number: "0333-120-1816",
      },
      {
        locationName: "Karimi(13-D)",
        area: "(Branch)",
        number: "0333-120-1825",
      },
      {
        locationName: "Mehran Town (Korangi)",
        area: "(Branch)",
        number: "0333-120-1812",
      },
      {
        locationName: "Medicare Chowrangi",
        area: "(Branch)",
        number: "0333-120-1814",
      },
      {
        locationName: "Numaish (Darul Kifala)",
        area: "(Branch)",
        number: "0333-120-1819",
      },
      {
        locationName: "Numaish (Logistic)",
        area: "(Branch)",
        number: "0333-120-1831",
      },
      {
        locationName: "North Karachi 5C-11",
        area: "(Branch)",
        number: "0333-120-1821",
      },
      {
        locationName: "Maseerabad Shade",
        area: "(Branch)",
        number: "0333-120-1802",
      },
      {
        locationName: "Punjab Chowrangi",
        area: "(Branch)",
        number: "0333-120-1595",
      },
      {
        locationName: "Paposh Nagar",
        area: "(Branch)",
        number: "0333-120-1628",
      },
      {
        locationName: "Society",
        area: "(Branch)",
        number: "0333-120-1824",
      },
      {
        locationName: "Saylani House (DHA)",
        area: "(Branch)",
        number: "0333-120-1588",
      },
      {
        locationName: "Saddar",
        area: "(Branch)",
        number: "0333-120-1822",
      },
      {
        locationName: "Sakhi Hassan Shade",
        area: "(Branch)",
        number: "0332-1367085",
      },
      {
        locationName: "Tauheed Commercial",
        area: "(Branch)",
        number: "0333-120-1807",
      },
      {
        locationName: "UK Appartment (Gulshan)",
        area: "(Branch)",
        number: "0333-120-1827",
      },
    ],
  };
  render() {
    const { locations } = this.state;
    return (
      <div>
        <MainHeader />
        <Navbar />
        <div>
          <div className="text-center py-5">
            <img
              width="300px"
              src="https://i.pinimg.com/originals/40/12/17/4012171c8959c261bc4be14a2605007d.jpg"
              alt=""
            />
            <h3 className="color">PAKISTAN OFFICES</h3>
          </div>
          <div>
            <div>
              <div className="row p-0 m-0">
                <div className="col-md-3 border-right border-primary">
                  <div className="d-flex justify-content-center align-items-center">
                    <h2 className="color">Karachi</h2>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="row">
                    {locations.map((e, i) => {
                      return (
                        <div className="col-md-3">
                          <div className="py-3">
                            <h4 className="color">{e.locationName}</h4>
                            <p>{e.area}</p>
                            <p>{e.number}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="text-center p-5">
            <h2>INTERNATIONAL OFFICES</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
                alt=""
                width="100%"
              />
              <div className="internationalOffice">
                <h3 className="color">NOTTINGHAM (U.K)</h3>
                <p>United Kingdom 203</p>
                <p>Radford Road Nottingham</p>
                <p>NG75GT</p>
                <p>
                  <a href="tel:+441159706256">(+44) 115 970 6256</a>
                </p>
                <p>Charity # 1145851</p>
                <p>
                  <a target="_blank" href="https://www.saylaniwelfareuk.com">
                    www.saylaniwelfareuk.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="https://quantlabs.net/blog/wp-content/uploads/2020/10/usa-flag-400.png"
                alt=""
                width="100%"
              />
              <div className="internationalOffice">
                <h3 className="color">USA (CHICAGO)</h3>
                <p>Saylani Welfare U.S.A</p>
                <p>2830.S, 18th Avenue, Broadview, Illinious</p>
                <p>60155-4753</p>
                <p>
                  <a href="tel:+17082733637">(+1) 7082733637</a>
                </p>
                <p>Charity # 81-3259988</p>
                <p>
                  <a target="_blank" href="http://www.saylan.org">
                    www.saylan.org
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="https://ak.picdn.net/shutterstock/videos/23281432/thumb/8.jpg"
                alt=""
                width="100%"
              />
              <div className="internationalOffice">
                <h3 className="color">TURKEY (ONCUPINAR)</h3>
                <p>Turkey deyanet vakfi,</p>
                <p>Turkeyi Saylani vakfi,</p>
                <p>lojistik merkezi Oncupinar,</p>
                <p>sınır kapısı bitişiği</p>
                <p>kilis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
