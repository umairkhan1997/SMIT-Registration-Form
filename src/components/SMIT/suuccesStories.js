import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./SmitStyle.css";

export default class SuccessStories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successStories: [
        {
          name: "Muhammad Muavia",
          designation: "Successfull Freelancer",
          image:
            "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/50956264_2043694195927984_2319693265131012096_n.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_eui2=AeEJ5bGyDb3trt7JzEe6ZaYOzGAFexybysDMYAV7HJvKwNFYP80a8xyUeTcbHUnYJa0rDLO-JCMum0qGJbYaYRQz&_nc_ohc=q4Z-QT7WneUAX9c_REq&_nc_ht=scontent.fkhi1-1.fna&oh=95306bcb55c1bd7a11d095c3ec7be87a&oe=5FFD737C",
          age: 25,
          email: "muhammadmavia172@gmail.com",
          city: "Karachi",
          country: "Pakistan",
          firstApp: "on 15 Oct 2015 Published app on Google playstore",
          earned: "$60k+",
          tag: "Rising Talent",
        },
        {
          name: "Zain Mustafa",
          designation: "Co at Geeks of Kolachi",
          image:
            "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/60358856_2882437938463051_6296076908069126144_o.jpg?_nc_cat=110&ccb=2&_nc_sid=174925&_nc_eui2=AeHT2tYUr8qyx8ceBTs0DXUQxXrMmGZKppfFesyYZkqmlwJOKK4exQF4nn6rtGClT9LRFstGGk0PU8k6XyD-sbl-&_nc_ohc=bQ1ceO0upmIAX8FGFlm&_nc_ht=scontent.fkhi1-1.fna&oh=683feee20cfe5d6ff8bd33a461255682&oe=60002776",
          age: 25,
          email: "muhammadmavia172@gmail.com",
          city: "Karachi",
          country: "Pakistan",
          firstApp: "on 15 Oct 2015 Published app on Google playstore",
          earned: "$60k+",
          tag: "Rising Talent",
        },
        {
          name: "Kashif Suleman",
          designation: "Founder of Expertizo",
          image:
            "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/51500074_10215389217856326_4004531913703292928_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGI0N_G7HqT0ADiNS55wVukS-DD33HjkrJL4MPfceOSsodOAcVzpEtpAHfAqgQQ_AqjW4U0G_2zWCU0mYvdVLR9&_nc_ohc=s2H7LnbrDrUAX8ks8HY&_nc_ht=scontent.fkhi1-1.fna&oh=5624f1edd59e4cbe0e41f5c5a87ef122&oe=5FFDE940",
          age: 25,
          email: "muhammadmavia172@gmail.com",
          city: "Karachi",
          country: "Pakistan",
          firstApp: "on 15 Oct 2015 Published app on Google playstore",
          earned: "$60k+",
          tag: "Rising Talent",
        },
        {
          name: "Muneeb Khan",
          designation: "Founder of Expertizo",
          image:
            "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/51500074_10215389217856326_4004531913703292928_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGI0N_G7HqT0ADiNS55wVukS-DD33HjkrJL4MPfceOSsodOAcVzpEtpAHfAqgQQ_AqjW4U0G_2zWCU0mYvdVLR9&_nc_ohc=s2H7LnbrDrUAX8ks8HY&_nc_ht=scontent.fkhi1-1.fna&oh=5624f1edd59e4cbe0e41f5c5a87ef122&oe=5FFDE940",
          age: 25,
          email: "muhammadmavia172@gmail.com",
          city: "Karachi",
          country: "Pakistan",
          firstApp: "on 15 Oct 2015 Published app on Google playstore",
          earned: "$60k+",
          tag: "Rising Talent",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="Heading">
            <h2>Success Stories</h2>
          </div>
          <div className="row">
            {this.state.successStories.map((e, i) => {
              return (
                <div className="col-md-3">
                  <div className="succesCard text-center">
                    <img className="successImg" src={e.image} width="200px" />
                    <div className="p-5">
                      <h4>{e.name}</h4>
                      <p className="text-muted">{e.designation}</p>
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
