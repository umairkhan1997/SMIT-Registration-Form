import React from "react";
import { connect } from "react-redux";
import {
  smitWorkshopGet

} from "../../Redux/action/smitAction";
class Workshop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workshop: [
        {
          Name: "How dreams come true",
          TeacherHostName: "Sir Syed Mudassir Zaidi",
          Date: "10 October 2020",
          vanue:
            "SMIT, Saylani Head Office , A25, Bahadurabad 4 Minar Chowrangi, Karachi, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/1035626470206650",
        },
        {
          Name: "Grand Workshop on Art of Freelancing",
          TeacherHostName: "Sir Muhammad Ali Mughal",
          Date: "23 February 2020",
          vanue:
            "SMIT, Najmi Banquet Near MaaJee Hospital, Latifabad Unit No.8 Hyderabad, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/475227826691821",
        },
        {
          Name: "Mastering Art of Graphic Designing",
          TeacherHostName: "Sir Imran Ali Dina (CEO GFX Mentor)",
          Date: "1 Spetember 2019",
          vanue:
            "SMIT, Saylani Gulshan Campus, Mumtaz Mall , Adjacent to Imtiaz Super Mrt , Gulshan Chowrangi, karachi, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/883258332054034",
        },
        {
          Name: "Art of Freelancing",
          TeacherHostName: "Sir Muhammad Ali Mughal",
          Date: "30 Spetember 2019",
          vanue:
            "SMIT, Saylani House Lall mill chowk, Factory Area Faisalabad, Punjab.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/595135897939774",
        },
        {
          Name: "Workshop of Adobe XD",
          TeacherHostName: "Sir Raheel Gulraiz",
          Date: "3 November 2019",
          vanue:
            "SMIT, Saylani Gulshan Campus, Mumtaz Mall , Adjacent to Imtiaz Super Mrt , Gulshan Chowrangi, Karachi, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/748817325543290",
        },
        {
          Name: "Workshop on Creative Thinking",
          TeacherHostName: "Asim Ali (Business Executive)",
          Date: "9 March 2019",
          vanue:
            "SMIT, Saylani Head Office , A25, Bahadurabad 4 Minar Chowrangi, Karachi, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/984641801925214",
        },
        {
          Name: "Workshop on Social Media Marketing Technique",
          TeacherHostName: "Sir Nooruddin Surani (COO Viftech Pvt Ltd)",
          Date: "25 August 2019",
          vanue:
            "SMIT, Saylani Head Office , A25, Bahadurabad 4 Minar Chowrangi, Karachi, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/2799756600052486",
        },
        {
          Name: "Workshop on Artificial Intelligence",
          TeacherHostName: "Sir Muhammad Ali Mughal",
          Date: "16 November 2019",
          vanue:
            "SMIT, Saylani House Lall mill chowk, Factory Area Faisalabad, Punjab.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/556330784934444",
        },
        {
          Name: "Workshop on Entrepreneurship",
          TeacherHostName: "Azhar Rizvi",
          Date: "11 November2018",
          vanue:
            "SMIT, Saylani Head Office , A25, Bahadurabad 4 Minar Chowrangi, Karachi, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/747380752282945",
        },
        {
          Name: "Workshop Freelancing (FIVERR & UPWORK)",
          TeacherHostName: "Sir Kamran Qadri ( Founder devncode)",
          Date: "21 July 2018",
          vanue:
            "SMIT, Saylani Head Office , A25, Bahadurabad 4 Minar Chowrangi, Karachi, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/1513635195405154",
        },
        {
          Name: "Workshop of How to Sell your Graphic Designing Skills",
          TeacherHostName: "Imran Ali Dina",
          Date: "24 November 2018",
          vanue:
            "SMIT, Saylani Head Office , A25, Bahadurabad 4 Minar Chowrangi, Karachi, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/439000439968055",
        },
        {
          Name: "Workshop Freelancing (FIVERR)",
          TeacherHostName: "Sir Kamran Qadri ( Founder devncode)",
          Date: "30 july 2018",
          vanue:
            "SMIT, Saylani Head Office , A25, Bahadurabad 4 Minar Chowrangi, Karachi, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/1528143577287649",
        },
        {
          Name: "Workshop on Data Science",
          TeacherHostName: "Sir Muhammad Ali Mughal",
          Date: "6 August 2019",
          vanue:
            "SMIT, Saylani House Lall mill chowk, Factory Area Faisalabad, Punjab.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/636512886850407",
        },
        {
          Name: "Digital Leadership Workshop",
          TeacherHostName: "Syed Sohail Ahmed",
          Date: "7 April 2018",
          vanue:
            "SMIT, Saylani Head Office , A25, Bahadurabad 4 Minar Chowrangi, Karachi, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/1395363293899012",
        },
        {
          Name: "Workshop on Art of Freelancing",
          TeacherHostName: "Sir Muhammad ALi Mughal",
          Date: "8 December 2019",
          vanue:
            "Bantva Memon Jamat Banquet, Shah Faisal Town, Karachi, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/1395363293899012",
        },
        {
          Name: "Workshop (Importance of Open source in IT World)",
          TeacherHostName: "Wajahat Karim (Senior Developer)",
          Date: "1 Semptember 2018",
          vanue:
            "SMIT, Saylani Head Office , A25, Bahadurabad 4 Minar Chowrangi, Karachi, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/258020901516651",
        },
        {
          Name: "Workshop on Artificial Intelligence",
          TeacherHostName: "Sir Nooruddin Surani (COO Viftech Pvt Ltd)",
          Date: "3 November 2018",
          vanue:
            "SMIT, Saylani Head Office , A25, Bahadurabad 4 Minar Chowrangi, Karachi, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/424990128034236",
        },
        {
          Name: "Workshop Digital Marketing",
          TeacherHostName: "Sir Nooruddin Surani (COO Viftech Pvt Ltd)",
          Date: "7 july 2018",
          vanue:
            "SMIT, Saylani Head Office , A25, Bahadurabad 4 Minar Chowrangi, Karachi, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/1492881124147228",
        },
        {
          Name: "Workshop (Start your own business)",
          TeacherHostName: "Sir Rehan Allahwala",
          Date: "23 june 2018",
          vanue:
            "SMIT, Saylani Head Office , A25, Bahadurabad 4 Minar Chowrangi, Karachi, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/1473046082797399",
        },
        {
          Name: "Workshop (Start your own business)",
          TeacherHostName: "Sir Azfar Hussain",
          Date: "12 May 2018",
          vanue:
            "SMIT, Saylani Head Office , A25, Bahadurabad 4 Minar Chowrangi, Karachi, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/1428241427277865",
        },
        {
          Name: "Workshop of Learn Agile Scrum",
          TeacherHostName: "Sir Nooruddin Surani (COO Viftech)",
          Date: "21 April 2018",
          vanue:
            "SMIT, Saylani Head Office , A25, Bahadurabad 4 Minar Chowrangi, Karachi, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/1408313195937355",
        },
        {
          Name: "Workshop on Transforming your Life",
          TeacherHostName: "Sir Nauman Khan Azeemi",
          Date: "21 October 2018",
          vanue:
            "SMIT, Saylani Head Office , A25, Bahadurabad 4 Minar Chowrangi, Karachi, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/videos/497908474024900",
        },
        {
          Name: "Workshop DVCS (Git & Bitbucket)",
          TeacherHostName: "Sir Muhammad Ali Mughal",
          Date: "24 March 2018",
          vanue:
            "SMIT, Saylani Head Office , A25, Bahadurabad 4 Minar Chowrangi, Karachi, Sindh.",
          Link:
            "https://www.facebook.com/SaylaniMassTraining/posts/1382230175212324",
        },
      ],
    };
  }
  componentDidMount() {
    this.props.smitWorkshopGet();
  }
  render() {
    console.log(this.props.smitWorkshopGets)
    return (
      <div className="py-5 my-5 backgroundLight">
        <div className="container my-5">
          <div className="Heading">
            <h2>
              Saylani Mass IT Training arranged workshops for youth empowerment
            </h2>
          </div>
          <div className="row">
            {this.props.smitWorkshopGets && this.props.smitWorkshopGets.map((e, i) => {
              return (
                <div key={i} className="col-md-4 py-3">
                  <a className="workshopLink" href={e.Link} target="_blank">
                    <div className="workshopCard text-center">
                      <h4>{e.Name}</h4>
                      <p>by</p>
                      <p>{e.TeacherHostName}</p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProp(state) {
  return {
    smitWorkshopGets: state.reducerSmit.smitWorkshopGets,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    smitWorkshopGet: () => {
      dispatch(smitWorkshopGet());
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(Workshop);

