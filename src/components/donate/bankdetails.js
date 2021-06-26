import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import logo from "../../images/logo.png";
import Zoom from "react-reveal/Zoom";
import "./donate.css";

export default class BankDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BankDetails: false,
      collectionPoints: false,
    };
  }

  render() {
    return (
      <div>
        <div className="pt-3 pb-5 grad">
          <div className="container">
            <div className="row mt-5 mb-5">
              <div className="col-md-6 p-1">
                <div className="bankDetailsCard text-left bg-dark text-white p-3">
                  <img
                    width="100%"
                    src="https://www.westernunion.com/content/dam/wu/logo/logo.wu.big.svg"
                  />
                  <p>Please Donation in Favour of</p>
                  <ol>
                    <li>Yousuf Lakhani</li>
                    <li>Arif Lakhani</li>
                    <li>Bashir Ahmed Polani</li>
                  </ol>
                  <p>Do Not Forget To Send Us It's (MTCN) No.</p>
                </div>
              </div>
              <div className="col-md-6 p-1">
                <div className="bankDetailsCard text-left p-3">
                  <img
                    width="100%"
                    src="http://global.moneygram.com/images/logo.png"
                  />
                  <p>
                    You can send donation by using secure website. Please send
                    donation in favour of
                  </p>
                  <ol>
                    <li>Yousuf Lakhani</li>
                    <li>Arif Lakhani</li>
                    <li>Bashir Ahmed Polani</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="py-3"
            style={{ backgroundColor: "rgba(255,255,255,.3)" }}
          >
            <div>
              <table
                style={{ height: "100vh" }}
                className="bankTable bg-white table-white shadow rounded table-responsive-sm table-hover table table-responsive"
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Bank Name</th>
                    <th>Swift Code</th>
                    <th>Currency</th>
                    <th>IBAN</th>
                    <th>Account Number</th>
                    <th>Account Title</th>
                    <th>Branch Code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>DUBAI ISLAMIC BANK</td>
                    <td>DUIBPKKA</td>
                    <td>PKR</td>
                    <td>PK46DUIB0000000011036001</td>
                    <td>11036001</td>
                    <td>Saylani Welfare</td>
                    <td>0-020</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>UNITED BANK LTD</td>
                    <td>UNILLPKKA</td>
                    <td>PKR</td>
                    <td>PK37UNIL00000932-37300786</td>
                    <td>37300786</td>
                    <td>Saylani Welfare</td>
                    <td>0-932</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>UNITED BANK LIMITED</td>
                    <td>UNILLPKKA</td>
                    <td>DOLLAR</td>
                    <td>PK97UNIL0112093235000541</td>
                    <td>35000541</td>
                    <td>Saylani Welfare</td>
                    <td>0-932</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>BANK AL FALAH</td>
                    <td>ALFHPKKA016</td>
                    <td>PKR</td>
                    <td>PK79ALFH0016001705845</td>
                    <td>New Ac = (1705845) &amp; Old Ac = (1005)</td>
                    <td>Saylani Welfare</td>
                    <td>00-16</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>J S BANK</td>
                    <td>JSBLPKKA</td>
                    <td>PKR</td>
                    <td>PK21JSBL9523000000213318</td>
                    <td>213318</td>
                    <td>Saylani Welfare</td>
                    <td>952</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>HABIB BANK LIMITED</td>
                    <td>HABBPKKA007</td>
                    <td>PKR</td>
                    <td>PK48 HABIB 0050 1079 0026 1955</td>
                    <td>50107900261955</td>
                    <td>Saylani Welfare</td>
                    <td>5010</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>MIB</td>
                    <td>MCIBPKKI</td>
                    <td>PKR</td>
                    <td>PK12MCIB0231000189660002</td>
                    <td>0231000189660002</td>
                    <td>Saylani Welfare</td>
                    <td>023</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>BANK AL HABIB</td>
                    <td>BAHLPKKA</td>
                    <td>PKR</td>
                    <td>PK28 BAHL1007008100805101</td>
                    <td>00-8100805101</td>
                    <td>Saylani Welfare</td>
                    <td>1007</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>BANK ISLAMI PAKISTAN</td>
                    <td>BKIPPKKA</td>
                    <td>PKR</td>
                    <td>PK39BKIP0100500058940001</td>
                    <td>1005-00058940206</td>
                    <td>Saylani Welfare</td>
                    <td>1005</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>MEEZAN BANK</td>
                    <td>MEZNPKKA120</td>
                    <td>PKR</td>
                    <td>PK13MEZN0001200100405112</td>
                    <td>01200100405112</td>
                    <td>Saylani Welfare</td>
                    <td>0120</td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>HABIB METRO POLITAN</td>
                    <td>MPBLPKKA029</td>
                    <td>PKR</td>
                    <td>PK29MPBL0129027140114362</td>
                    <td>20311-714-114362</td>
                    <td>Saylani Welfare</td>
                    <td>0-29</td>
                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td>UBL AMEEN</td>
                    <td>UNILPKKAIMB</td>
                    <td>PKR</td>
                    <td>PK49 UNIL 0112 0891 1000 4140</td>
                    <td>0112-0891-1000-4140</td>
                    <td>Saylani Welfare</td>
                    <td>0-891</td>
                  </tr>
                  <tr>
                    <th scope="row">13</th>
                    <td>FAISAL BANK</td>
                    <td>FAYSPKKA344</td>
                    <td>PKR</td>
                    <td>PK75FAYS3443301000000160</td>
                    <td>3443301000000160</td>
                    <td>Saylani Welfare</td>
                    <td>344</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
