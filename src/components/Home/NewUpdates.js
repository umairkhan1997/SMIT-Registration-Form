import React from "react";
import "../App.css";

export default class NewUpdates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="pt-5 pb-5 bg-light">
        <div class="container pt-5 pb-5">
          <div className="p-3">
            <h1 className="Heading">News</h1>
          </div>
          <div id="carouselContent" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active text-center p-4">
                <div className="date">
                  <p className="month">May 2019</p>
                  <p style={{ fontSize: "2.5em", fontWeight: "bold" }}>15</p>
                </div>
                <div className="newsDetail text-left">
                  <p>Saylani Welfare Announced "Donation Application"</p>
                </div>
              </div>
              <div class="carousel-item text-center p-4">
                <div className="date">
                  <p className="month">May 2019</p>
                  <p style={{ fontSize: "2.5em", fontWeight: "bold" }}>07</p>
                </div>
                <div className="newsDetail text-left">
                  <p>
                    Alhamdulillah Saylani Organized 200+ Locations For Iftar And
                    Sehri In This Holy Month . More Details
                  </p>
                </div>
              </div>
              <div class="carousel-item text-center p-4">
                <div className="date">
                  <p className="month">March 2019</p>
                  <p style={{ fontSize: "2.5em", fontWeight: "bold" }}>08</p>
                </div>
                <div className="newsDetail text-left">
                  <p>
                    Saylani Welfare Distributing Ration & Clothes to affected
                    people of Balochistan. More Details
                  </p>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselContent"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselContent"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
