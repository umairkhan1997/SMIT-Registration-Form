import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SmitStyle.css";
import award from "../../images/award1.jpg";

export default class SMITAwards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      awards: [
        // {
        //   image: { award },
        //   title:
        //     "Saylani Cisco Academy to be Fastest Growing IT Institute in 2018",
        // },
        {
          image:
            "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/74940239_2203702339731766_7052904111888400384_n.jpg?_nc_cat=102&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeFj1qoWZia3U1pueoKMy5fJmCcwbn_xzbWYJzBuf_HNtWCAFG5207pFGg9GAFWH9-JevEO_qWx2hl3V9gWiWgVC&_nc_ohc=nLJgDCXhZfQAX_fYZ3K&_nc_ht=scontent.fkhi1-1.fna&oh=9f3c9e8768fe0be3d8d824a933161b9a&oe=5FFFA099",
          title:
            "Saylani Cisco Academy to be No. 1 academy in EMAAR region in 2019",
        },
        {
          image:
            "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/47573856_1700972300004775_1287381975568482304_n.jpg?_nc_cat=111&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeH6R7C84JdelUm8HYCVo-S1cpp3W9tsBmlymndb22wGaWtnD9I0v9WCQOFmhqgAxeKaIrun9lGF5tBuhwYSi7mJ&_nc_ohc=u23YCoae8YUAX-yuJoR&_nc_ht=scontent.fkhi1-1.fna&oh=9f0b077ff86999ac48446f5aa537751d&oe=5FFFAE0D",
          title: "Award receiving from Skill Development Council",
        },
        {
          image:
            "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/971787_489553071146710_1802793315_n.jpg?_nc_cat=109&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeGlmWVbNVmWXw6hi4-PQzQdf6-X9Gy6y1h_r5f0bLrLWMfRYvzDVEexMFVBWcwhfr4b98Ha3b30DYfLLSQuSRJJ&_nc_ohc=l87WOsOKdLkAX9gPQgG&_nc_ht=scontent.fkhi1-1.fna&oh=7d9ab5ce9a28d08eda0193c6a0583a2f&oe=5FFF6183",
          title: "City & Guild Approved",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="Heading"></div>

          <div class="container">
            <div
              id="carouselContent"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner" role="listbox">
                {this.state.awards.map((e, i) => {
                  return (
                    <div class="carousel-item text-center p-4">
                      <div className="awardImg">
                        <img width="100%" src={e.image} />
                        <h2>{e.title}</h2>
                      </div>
                    </div>
                  );
                })}
                <div class="carousel-item active text-center p-4">
                  <p>lorem ipsum (imagine longer text)</p>
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
      </div>
    );
  }
}
