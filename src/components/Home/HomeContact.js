import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./Home.css";
import Fade from "react-reveal";

export default class HomeContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      branches: {
        Karachi: [
          {
            name: "Head Office",
            number: "+92 21 111 729 526",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3369624937686!2d67.04072941500263!3d24.85233848405778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa51eb1299cdbf258!2sSaylani%20Welfare!5e0!3m2!1sen!2s!4v1609479035978!5m2!1sen!2s",
            address: "Kharadar Ghulam Hussain Kasim Quarters, Karachi",
          },
          {
            name: "Saylani Kharadar Branch",
            number: "03111-729-526",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7240.786267353681!2d66.99765205110508!3d24.85041911325371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315f8bcf82b51%3A0xbcc5a964204b048f!2sMooljee%20St%2C%20Kharadar%20Bunder%20Quarter%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609479287277!5m2!1sen!2s",
            address: "Kharadar Ghulam Hussain Kasim Quarters, Karachi",
          },
          {
            name: "Saylani S.I.T.E Branch",
            number: "03111-729-526",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.1053684997455!2d66.98843645137791!3d24.894387252452248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3157a412ba1b1%3A0x42a522cc5a0603d7!2sSaylani%20Welfare!5e0!3m2!1sen!2s!4v1609479386271!5m2!1sen!2s",
            address:
              "Ghani Chowrangi S.I.T,E,  Sindh Industrial Trading Estate, Karachi, ",
          },
          {
            name: "Saylani Phase-2 Defence Branch",
            number: "03111-729-526",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28961.80881901948!2d67.0578252752952!3d24.8561261698616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c41ccab3831%3A0x564c9bd6e6b5661!2sSouth%20Park%20Avenue%2C%20Phase%202%20Commercial%20Area%20Defence%20Housing%20Authority%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075500%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609479478110!5m2!1sen!2s",
            address:
              "C28/B 24th Commercial St, Phase 2 Commercial Area Defence Housing Authority, Karachi,",
          },
          {
            name: "Saylani Nazimabad Branch",
            number: "03111-729-526",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.696775429752!2d67.02889831488008!3d24.908322649472147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fb07928d41d%3A0x7c21e4eff11927d3!2sNawab%20Siddique%20Ali%20Khan%20Rd%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2074600%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609479613450!5m2!1sen!2s",
            address: "Main Goli Mar Chowrangi near AmeerHamza Masjid",
          },
          {
            name: "Saylani Gulshan Blood Bank Branch",
            number: "03111-729-526",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.696775429752!2d67.02889831488008!3d24.908322649472147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fb07928d41d%3A0x7c21e4eff11927d3!2sNawab%20Siddique%20Ali%20Khan%20Rd%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2074600%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609479613450!5m2!1sen!2s",
            address:
              "A-495 Allama Shabbir Ahmed Usmani Rd, Block 4 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
          },
          {
            name: "Saylani Johar-2 Branch",
            number: "03111-729-526",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.4982217335805!2d67.12694141488015!3d24.91509184920202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338e3cbb24c07%3A0x48fb9b4163def42!2sJauhar%20Chowrangi%20Service%20Ln%2C%20Block%2013%20Gulistan-e-Johar%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609480035845!5m2!1sen!2s",
            address: "Block 13 Gulistan-e-Johar, Karachi, Karachi City, Sindh",
          },
          {
            name: "Saylani Bolton Branch",
            number: "03111-729-526",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.4056956355753!2d66.99647691487894!3d24.849989851797442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315ff55c5e40f%3A0x6f59600ca7bea683!2sSind%20Market!5e0!3m2!1sen!2s!4v1609480185347!5m2!1sen!2s",
            address:
              "M. A. Jinnah Road، Bunder Quarter, Karachi, Karachi City, Sindh",
          },
          {
            name: "Saylani Civil Branch",
            number: "03111-729-526",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0957205032955!2d67.00832961487932!3d24.860580151375608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e1a8080ff07%3A0xe593f5e1d593ac2d!2sSaylani%20Welfare%20Civil%20Hospital!5e0!3m2!1sen!2s!4v1609480364426!5m2!1sen!2s",
            address:
              "Near Chaand Bibi Road، Dehli Colony، KMC Work Area, Karachi, Karachi City, Sindh",
          },
        ],
        Hyderabad: [
          {
            name: "Head Office",
            number: "+92 21 111 729 526",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3369624937686!2d67.04072941500263!3d24.85233848405778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa51eb1299cdbf258!2sSaylani%20Welfare!5e0!3m2!1sen!2s!4v1609479035978!5m2!1sen!2s",
            address: "Kharadar Ghulam Hussain Kasim Quarters, Karachi",
          },
        ],
      },
      currentLocation: {
        name: "Head Office",
        number: "+92 21 111 729 526",
        location:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3369624937686!2d67.04072941500263!3d24.85233848405778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa51eb1299cdbf258!2sSaylani%20Welfare!5e0!3m2!1sen!2s!4v1609479035978!5m2!1sen!2s",
        address: "Kharadar Ghulam Hussain Kasim Quarters, Karachi",
      },
      currentCity: "",
    };
  }
  render() {
    const { currentCity } = this.state;
    return (
      <div>
        <div className="container">
          <div className="displayheading">
            <h1>Over Branches</h1>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#d8dfe6",
          }}
        >
          <div
            style={{ borderTop: "1px solid #0066b3" }}
            className="bg-white py-5 shadow"
          >
            <div className="container">
              <select
                style={{
                  border: "none",
                  fontSize: "2em",
                  borderBottom: "2px solid #0066b3",
                  padding: "10px 15px",
                }}
                onChange={(e) => this.setState({ currentCity: e.target.value })}
              >
                <option>Karachi</option>
                <option>Hyderabad</option>
                <option>Faisalabad</option>
              </select>
            </div>
          </div>
          <div className="container py-4">
            <div className="row">
              {this.state.branches.Karachi.map((e, i) => {
                return (
                  <div className="col-md-4 py-3">
                    <div
                      onClick={() => this.setState({ currentLocation: e })}
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                      className="card branchCard bg-white p-3 shadow rounded"
                    >
                      <p className="location">{e.name}</p>
                      <p className="text-muted">
                        <i class="fas fa-map-marker-alt"></i> A-25,
                        {e.address}
                      </p>
                      <p>
                        <i class="fas fa-phone-alt"></i>{" "}
                        <a href="tel:111729526">UAN: {e.number}</a>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div></div>

          <div
            class="modal fade"
            id="exampleModalLong"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div
                  style={{ backgroundColor: "#0066b3", color: "white" }}
                  class="modal-header"
                >
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    {this.state.currentLocation.name}
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <iframe
                    src={this.state.currentLocation.location}
                    width="100%"
                    height="450"
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </div>
                <div class="modal-footer">
                  <button type="button" class="prevbtn" data-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
