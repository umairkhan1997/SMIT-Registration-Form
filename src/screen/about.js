import React from "react";
import Header from "../components/Home/MainHeader";
import { FaTwitter } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import Navbar from "../smallcomponents/navbar";
import Footer from "../components/Footer";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        {/* About Us Content Start */}
        <div>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-4">
                <ul className="aboutList" >
                  <li >
                    <HashLink to="/aboutus#ourMission" style={{ color: 'black' }}>Our Mission</HashLink>
                  </li>
                  <li>
                    {" "}
                    <HashLink to="/aboutus#ourVision" style={{ color: 'black' }}>Our Vision</HashLink>
                  </li>
                  <li>
                    {" "}
                    <HashLink to="/aboutus#chairmanMessage" style={{ color: 'black' }}>
                      Chairman Message
                    </HashLink>
                  </li>
                  <li>
                    {" "}
                    <HashLink to="/aboutus#ourHistory" style={{ color: 'black' }}>Our History</HashLink>
                  </li>
                  <li>
                    {" "}
                    <HashLink to="/aboutus#thematicArea" style={{ color: 'black' }}>
                      Thematic Area
                    </HashLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-8 " style={{ marginTop: -5 }}>

                <h3 className=" color text-underline mr-5" ><b><u>Our Mission</u></b></h3>
                <p >
                  Alhamdo-llilah! By the grace of Allah, this organization is
                  serving the poor and the distressed people of our society
                  since 5th May 1999. We are a part of a society where the
                  majority of the people residing in villages and towns are
                  living below the poverty line and even deprived of the basic
                  necessities of life.
                </p>
                <p>
                  Now let us take a look at the life of the people living in
                  cities, where unfortunately living conditions are not much
                  different. If we examine their family size, we find a very
                  painful situation, where in a small rented house the husband
                  and the wife with their four children survive with a very low
                  earning.
                </p>
                <p>
                  In today’s world where inflation is at its peak, it is
                  impossible for them to pay for their electricity, children’s
                  education and any medical treatment of any family member.
                </p>
                <h3 className=" color text-underline " ><b><u>Our Vision</u></b></h3>
                <p>
                  Alhamdo-llilah! By the grace of Allah, this organization is
                  serving the poor and the distressed people of our society
                  since 5th May 1999. We are a part of a society where the
                  majority of the people residing in villages and towns are
                  living below the poverty line and even deprived of the basic
                  necessities of life.
                </p>
                <p>
                  Now let us take a look at the life of the people living in
                  cities, where unfortunately living conditions are not much
                  different. If we examine their family size, we find a very
                  painful situation, where in a small rented house the husband
                  and the wife with their four children survive with a very low
                  earning.
                </p>
                <p>
                  In today’s world where inflation is at its peak, it is
                  impossible for them to pay for their electricity, children’s
                  education and any medical treatment of any family member.
                </p>
                <div className="row py-2">
                  <div className="col-md-12 text-center">
                    <img
                      src="https://saylani-welfare-uk.netlify.app/1501745011.jpeg"
                      width="100%"
                      height="100%"
                    />
                    <h4>Hazrat Allama Muhammad Basheer Farooq Qadri</h4>
                    <a
                      style={{ fontSize: "1.2em" }}
                      target="_blank"
                      href="https://twitter.com/BashirFarooq786"
                    >
                      <FaTwitter /> BashirFarooq786
                    </a>
                  </div>
                  <div className="col-md-8 " style={{ marginLeft: -5, marginTop: 60 }}>
                    <h3 className=" color text-underline " ><b><u>Chairman Message</u></b></h3>
                    <p>
                      Alhamdo-llilah! By the grace of Allah, this organization
                      is serving the poor and the distressed people of our
                      society since 5th May 1999. We are a part of a society
                      where the majority of the people residing in villages and
                      towns are living below the poverty line and even deprived
                      of the basic necessities of life.
                    </p>
                    <p>
                      Now let us take a look at the life of the people living in
                      cities, where unfortunately living conditions are not much
                      different. If we examine their family size, we find a very
                      painful situation, where in a small rented house the
                      husband and the wife with their four children survive with
                      a very low earning.
                    </p>
                    <p>
                      In today’s world where inflation is at its peak, it is
                      impossible for them to pay for their electricity,
                      children’s education and any medical treatment of any
                      family member.
                    </p>
                  </div>
                </div>
                <h3 className=" color text-underline " ><b><u>Our History</u></b></h3>
                <p>
                  Alhamdo-llilah! By the grace of Allah, this organization is
                  serving the poor and the distressed people of our society
                  since 5th May 1999. We are a part of a society where the
                  majority of the people residing in villages and towns are
                  living below the poverty line and even deprived of the basic
                  necessities of life.
                </p>
                <p>
                  Now let us take a look at the life of the people living in
                  cities, where unfortunately living conditions are not much
                  different. If we examine their family size, we find a very
                  painful situation, where in a small rented house the husband
                  and the wife with their four children survive with a very low
                  earning.
                </p>
                <p>
                  In today’s world where inflation is at its peak, it is
                  impossible for them to pay for their electricity, children’s
                  education and any medical treatment of any family member.
                </p>
                <h3 className=" color text-underline " ><b><u>Thematic Area</u></b></h3>
                <p>
                  Alhamdo-llilah! By the grace of Allah, this organization is
                  serving the poor and the distressed people of our society
                  since 5th May 1999. We are a part of a society where the
                  majority of the people residing in villages and towns are
                  living below the poverty line and even deprived of the basic
                  necessities of life.
                </p>
                <p>
                  Now let us take a look at the life of the people living in
                  cities, where unfortunately living conditions are not much
                  different. If we examine their family size, we find a very
                  painful situation, where in a small rented house the husband
                  and the wife with their four children survive with a very low
                  earning.
                </p>
                <p>
                  In today’s world where inflation is at its peak, it is
                  impossible for them to pay for their electricity, children’s
                  education and any medical treatment of any family member.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* About Us Content End */}
        <Footer />
      </div>
    );
  }
}
