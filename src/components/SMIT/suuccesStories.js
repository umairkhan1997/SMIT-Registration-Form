import React from "react";
import "./SmitStyle.css";

export default class SuccessStories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successStories: [
        {
          name: "Muhammad Muavia",
          designation: "Successfull Freelancer",
          link: "https://www.upwork.com/o/profiles/users/~01faed32dcb6280c35/",
          image:
            "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/50956264_2043694195927984_2319693265131012096_n.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_eui2=AeEJ5bGyDb3trt7JzEe6ZaYOzGAFexybysDMYAV7HJvKwNFYP80a8xyUeTcbHUnYJa0rDLO-JCMum0qGJbYaYRQz&_nc_ohc=q4Z-QT7WneUAX9c_REq&_nc_ht=scontent.fkhi1-1.fna&oh=95306bcb55c1bd7a11d095c3ec7be87a&oe=5FFD737C",
        },
        {
          name: "Muhammad Zain Mustafa",
          designation: "Co Founder at Geeks of Kolachi",
          link:
            "https://pk.linkedin.com/company/geeksofkolachi?trk=public_profile_experience-item_result-card_subtitle-click",
          image:
            "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/60358856_2882437938463051_6296076908069126144_o.jpg?_nc_cat=110&ccb=2&_nc_sid=174925&_nc_eui2=AeHT2tYUr8qyx8ceBTs0DXUQxXrMmGZKppfFesyYZkqmlwJOKK4exQF4nn6rtGClT9LRFstGGk0PU8k6XyD-sbl-&_nc_ohc=bQ1ceO0upmIAX8FGFlm&_nc_ht=scontent.fkhi1-1.fna&oh=683feee20cfe5d6ff8bd33a461255682&oe=60002776",
        },
        {
          name: "Kashif Suleman",
          designation: "Founder of Expertizo",
          link: "http://expertizo.pk/",
          image:
            "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/51500074_10215389217856326_4004531913703292928_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGI0N_G7HqT0ADiNS55wVukS-DD33HjkrJL4MPfceOSsodOAcVzpEtpAHfAqgQQ_AqjW4U0G_2zWCU0mYvdVLR9&_nc_ohc=s2H7LnbrDrUAX8ks8HY&_nc_ht=scontent.fkhi1-1.fna&oh=5624f1edd59e4cbe0e41f5c5a87ef122&oe=5FFDE940",
        },
        {
          name: "Muneeb Khan",
          designation: "Full Stack Developer at MAGNiTT",
          link: "https://magnitt.com/",
          image:
            "data:image/jpeg;base64,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",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="container py-5">
          <div className="Heading">
            <h2>Success Stories</h2>
          </div>
          <div className="row">
            {this.state.successStories.map((e, i) => {
              return (
                <div className="col-md-3 py-3">
                  <div className="succesCard text-center">
                    <img className="successImg" src={e.image} width="200px" />
                    <div className="p-5">
                      <h5>{e.name}</h5>
                      <p className="text-muted">{e.designation}</p>
                      <p>
                        <a
                          className="text-success"
                          target="_black"
                          href={e.link}
                        >
                          Click for details <i class="fas fa-arrow-right"></i>
                        </a>
                      </p>
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
