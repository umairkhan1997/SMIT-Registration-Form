import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default class CashCollectionPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cashpoints: [
        {
          branchName: "Numaish Branch",
          branchNumber: "0333-1201819",
          address: "Plot # J/M 2/284 National congress road Numaish Karachi",
          geolocation:
            "https://www.google.com/maps/place/Saylani+Welfare+Numaish+Branch/@24.8701086,67.0356154,15z/da ta=!4m8!1m2!2m1!1ssaylani+welfare!3m4!1s0x0:0x59af50a7e6aeac9b!8m2!3d24.8737251!4d67.0362487",
        },
        {
          branchName: "Aliabad Branch",
          branchNumber: "0333-1201801",
          address: "House # 1638 ground flour aliabad block 3FB.area",
          geolocation:
            "https://www.google.com/maps/place/Saylani+Welfare/@24.9198181,67.0634111,20z/data=!4m12!1m6!3 m5!1s0x3eb33f137a04ed61:0x36e65e71f4d9828c!2sSaylani+Welfare!8m2!3d24.9199449!4d67.0636247!3 m4!1s0x3eb33f137a04ed61:0x36e65e71f4d9828c!8m2!3d24.9199449!4d67.0636247",
        },
        {
          branchName: "Clifton Branch",
          branchNumber: "0333-1201807-08",
          address:
            "Shop No. 15-16, Perdesi Pride, Old Race Court, Teen Talwar, Karachi",
          geolocation:
            "https://www.google.com/maps/place/saylani+welfare/@24.8348932,67.0330571,16.25z/data=!4m8!1m2!2 m1!1ssaylani+welfare!3m4!1s0x0:0xc54f351de0c0c7f8!8m2!3d24.8353736!4d67.0369971",
        },
        {
          branchName: "Civil Hospital Branch",
          branchNumber: "0333-1201805",
          address:
            "Near Trauma Center, Chand Bibi Road, Civil Hospital Karachi.",
          geolocation:
            "https://www.google.com/maps/place/24%C2%B051'38.1%22N+67%C2%B000'37.9%22E/@24.8605785,67.0 083481,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d24.8605785!4d67.0105368?hl=en https://goo.gl/maps/wfDsuvmeoZM7zpnx7",
        },
        {
          branchName: "Jauhar 2 Branch",
          branchNumber: "0333-1201813",
          address:
            "Block 13, Near Dar ul Sehat Hospital, Jauhar Chowrangi, Gulistan e Jauhar Karachi.",
          geolocation:
            "https://www.google.com/maps/place/Saylani+Jauhar+Branch/@24.9127877,67.1267927,15z/data=!4m12!1 m6!3m5!1s0x0:0x1c0ffb72217cd3c!2sSaylani+Jauhar+Branch!8m2!3d24.9127877!4d67.1267927!3m4!1s0x0 :0x1c0ffb72217cd3c!8m2!3d24.9127877!4d67.1267927",
        },
        {
          branchName: "Saylani Blood Bank",
          branchNumber: "021-34990413",
          address: "Plot No. A-5, FL-3, Block 4, Gulshan-e-Iqbal Karachi",
          geolocation:
            "https://www.google.com/maps/place/Saylani+Welfare/@24.9307526,67.0988849,18.75z/data=!4m5!3m4! 1s0x3eb33f137a04ed61:0x36e65e71f4d9828c!8m2!3d24.9199449!4d67.0636247",
        },
        {
          branchName: "Crown & Saylani",
          branchNumber: "0333-1201630",
          address: "Plot No. 540, Jahangir Road, Karachi.",
          geolocation:
            "https://www.google.com/maps/place/24%C2%B053'01.3%22N+67%C2%B002'25.6%22E/@24.8836814,67.0 38251,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d24.8836814!4d67.0404397?q=24.8836814,67.04043 97&z=17&hl=en",
        },
        {
          branchName: "Hill Park Branch",
          branchNumber: "0333-1201591",
          address:
            "Plot No. 18/7, Block 7&8, Karachi Memon Cooperative Housing Society, Near Goal Masjid & Ideal Bakery Karachi. ",
          geolocation: "https://goo.gl/maps/LnCmdUMz74UwudBQ6",
        },
        {
          branchName: "Boltan Market Branch",
          branchNumber: "0333-1201804",
          address:
            "Shop No. 1, Allied Bank Sindh Market, Main Tower, M.A Jinnah Road Karachi",
          geolocation:
            "https://www.google.com/maps/place/24%C2%B050'59.6%22N+66%C2%B059'55.2%22E/@24.8498785,66.9 96486,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d24.8498785!4d66.9986747?q=24.8498785,66.99867 47&z=17&hl=en",
        },
        {
          branchName: "Kharadar Branch",
          branchNumber: "0333-1201815",
          address: "Plot no GK.6/70 Taboot line jafar fiddo road kharadar.",
          geolocation:
            "https://www.google.com/maps/place/24%C2%B051'03.4%22N+66%C2%B059'43.3%22E/@24.8509504,66.9 931734,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d24.8509504!4d66.9953621?hl=en",
        },
        {
          branchName: "Badar Commercial",
          branchNumber: "0333-1201809",
          address:
            "plot no 35c BADAR Commercial street 10 phase 5 Extension opp bundo khan hotel",
          geolocation:
            "https://www.google.com/maps/place/24%C2%B047'54.6%22N+67%C2%B002'43.2%22E/@24.7984852,67.0 431331,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d24.7984852!4d67.0453218?q=24.7984852,67.0453 218&z=17&hl=en",
        },
        {
          branchName: "Saylani Logistic Center",
          branchNumber: "0333-1201831",
          address:
            "Plot # 531 Shikar Pur Colony JM society. Dada bhai nooroji road karachi",
          geolocation:
            "https://www.google.com/maps/place/24%C2%B052'35.2%22N+67%C2%B002'41.0%22E/@24.8764349,67.0 425274,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d24.8764349!4d67.0447161?hl=en",
        },
        {
          branchName: "Ghani Chowrangi Branch",
          address: "Site area Ghani chowrangi plot no E/33 Near railway phatak",
          branchNumber: "0333-1201811",
          geolocation:
            "https://www.google.com/maps/place/24%C2%B053'41.2%22N+66%C2%B059'21.7%22E/@24.8947735,66.9 8717,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d24.8947735!4d66.9893587?q=24.8947735,66.989358 7&z=17&hl=en",
        },
        {
          branchName: "Saylani House - Phase 2",
          address:
            "Plot No. C/1, Block No. 43, Street # 24, Commercial Street, DHA Phase 2 Ext. Near Master Juice, Karachi.",
          branchNumber: "0333-1201588",
          geolocation:
            "https://www.google.com/maps/place/Saylani+Welfare+international+Trust/@24.8309166,67.0687688,20z/ data=!4m12!1m6!3m5!1s0x0:0x4f228ff92932352f!2sMaster+Juice+and+baryani+centar!8m2!3d24.8309239 !4d67.0691269!3m4!1s0x3eb33d8cdb7814d3:0xf9b49e001907d57d!8m2!3d24.8310432!4d67.0693311",
        },
        {
          branchName: "Burns Road Branch",
          address:
            "Shop No. KS-164/6, Opp. Women Girls College, Ferrier Road, Burns Road Karachi",
          branchNumber: "0333-1201653",
          geolocation:
            "https://www.google.com/maps/place/24%C2%B051'26.9%22N+67%C2%B001'05.4%22E/@24.8574768,67.0 159794,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d24.8574768!4d67.0181681?hl=en",
        },
        {
          branchName: "Punjab Chowrangi Branch",
          address:
            "16-B CHANDIO VILAGE MAIN KHY-E- JAMI commercial ph 2 extension.",
          branchNumber: "0333-1201830",
          geolocation:
            "https://www.google.com/maps/place/24%C2%B049'43.9%22N+67%C2%B002'49.4%22E/@24.8288624,67.0 448667,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d24.8288624!4d67.0470554?hl=en",
        },
        {
          branchName: "Khadda Market Branch",
          address:
            "Shop No. 02, Plot No. S-37/C, Stadium Lane 4, Stadium Commercial Phase 5, DHA Karachi.",
          branchNumber: "0321-1275050",
          geolocation:
            "https://www.google.com/maps/place/Saylani+Welfare+International+Trust/@24.8513155,66.9976086,21z/data=!4m5!3m4!1s0x3eb315f923cab983:0x718842382464219b!8m2!3d24.8513094!4d66.9977367?shorturl=1",
        },
        {
          branchName: "Saddar Branch",
          address:
            "Shop no 07 Aljadeed centre electronics market near hashmi centre saddar khi",
          branchNumber: "0333-1201822",
          geolocation:
            "https://www.google.com/maps/place/24%C2%B051'47.3%22N+67%C2%B001'26.7%22E/@24.8631482,67.0 218833,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d24.8631482!4d67.024072?q=24.8631482,67.02407 2&z=17&hl=en",
        },
        {
          branchName: "Garden Branch",
          address: "Plot no 200 near jumman shah mazar garden west khi",
          branchNumber: "0333-1201810",
          geolocation:
            "https://www.google.com/maps/place/24%C2%B052'49.0%22N+67%C2%B001'23.7%22E/@24.8790369,67.0 007807,13.5z/data=!4m5!3m4!1s0x0:0x0!8m2!3d24.8802746!4d67.0232597?hl=en https://goo.gl/maps/8YJiS7u9mNwGi6vp9",
        },
        {
          branchName: "Korangi No. 4, Branch",
          address:
            "Plot No. 1,2,3,4,5, Sector 48-E, Near Mobile Market, Korangi No. 4, Karachi.",
          branchNumber: "0333-1201816",
          geolocation:
            "https://www.google.com/maps/place/24%C2%B049'40.0%22N+67%C2%B009'31.3%22E/@24.8524444,67.0 462356,12z/data=!4m16!1m10!4m9!1m4!2m2!1d67.0683297!2d24.882976!4e1!1m3!2m2!1d67.158689!2d 24.8277806!3m4!1s0x0:0x0!8m2!3d24.8277806!4d67.158689?hl=en",
        },
        {
          branchName: "Ameer Hamza Branch",
          address: "Nazimabad No. 2, Main Golimar Chorangi, Ameer Hamza Masjid",
          branchNumber: "0333-1201803",
          geolocation:
            "https://www.google.com/maps/place/24%C2%B053'60.0%22N+67%C2%B001'35.6%22E/@24.8999933,67.0 243692,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d24.8999933!4d67.0265579?q=24.899993252276,6 7.02655792236328&z=17&hl=en",
        },
        {
          branchName: "Paposh Nagar Branch",
          address:
            "VT-14/A, Nazimabad Opp. UBL Bank, Paposh Nagar, Nazimabad Karachi.",
          branchNumber: "------",
          geolocation:
            "https://www.google.com/maps/place/24%C2%B055'10.0%22N+67%C2%B001'44.5%22E/@24.9194303,67.0 268347,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d24.9194303!4d67.0290234?q=24.9194303,67.0290 234&z=17&hl=en",
        },
        {
          branchName: "North Karachi 5C/2",
          address: "R-17, Sector 5C/2, Near Rajhistan Kabab Karachi",
          branchNumber: "0333-1201821-20",
          geolocation:
            "https://www.google.com/maps/place/Sector+5c%2F2,+Karachi,+Pakistan/@24.9912363,67.0602834,17z/da ta=!3m1!4b1!4m5!3m4!1s0x0:0xc049732e61595681!8m2!3d24.9914031!4d67.0620974?hl=en",
        },
        {
          branchName: "Maskan Branch",
          address:
            "Shop No. 10, Gulshan e Iqbal Block 4, Residency Apartment, Near Disco Bakery & Discovery Medical Karachi.",
          branchNumber: "0333-1201817",
          geolocation:
            "https://www.google.com/maps/place/Saylani+Welfare+Trust,+Gulshan+Branch/@24.9303218,67.0987844, 19z/data=!4m12!1m6!3m5!1s0x0:0xfc89cc5d65354581!2sDisco+Bakers!8m2!3d24.9291494!4d67.0972985! 3m4!1s0x3eb338b5cdbbc095:0x3bd5f577d2e87a59!8m2!3d24.9306815!4d67.0992096",
        },
        {
          branchName: "Jauhar 1 Branch",
          address:
            "Shop No. 2, Gulistan Jauhar, Perfume Chowk, Beenish Heights Apartment, Near Dar ul Sehat Hospital Karachi.",
          branchNumber: "0333-1201833",
          geolocation:
            "https://www.google.com/maps/place/Saylani+Jauhar+Branch/@24.9088723,67.1084043,15z/data=!4m8!1 m2!2m1!1ssaylani+welfare+Jauhar+Branch!3m4!1s0x0:0x1c0ffb72217cd3c!8m2!3d24.9127895!4d67.12679 74",
        },
        {
          branchName: "M. Ali Society Branch",
          address:
            "Near KDA , Subway & Tabba Chowrangi, M. Ali Society Karachi.",
          branchNumber: "0333-1201824",
          geolocation:
            "https://www.google.com/maps/place/24%C2%B052'48.6%22N+67%C2%B005'15.5%22E/@24.8801624,67.0 854406,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d24.8801624!4d67.0876293?hl=en",
        },
        {
          branchName: "Gulistan-e-Johar",
          address:
            "Johar branch address sulaira apartment near Johar chowrangi blk -13",
          branchNumber: "0333-1201813",
          geolocation:
            "https://www.google.com/maps/place/24%C2%B055'17.4%22N+67%C2%B001'34.0%22E/@24.9215033,67.0 239346,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d24.9215033!4d67.0261233?hl=en",
        },
        {
          branchName: "Jinnah Avenue",
          address:
            "House No. 6 MC 153 Air Port Back Site Near Security Printing Press Jinnah Avenue",
          branchNumber: "3331201837",
          geolocation:
            "https://www.google.com/maps/place/24%C2%B053'42.0%22N+67%C2%B010'43.7%22E/@24.8950751,67.1 740864,16.5z/data=!4m5!3m4!1s0x0:0x0!8m2!3d24.8949928!4d67.1787994?hl=en",
        },
        {
          branchName: "Jama Cloth Market",
          address: "Opposite Akhun Masjid Khardar karachi",
          branchNumber: "3331201657",
          geolocation:
            "https://www.google.com/maps/search/Bara%20Imam%20Bargah/@24.851766702149423,66.99819897684 552,17z?hl=en",
        },
        {
          branchName: "Seher Commericial",
          address: "Main Sehar commerical Phase 7 dha karachi",
          branchNumber: "+92 314 2266791",
          geolocation:
            "https://www.google.com/maps/dir/Saylani+Welfare+international+Trust/Saylani+Welfare+international+Trust,+87+C,+D.H.A.+Phase+7+Phase+2+Commercial+Area+Defence+Housing+Authority,+Karachi,+Karachi+City,+Sindh+75500,+Pakistan/@24.8308311,67.0699884,19z/data=!4m13!4m12!1m5!1m1!1s0x3eb33d8cdb7814d3:0xf9b49e001907d57d!2m2!1d67.069331!2d24.831043!1m5!1m1!1s0x3eb33d8cdb7814d3:0xf9b49e001907d57d!2m2!1d67.069331!2d24.831043",
        },
        {
          branchName: "Touheed Commercial",
          address:
            "Opposite abdullah shah ghazi mazar Touheed commerical phase 5",
          branchNumber: "0333-1201661",
          geolocation: "https://goo.gl/maps/AGqFULmk4FjLLUYh8",
        },
        {
          branchName: "Johar Medical",
          address: "LAL Pathar Buliding Lakhani Heights Near Johar Mor",
          branchNumber: "03111028328",
          geolocation:
            "https://www.google.com/maps/place/Lakhani+Heights/@24.9050873,67.116592,20z/data=!4m12!1m6!3m 5!1s0x0:0x4c9091206558e2fd!2sLakhani+Heights!8m2!3d24.9052856!4d67.1166309!3m4!1s0x3eb33921c9 a1dd07:0x4c9091206558e2fd!8m2!3d24.9052856!4d67.1166309",
        },
        {
          branchName: "Mumtaz Mall Gulshan",
          address: "Mumtaz Mobile Mall",
          branchNumber: "03332242868",
          geolocation:
            "https://www.google.com/maps/place/Mumtaz+Mobile+Mall/@24.9258378,67.0899409,15z/data=!4m5!3m 4!1s0x0:0x8391f26ee44fd267!8m2!3d24.9258378!4d67.0899409",
        },
        {
          branchName: "Nagori Bacha Jail",
          address: "Bhess colony near Bilal Masjid",
          branchNumber: "0342-0801992",
          geolocation: "https://goo.gl/maps/DgN9CPXnTPV7bnWX7",
        },
        {
          branchName: "Malir Jinnah Square",
          address: "shop no#C_204 malir jinnah square",
          branchNumber: "+92 314 2038239",
          geolocation: "https://goo.gl/maps/i4BvkN51Tu8JpmQX8",
        },
        {
          branchName: "Port Qasim",
          address:
            "Adres Port Qasim Ahsas Pirogram Saylani Langer Khana Near Tariq Hotel & P S O Petrol Pump",
          branchNumber: "0333-1201596",
          geolocation: "https://goo.gl/maps/kchgAhtw3Uvn8cGUA",
        },
        {
          branchName: "Godam Highway",
          address: "Adj Daewoo Super Highway",
          branchNumber: "+92 321 7092682",
          geolocation: "https://goo.gl/maps/MetTd4B5HFCU9SGa8",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.state.cashpoints.map((e, i) => {
              return (
                <div className="col-md-3 py-2">
                  <div className="casCollectionCard">
                    <h4>{e.branchName}</h4>
                    <p style={{ fontSize: ".9em" }} className="text-muted">
                      {e.address}
                    </p>
                    <div>
                      <a
                        className="cashCollectionLink"
                        href={`tel:${e.geolocation}`}
                      >
                        <FaPhoneAlt />
                      </a>
                      <a className="cashCollectionLink" href={e.geolocation}>
                        <FaMapMarkerAlt />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
