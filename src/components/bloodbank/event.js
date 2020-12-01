import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./blood.css";
import logo from "../../images/logo.png";
import Fade from "react-reveal";
import event1 from "../../images/blood.jpeg";
import event2 from "../../images/blood2.jpeg";
import event3 from "../../images/blood3.jpeg";
import event4 from "../../images/blood4.jpeg";
import event5 from "../../images/blood5.jpeg";
import event6 from "../../images/blood6.jpeg";

export default class BloodBankEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{ backgroundColor: 'rgb(240,240,240)' }}>
                <div className="container">
                    {/* <h2>Blood Bank Events</h2> */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="displayheading">
                                <h2>Well Equiped Lab</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 py-2">
                                    <img width="100%" src={event1} />
                                </div>
                                <div className="col-md-6 py-2">
                                    <img width="100%" src={event2} />
                                </div>
                                <div className="col-md-6 py-2">
                                    <img width="100%" src={event3} />
                                </div>
                                <div className="col-md-6 py-2">
                                    <img width="100%" src={event4} />
                                </div>
                                <div className="col-md-6 py-2">
                                    <img width="100%" src={event5} />
                                </div>
                                <div className="col-md-6 py-2">
                                    <img width="100%" src={event6} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}