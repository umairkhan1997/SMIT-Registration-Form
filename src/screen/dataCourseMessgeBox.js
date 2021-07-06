


import React from "react";
import logo from "../images/smitlogo.png";
import "jspdf/dist/polyfills.es.js";
import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";


class DataCourseMessgeBox extends React.Component {

    render() {
        return (
            <div className="backgroundLight">



                <div className="container bg-white p-5 my-5 rounded shadow">
                    <div className="p-3">
                        <img src={logo} width="100px" />
                    </div>
                    <div>
                        <div className="text-left p-0">
                            <h3 className="p-3">
                                Thank you for applying for Data Analytics Bootcamp. Registration confirmation will be sent to the eligible candidates shortly on first come first serve basis.
              </h3>
                            <div className="color p-3" style={{ fontSize: "1.5em" }}>
                                <Link to="/">Go Back To Admission Form Page</Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}


export default withRouter(
    DataCourseMessgeBox
);