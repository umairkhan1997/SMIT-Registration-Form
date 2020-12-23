import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./QuranApp.css";
import MainHeader from "../Home/MainHeader";
import Footer from "../Footer";

import imgOne from "../../images/apptafseer.jpeg";
import imgTwo from "../../images/al_quran.png";
export default class WhatweDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MainHeader />
        <div style={{ backgroundImage: `url(${imgOne})` }} className="back">
          <div style={{ backgroundColor: "rgba(0,0,0,.5)" }}>
            <div className="container py-5">
              <h1 className="py-3 text-white">Online Quran Pak Tafteesh</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <h3 className="head">Quran Application SOP</h3>
          <p className="para">
            Quran Application Many organisations and individuals have uploaded
            whole Quran on Play Store and Apple Store. Many download and recite
            the same. Errors and omissions have been noted. These errors and
            omissions are not detected by ordinary persons. The recitation is
            intentionally not done correctly. For correct recitation we have
            started verifying Quranic version available on Play Store and Apple
            Store. For this purpose we have emplyed HUFFAZ (WHO HAVE MEMORIZED
            WHOLE QURAN). One can see the list of Quran verified with status,
            whether with errors or without errors. We request you to please
            download only Quran verified and found without errors.
          </p>
          <h3 className="head pb-3">Quran Application Esaal-e-Sawaab</h3>
          <p className="para">
            Quran Esaal-e-Sawab Saylani has employed Quran Huffaz to verify
            correctness of QURAN uploaded on mobile. Every Hafiz completes
            Recitation of whole Quran in one week. Esal e Sawab of These will be
            done to Marhumeens (dead) of donors. We Have decided that donors
            should donate Rs (15,000) or its multiple. For this donation esal e
            Sawab of 4 Quran will be done. Co operation in this regard will be
            appreciated. The donation Will provide financial support to needy
            Huffaz besides Sawab BY Allah.
          </p>

          <h3 className="head pb-3">Android</h3>

          <table
            className="text-left mt-5 mb-5 table-responsive-sm"
            width="100%"
          >
            <thead className="tableHead">
              <tr>
                <th>Logo</th>
                <th>App Name</th>
                <th>Publisher</th>
                <th>Current Version</th>
                <th>Completed Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tableList">
                <td>
                  <img src={imgTwo} width="30px" height="30px" />
                </td>
                <td>Al Quran-ul-Kareem</td>
                <td>Dawateislami</td>
                <td>4.2</td>
                <td>15/11/2018</td>
                <td>No Mistake Found</td>
              </tr>
              <tr className="tableList">
                <td>
                  <img src={imgTwo} width="30px" height="30px" />
                </td>
                <td>Al Quran-ul-Kareem</td>
                <td>Dawateislami</td>
                <td>4.2</td>
                <td>15/11/2018</td>
                <td>No Mistake Found</td>
              </tr>
              <tr className="tableList">
                <td>
                  <img src={imgTwo} width="30px" height="30px" />
                </td>
                <td>Al Quran-ul-Kareem</td>
                <td>Dawateislami</td>
                <td>4.2</td>
                <td>15/11/2018</td>
                <td>No Mistake Found</td>
              </tr>
              <tr className="tableList">
                <td>
                  <img src={imgTwo} width="30px" height="30px" />
                </td>
                <td>Al Quran-ul-Kareem</td>
                <td>Dawateislami</td>
                <td>4.2</td>
                <td>15/11/2018</td>
                <td>No Mistake Found</td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
          <h3 className="head pb-3">IOS </h3>

          <table
            className="text-left mt-5 mb-5 table-responsive-sm"
            width="100%"
          >
            <thead className="tableHead">
              <tr>
                <th>Logo</th>
                <th>App Name</th>
                <th>Publisher</th>
                <th>Current Version</th>
                <th>Completed Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tableList">
                <td>
                  <img src={imgTwo} width="30px" height="30px" />
                </td>
                <td>Al Quran-ul-Kareem</td>
                <td>Dawateislami</td>
                <td>4.2</td>
                <td>15/11/2018</td>
                <td>No Mistake Found</td>
              </tr>
              <tr className="tableList">
                <td>
                  <img src={imgTwo} width="30px" height="30px" />
                </td>
                <td>Al Quran-ul-Kareem</td>
                <td>Dawateislami</td>
                <td>4.2</td>
                <td>15/11/2018</td>
                <td>No Mistake Found</td>
              </tr>
              <tr className="tableList">
                <td>
                  <img src={imgTwo} width="30px" height="30px" />
                </td>
                <td>Al Quran-ul-Kareem</td>
                <td>Dawateislami</td>
                <td>4.2</td>
                <td>15/11/2018</td>
                <td>No Mistake Found</td>
              </tr>
              <tr className="tableList">
                <td>
                  <img src={imgTwo} width="30px" height="30px" />
                </td>
                <td>Al Quran-ul-Kareem</td>
                <td>Dawateislami</td>
                <td>4.2</td>
                <td>15/11/2018</td>
                <td>No Mistake Found</td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
        <Footer />
      </div>
    );
  }
}
