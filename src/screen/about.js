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
                <ul className="aboutList">
                  <li>
                    <HashLink to="/aboutus#ourMission">Over Mission</HashLink>
                  </li>
                  <li>
                    {" "}
                    <HashLink to="/aboutus#ourVision">Over Vision</HashLink>
                  </li>
                  <li>
                    {" "}
                    <HashLink to="/aboutus#chairmanMessage">
                      Chairman Message
                    </HashLink>
                  </li>
                  <li>
                    {" "}
                    <HashLink to="/aboutus#ourHistory">Our History</HashLink>
                  </li>
                  <li>
                    {" "}
                    <HashLink to="/aboutus#thematicArea">
                      Thematic Area
                    </HashLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-8">
                <h2 id="ourMission" className="text-underline">
                  Our Mission
                </h2>
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
                <h2 id="ourVision">Our Vision</h2>
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
                  <div className="col-md-4 text-center">
                    <img
                      src="https://saylani-welfare-uk.netlify.app/1501745011.jpeg"
                      width="100%"
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
                  <div className="col-md-8">
                    <h2 id="chairmanMessage">Chairman Message</h2>
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
                <h2 id="ourHistory">Our History</h2>
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
                <h2 id="thematicArea">Thematic Area</h2>
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
