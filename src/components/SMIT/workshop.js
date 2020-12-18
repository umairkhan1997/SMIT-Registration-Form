import React from "react";
import img1 from "../../images/workshp/artificialintelligence.png";
import img2 from "../../images/workshp/mastergraphics.png";
import img3 from "../../images/workshp/datascience.png";

export default class Workshop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workshops: [
        {
          thuunbnail:
            "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/121102990_3019673591467966_7426432991536909963_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_eui2=AeFoECix_kLpke4QbHpGjjX3Fr5YtJeOBxcWvli0l44HF5u2LBqSYMSbr6wwiPO-2O1T1_vTm-XyWW5LSKVf5jHT&_nc_ohc=zTECFcH8PEAAX8gT0q-&_nc_ht=scontent.fkhi1-1.fna&oh=d77cf9126724eb62e1a38849df4787a8&oe=5FFDD0EC",
          videoLink:
            "https://www.facebook.com/watch/live/?v=1035626470206650&ref=watch_permalink",
        },
        {
          thuunbnail: img1,
          videoLink:
            "https://www.facebook.com/watch/live/?v=1035626470206650&ref=watch_permalink",
        },
        {
          thuunbnail: img2,
          videoLink:
            "https://www.facebook.com/SaylaniMassTraining/videos/883258332054034/",
        },
        {
          thuunbnail: img3,
          videoLink:
            "https://www.facebook.com/watch/live/?v=475227826691821&ref=watch_permalink",
        },
        {
          thuunbnail:
            "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/53617034_1824479450987392_8469480370167873536_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_eui2=AeH8IgMSj9Ov1kNtg9YVkTVPpAfAYAkLp8qkB8BgCQunylkaE2VUV4A1i2ChPuDHobtxGS2aNTvJasVVK117353V&_nc_ohc=GZw4piuGtzAAX9CW7c0&_nc_ht=scontent.fkhi1-1.fna&oh=2a9ed1c1e8178908e743ac8ce429511c&oe=5FFDB152",
          videoLink:
            "https://www.facebook.com/SaylaniMassTraining/videos/984641801925214/",
        },
        {
          thuunbnail:
            "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/45068889_1650175031751169_6813225119792496640_n.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_eui2=AeFWR32KxsPAShHXMVJ30V5ZKAvpAwm2n9soC-kDCbaf21UdpbY4m4hgd-rZyIv5MXT0RFCTvjy2kORfVJzyNwk5&_nc_ohc=HGjYz8zpMfYAX8QsxWE&_nc_ht=scontent.fkhi1-1.fna&oh=3b97da8850ad39a065bbcee20981adc1&oe=600003A1",
          videoLink:
            "https://www.facebook.com/watch/live/?v=424990128034236&ref=watch_permalink",
        },
        {
          thuunbnail:
            "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/45853017_1666924923409513_1800637276179398656_n.jpg?_nc_cat=100&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEe1CHxUjbKZ1GdM-SZ4mW-6k7gzWTfJtLqTuDNZN8m0qg2GPUjw8Lm-6eDCOQ3Vg_SEpjNF7X3UHj8Ibj4iqKN&_nc_ohc=kPAjMJ_0D1AAX9g3ptj&_nc_ht=scontent.fkhi1-1.fna&oh=dde90ee762301ec37c33d03d290af73a&oe=5FFDC7BB",
          videoLink:
            "https://www.facebook.com/watch/live/?v=747380752282945&ref=watch_permalink",
        },
        {
          thuunbnail:
            "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/36618943_1488801061221901_3191493543713570816_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_eui2=AeGNQyLJ_NgRVsfgWyGbcToYd9Lhwn1Hm4x30uHCfUebjCjsXk_0s9yPg_a7ZxI8un0SVFhH8rxgU5CViTXqOyke&_nc_ohc=JKKLtgrjhmUAX-VzuRx&_nc_ht=scontent.fkhi1-1.fna&oh=c85475cade6f59e6043fc785d0dc49ef&oe=5FFDA19B",
          videoLink:
            "https://www.facebook.com/watch/live/?v=1492881124147228&ref=watch_permalink",
        },
        {
          thuunbnail:
            "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/67520888_2054841691284499_8995798719320293376_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_eui2=AeFn0NppeN1BKvubsb9e1sRqLoxmGnFPdo0ujGYacU92jbaRg3M6SAkVAUyYXiWb_6jcjxlcqdfSK9tw2SPqzYlD&_nc_ohc=bFCRUF3K6zgAX_5-fCT&_nc_ht=scontent.fkhi1-1.fna&oh=e1b55dff248c17ea4bfad95b98d40de6&oe=60005C76",
          videoLink:
            "https://www.facebook.com/watch/live/?v=636512886850407&ref=watch_permalink",
        },
        {
          thuunbnail:
            "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/35671391_1468028283299179_7863256224647610368_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_eui2=AeGePvEe50iN5jMg2FufC0rDeSMNaiRfq355Iw1qJF-rfvCqLs-MjTfhoZwaVuud7h1EEcvTZKxzEJGaQl0QwBFG&_nc_ohc=D_RJW1wa-KcAX8wuoLJ&_nc_ht=scontent.fkhi1-1.fna&oh=b0ec3f373237416b17dfbf072c4c46da&oe=60003D0D",
          videoLink:
            "https://www.facebook.com/SaylaniMassTraining/videos/1473046082797399/",
        },
        {
          thuunbnail:
            "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/46501919_1679465705488768_8535168982972366848_n.jpg?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_eui2=AeGmWqEpym0WWlUjY7ocL_n3N6xKGI6PBrA3rEoYjo8GsGG56DdN5kMYfWeGubtuNH_I2c31Y7yfvm8ZSpwuNSiZ&_nc_ohc=WcDS3ZMsErUAX-w-NqO&_nc_ht=scontent.fkhi1-1.fna&oh=858c087934c86b21853e071131deb727&oe=6000B58B",
          videoLink:
            "https://www.facebook.com/watch/live/?v=439000439968055&ref=watch_permalink",
        },
      ],
    };
  }
  render() {
    return (
      <div className="container my-5">
        <div className="Heading">
          <h2>Workshop</h2>
        </div>
        <div className="row">
          {this.state.workshops.map((e, i) => {
            return (
              <div className="col-md-3">
                <a target="_blank" href={e.videoLink}>
                  <img
                    style={{
                      borderRadius: "8px",
                      boxShadow: "0 10px 12px rgba(0,0,0,.2)",
                    }}
                    src={e.thuunbnail}
                    width="100%"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
