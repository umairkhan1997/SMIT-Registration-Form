import React from "react";
import MainHeader from "../components/Home/MainHeader";
import Navbar from "../smallcomponents/navbar";

export default class Location extends React.Component {
  state = {
    pakistanBranches: [
      {
        city: 'KARACHI',
        zone: '(Head Office)',
        address: 'A-25, Main Bahadurabad,Karachi-Pakistan. P.O. Box # 3417',
        ph: 'Ph: (92-21) 34130786 (5 Lines)',
        fax: 'Fax: (92-21) 34127693',
        charity: 'Charity # DSW-3772-K'

      },
      {
        city: 'THATTA',
        zone: '(Zonal Office)',
        address: 'Civil Hospital, Makli District Thatta.',
        ph: 'Ph: (92-333) 1201837',
        fax: '',
        charity: ''

      },
      {
        city: 'HYDERABAD',
        zone: '(Zonal Office)',
        address: 'Sarfaraz Colony, Opp. Bin Tayyab Hospital,Hyderabad',
        ph: 'Ph: (92-22) 2611429 \n (92-22) 2621284',
        fax: '',
        charity: ''

      },
      {
        city: 'UMERKOT',
        zone: '(Zonal Office)',
        address: 'Chor Road, Main UmerKot Bus Stop, Football Ground,UmerKot',
        ph: 'Ph: 0322-2847411',
        fax: '',
        charity: ''

      },
      {
        city: 'TANDO MUHAMMAD K',
        zone: '(Zonal Office)',
        address: 'Shop No. 67, Sajawal Chowk, Near Wapda Grid Station, Tando M. Khan',
        ph: 'Ph: 92-317-1112880',
        fax: '',
        charity: ''

      },
      {
        city: 'QUETTA',
        zone: '(Zonal Office)',
        address: 'Bolan Medical Complex Hospital, Quetta.',
        ph: 'Ph: (92-333) 1201841',
        fax: '',
        charity: ''

      },
      {
        city: 'FAISALABAD',
        zone: '(Zonal Office)',
        address: 'Factory Area, Lal Mill Chowk, Saylani House, Faisalabad.',
        ph: 'Ph: (92-41) 2417272 \n (92-41) 2417373',
        fax: '',
        charity: ''

      },
      {
        city: 'CHINIOT',
        zone: '(Zonal Office)',
        address: 'Near Purani Saddar Chungi, Opp. Railway Station, Sargodha Road. Chiniot.',
        ph: 'Ph: (92-332) 7068410',
        fax: '',
        charity: ''

      },
      {
        city: 'ISLAMABAD',
        zone: '(Zonal Office)',
        address: 'Shop No. 7-J Unit No. 5 Al Sagheer Plaza. F-10 Markaz, Islamabad.',
        ph: 'Ph: (92-51) 2223191',
        fax: '',
        charity: ''

      },
      {
        city: 'RAWALPINDI',
        zone: '(Zonal Office)',
        address: 'S-25 A, Asghar Mall scheme, National Market, Rawalpindi.',
        ph: 'Ph: (92-51) 4940669',
        fax: '',
        charity: ''

      },
      {
        city: 'LAHORE',
        zone: '(Zonal Office)',
        address: 'Main Boy Scout Stop, Walton Road, Lahore.',
        ph: 'Ph: (92-42) 36616577-78',
        fax: '',
        charity: ''

      },
      {
        city: 'SAMUNDRI',
        zone: '(Zonal Office)',
        address: 'Civil Hospital,Main Gujra Road Samundari.',
        ph: 'Ph: (92-300) -0652260',
        fax: '',
        charity: ''
      },
      {
        city: 'MULTAN',
        zone: '(Zonal Office)',
        address: 'Near Faisal Movers Bus stop Inner Ring Road, Tughlaq Town, Multan. ',
        ph: 'Ph: (92-61) 6771997',
        fax: '',
        charity: ''
      },
      {
        city: 'LODHRAN',
        zone: '(Zonal Office)',
        address: 'Outside Old HQ Hospital, Multan Road, Lodhran.',
        ph: 'Ph : 0608-361988',
        fax: '',
        charity: ''
      },
      {
        city: 'SAWABI',
        zone: '(Zonal Office)',
        address: 'Bacha Khan Hospital complex, Swabi',
        ph: 'Ph: (92-336) 6660215',
        fax: '',
        charity: ''
      },
      {
        city: 'LANDI KOTAL',
        zone: '(Zonal Office)',
        address: 'Near Landi Kotal Bazar',
        ph: 'Ph: (92-91) 2261866',
        fax: '',
        charity: ''
      },
      {
        city: 'TORKHAM',
        zone: '(Zonal Office)',
        address: 'Bacha Meena',
        ph: 'Ph: (92-91) 2261864',
        fax: '',
        charity: ''
      },
      {
        city: 'SAWAT',
        zone: '(Zonal Office)',
        address: 'Outside Football Playground opposite Cedar Golf Club.Kabal, Sawat',
        ph: 'Ph: 0946755156',
        fax: '',
        charity: ''
      },
      {
        city: 'PESHAWAR',
        zone: '(Zonal Office)',
        address: 'Old Haji Camp, Bus Stop Warisabad Service Rd, Sikander Town , Peshawar',
        ph: 'Ph: (92-91) 2261864',
        fax: '',
        charity: ''
      },
    ],
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
    const { locations, pakistanBranches } = this.state;
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
            {/* <h3 className="color">PAKISTAN OFFICES</h3> */}
            <h3 className=" color"><b><u>PAKISTAN OFFICES</u></b></h3>
          </div>

          <div className="row p-0 m-0">
            <div className="col-md-3 border-right border-primary">
              <div className="d-flex justify-content-center align-items-center">
                <h3 className=" color"><b><u>KARACHI BRANCHES</u></b></h3>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                {locations.map((e, i) => {
                  return (
                    <div className="col-md-3">
                      <div className="mb-5">
                        <h4 className="color" style={{ height: 50 }}><b>{e.locationName}</b></h4>
                        <span className="text-muted font-weight-bold" >{e.area}</span><br />
                        <span className="text-muted font-weight-bold">{e.number}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>


          {/* PAKISTAN BRANCHES */}
          <div className="row p-0 m-0 mt-5">
            <div className="col-md-3 border-right border-primary">
              <div className="d-flex justify-content-center align-items-center">
                <h3 className=" color"><b><u>OTHER BRANCHES</u></b></h3>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                {pakistanBranches.map((e, i) => {
                  return (
                    <div className="col-md-3">
                      <div className="mb-5">
                        <h4 className="color" style={{ height: 50 }}><b>{e.city}</b></h4>
                        <span className="text-muted font-weight-bold" >{e.zone}</span><br />
                        <span className="text-muted font-weight-bold">{e.ph}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>


        </div>
        <div className="container py-5">
          <div className="text-center p-5">
            {/* <h2>INTERNATIONAL OFFICES</h2> */}
            <h2 className=" color"><b><u>INTERNATIONAL OFFICES</u></b></h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
                alt=""
                height="200px"
                width="100%"
              />
              <div className="internationalOffice">
                <h3 className="color"><b>NOTTINGHAM (U.K)</b></h3>
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
                height="200px"
                width="100%"
              />
              <div className="internationalOffice">
                <h3 className="color"><b>USA (CHICAGO)</b></h3>
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
                height="200px"
                width="100%"
              />
              <div className="internationalOffice">
                <h3 className="color"><b>TURKEY (ONCUPINAR)</b></h3>
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
