import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./SmitStyle.css";

export default class SMITeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityDetails: {
        karachi: {
          courseTeachers: {
            webandmobile: [
              {
                name: "Muhammad Ali Mughal",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/28782659_1615813591849352_1927918376999933986_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHh1-V60kqjMlBRon5_8wDLQa--3tBdbt5Br77e0F1u3rE3VqGoRsSSwJlCHj6VJErokXgIb3xF4gxv474ckrht&_nc_ohc=2drexvc8NUUAX-Odoru&_nc_ht=scontent.fkhi1-1.fna&oh=fff1a8de9810aede862610cfd13760a6&oe=5FFE578F",
                course: "Web And Mobile",
              },
              {
                name: "Kashif Suleman",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/51500074_10215389217856326_4004531913703292928_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGI0N_G7HqT0ADiNS55wVukS-DD33HjkrJL4MPfceOSsodOAcVzpEtpAHfAqgQQ_AqjW4U0G_2zWCU0mYvdVLR9&_nc_ohc=s2H7LnbrDrUAX8ks8HY&_nc_ht=scontent.fkhi1-1.fna&oh=5624f1edd59e4cbe0e41f5c5a87ef122&oe=5FFDE940",
                course: "Web And Mobile",
              },
              {
                name: "Nouman Yaqoob",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/12376658_10204214197713877_7291554050722824678_n.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_eui2=AeFpeVFMGGZM3lrYlAFEDkxCvdK1qQq2xt-90rWpCrbG36lZahghND19hZUXZj9MyE_hJ2BXHBm8RE7n_nwETmUD&_nc_ohc=0_t8vTY-p0YAX92_Kym&_nc_ht=scontent.fkhi1-1.fna&oh=10a49a6cec1e38300957ad383ad6191e&oe=5FFCD5B9",
                course: "Web And Mobile",
              },
              {
                name: "Haider Ali Shah",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/104668594_1651233931706792_2841086960885438661_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeG9zj18KhCk8Yf64KLSq9zLokZyIBZ6cZuiRnIgFnpxm3-MhPjKvIv3nuhPxUOE_Dv5ofdKCzGfxm6m3qBkmkkS&_nc_ohc=rOMzktjlRocAX_pJ1cq&_nc_ht=scontent.fkhi1-1.fna&oh=79c0d6d471b169f59d12e14690076699&oe=5FFFB9EE",
                course: "Web And Mobile",
              },
              {
                name: "Majid Ashraf",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/51547961_1918644374929238_1138232248303091712_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFee-1q8AwlwMIjZ5F-ha5HVXOnllEKDppVc6eWUQoOmucjw9crkX5z9tLkYsmYNkQFUBWw-eOTYmCXdlKH6V0b&_nc_ohc=uZWhebioMVEAX9xWbro&_nc_ht=scontent.fkhi1-1.fna&oh=67be4fbd2adc04d50d6f8de3e4301d5b&oe=5FFD058A",
                course: "Web And Mobile",
              },
              {
                name: "Salman Zafar",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/119065677_3073626602766184_2609488609745447922_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEoXkmDRqlTNWthpXUS6hiFp1S1ByF-PCinVLUHIX48KGIZ9kG9AO2lTuajz2p8HXzFIQIRpA0_xQPFncVa5SDS&_nc_ohc=5_VWRi15rDoAX__piaK&_nc_ht=scontent.fkhi1-1.fna&oh=d5e1c6c7364c4d6bcbe0c684c182e6af&oe=5FFE720C",
                course: "Web And Mobile",
              },
              {
                name: "Ghous Ahmed",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/73314631_2495984860643207_3807197579704270848_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeF2_SQ8HNEZE-x8h1nfLoy5iwuGRWlVTmKLC4ZFaVVOYv8bQpBXFj9C4K9_jYkddvr2IQJTzQjv8JUN_wt4xSQW&_nc_ohc=4VBfuo_MFB0AX_uy0lN&_nc_ht=scontent.fkhi1-1.fna&oh=01893edef065519adc7df4b31b4ece7f&oe=5FFFFE94",
                course: "Web And Mobile",
              },
              {
                name: "Basit Ahmed",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/79805298_1382921781870913_3320339143799603200_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeH1mcCulE8X8BhcwlWv_se69q9ojzBAVhP2r2iPMEBWE_YcWJiDZyX2VXxOAuV2T3VbOs3vuSNfE5diq76ap2q5&_nc_ohc=k-cXy89328QAX8iBeyY&_nc_ht=scontent.fkhi1-1.fna&oh=d97ab87381dcf3a5872e2c16925f091e&oe=5FFCC109",
                course: "Web And Mobile",
              },
              {
                name: "Khurram Raheel",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-1/c246.68.185.185a/p480x480/130027144_3648459918533792_6449675569838452778_o.jpg?_nc_cat=104&ccb=2&_nc_sid=7206a8&_nc_eui2=AeHP_WL_XgGjdh_ZdxNWq0UOnoHjTVNcXxKegeNNU1xfEhM0fZRksuaz-ESkHHYPO5IZwo_Wmp0xOIBmlWHMNmBu&_nc_ohc=jSoEcOprVkIAX_nVYP9&_nc_ht=scontent.fkhi1-1.fna&tp=27&oh=7cd0ae0b9dbda6fb1f0dfc3f1d0fab83&oe=5FFCCFDE",
                course: "Web And Mobile",
              },
              {
                name: "Muhammad Naveed",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/87191911_194433658575705_7318197760656670720_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFt9vL3U0iNvsypp52bwbaG-0Wt3kfDtDn7Ra3eR8O0OdA3gdSEqC2OnlOaPb-d2tWtVYKJuZV91e7y-U3k35jB&_nc_ohc=GFbMEvaXf48AX_3Ohv6&_nc_ht=scontent.fkhi1-1.fna&oh=c57d7544b293c84180267841885a43b5&oe=5FFE0CF5",
                course: "Web And Mobile",
              },
              {
                name: "Aamir",
                image: "",
                course: "Web And Mobile",
              },
            ],
            artificialIntelligence: [
              {
                name: "Muhammad Ali Mughal",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/28782659_1615813591849352_1927918376999933986_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHh1-V60kqjMlBRon5_8wDLQa--3tBdbt5Br77e0F1u3rE3VqGoRsSSwJlCHj6VJErokXgIb3xF4gxv474ckrht&_nc_ohc=2drexvc8NUUAX-Odoru&_nc_ht=scontent.fkhi1-1.fna&oh=fff1a8de9810aede862610cfd13760a6&oe=5FFE578F",
                course: "Artificial Intelligence",
              },
              {
                name: "Muhammad Qasim",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/31144164_1223293584472096_5921684720545955840_n.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_eui2=AeHc4IWdSsbD6x1SjlLjeuq8htFtoYYGvFGG0W2hhga8UVYiN_SPtcpJWJvxqDG8VQl3e5IbHintoj4Qlswh4VJp&_nc_ohc=E0BbyK3n2g8AX-W3WN6&_nc_ht=scontent.fkhi1-1.fna&oh=d777e39f0207eb6c0b642ae593736e00&oe=5FFE8EF1",
                course: "Artificial Intelligence",
              },
              {
                name: "Muhammad Nasir",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/83029730_2555000414779602_4253965949054484480_n.jpg?_nc_cat=108&ccb=2&_nc_sid=174925&_nc_eui2=AeEPkRZHmE8FVmUqml0xKsC6m00PH4KqCoObTQ8fgqoKg0_4CvKQ6CmI5D15Px5kfLiiFVBGPbpgO3AHmIXtj7Y0&_nc_ohc=fawHtgz7WAoAX9CKHff&_nc_ht=scontent.fkhi1-1.fna&oh=1ea212e199e916486c76807341492a59&oe=5FFF4E07",
                course: "Artificial Intelligence",
              },
            ],
            graphicDesigning: [
              {
                name: "Raheel Gulraiz",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/78952289_2799534523414100_4964095811710353408_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeF2LgLBXkdYGAO9l2xl83dCwskZhVgYng3CyRmFWBieDYBXSkXgi-9avxlypdTU9t6agi1Ibsx7dpYtEBJG5131&_nc_ohc=FvzD1iaeRi0AX86E4WV&_nc_ht=scontent.fkhi1-1.fna&oh=6f2adfab9ed3aa8ef6f941bc7fd8dc2d&oe=5FFCFD2E",
                course: "Graphic Designing",
              },
              {
                name: "Zeeshan Anis",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t31.0-8/17966584_819759251511375_5436974069163191641_o.jpg?_nc_cat=109&ccb=2&_nc_sid=174925&_nc_eui2=AeGbUtM3AdHKraWLkkUHC9zHesLH38ooxMp6wsffyijEykEJ_avBI-ueRQsEoGSb_N_RNRCaxhI3-mICvorOebkB&_nc_ohc=KzchpATB57cAX_iEGuS&_nc_ht=scontent.fkhi1-1.fna&oh=60b1ae899f7ac7d15e28eea6bd7f2a8f&oe=5FFC4394",
                course: "Graphic Designing",
              },
              {
                name: "Faizan",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t31.0-8/17966584_819759251511375_5436974069163191641_o.jpg?_nc_cat=109&ccb=2&_nc_sid=174925&_nc_eui2=AeGbUtM3AdHKraWLkkUHC9zHesLH38ooxMp6wsffyijEykEJ_avBI-ueRQsEoGSb_N_RNRCaxhI3-mICvorOebkB&_nc_ohc=KzchpATB57cAX_iEGuS&_nc_ht=scontent.fkhi1-1.fna&oh=60b1ae899f7ac7d15e28eea6bd7f2a8f&oe=5FFC4394",
                course: "Graphic Designing",
              },
              {
                name: "Kamran Polani",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t31.0-8/17966584_819759251511375_5436974069163191641_o.jpg?_nc_cat=109&ccb=2&_nc_sid=174925&_nc_eui2=AeGbUtM3AdHKraWLkkUHC9zHesLH38ooxMp6wsffyijEykEJ_avBI-ueRQsEoGSb_N_RNRCaxhI3-mICvorOebkB&_nc_ohc=KzchpATB57cAX_iEGuS&_nc_ht=scontent.fkhi1-1.fna&oh=60b1ae899f7ac7d15e28eea6bd7f2a8f&oe=5FFC4394",
                course: "Graphic Designing",
              },
              {
                name: "Shehroz",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t31.0-8/17966584_819759251511375_5436974069163191641_o.jpg?_nc_cat=109&ccb=2&_nc_sid=174925&_nc_eui2=AeGbUtM3AdHKraWLkkUHC9zHesLH38ooxMp6wsffyijEykEJ_avBI-ueRQsEoGSb_N_RNRCaxhI3-mICvorOebkB&_nc_ohc=KzchpATB57cAX_iEGuS&_nc_ht=scontent.fkhi1-1.fna&oh=60b1ae899f7ac7d15e28eea6bd7f2a8f&oe=5FFC4394",
                course: "Graphic Designing",
              },
              {
                name: "Bilal Akbar",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t31.0-8/17966584_819759251511375_5436974069163191641_o.jpg?_nc_cat=109&ccb=2&_nc_sid=174925&_nc_eui2=AeGbUtM3AdHKraWLkkUHC9zHesLH38ooxMp6wsffyijEykEJ_avBI-ueRQsEoGSb_N_RNRCaxhI3-mICvorOebkB&_nc_ohc=KzchpATB57cAX_iEGuS&_nc_ht=scontent.fkhi1-1.fna&oh=60b1ae899f7ac7d15e28eea6bd7f2a8f&oe=5FFC4394",
                course: "Graphic Designing",
              },
            ],
            cisco: [
              {
                name: "Nausherwan Ali",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t31.0-8/17966584_819759251511375_5436974069163191641_o.jpg?_nc_cat=109&ccb=2&_nc_sid=174925&_nc_eui2=AeGbUtM3AdHKraWLkkUHC9zHesLH38ooxMp6wsffyijEykEJ_avBI-ueRQsEoGSb_N_RNRCaxhI3-mICvorOebkB&_nc_ohc=KzchpATB57cAX_iEGuS&_nc_ht=scontent.fkhi1-1.fna&oh=60b1ae899f7ac7d15e28eea6bd7f2a8f&oe=5FFC4394",
                course: "CCNA R&S",
              },
              {
                name: "Farrukh Khan",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/10923472_765687236859119_6731457404998037116_n.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_eui2=AeEPISK3vbd4MShMQqK3lpJnqGjfPRBroPuoaN89EGug-2-1j936zEnNZ7yvcme_Tys7w-0D3LoOdJc3WOHualdN&_nc_ohc=5ecrPML7ILQAX9Slsvs&_nc_ht=scontent.fkhi1-1.fna&oh=14d3aea474a10e0474966b68ceda30b0&oe=5FFC37CA",
                course: "CCNA R&S",
              },
              {
                name: "Shehroz",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-1/p200x200/74677027_1400224590151803_7293404172882280448_n.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_eui2=AeGLRnrGm6s0yp0JPkyxetUNaHospmJsa3xoeiymYmxrfH9E-5VjBtL1l_FDdBbA4CWNXwgU8kUkrBzhcF3lls2S&_nc_ohc=63t-psU4gbgAX8U5axh&_nc_ht=scontent.fkhi1-1.fna&tp=6&oh=dd830d3fbfd08aada41302cbb06b9308&oe=5FFE0FDF",
                course: "CCNA R&S",
              },
              {
                name: "Faheem",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t31.0-8/17966584_819759251511375_5436974069163191641_o.jpg?_nc_cat=109&ccb=2&_nc_sid=174925&_nc_eui2=AeGbUtM3AdHKraWLkkUHC9zHesLH38ooxMp6wsffyijEykEJ_avBI-ueRQsEoGSb_N_RNRCaxhI3-mICvorOebkB&_nc_ohc=KzchpATB57cAX_iEGuS&_nc_ht=scontent.fkhi1-1.fna&oh=60b1ae899f7ac7d15e28eea6bd7f2a8f&oe=5FFC4394",
                course: "CCNA R&S",
              },
              {
                name: "Hammad Sami",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/61927477_2495862373811797_4602069956018831360_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeF0s6T3EGHZRyUYvaAj8MKdRyZc53oDtnBHJlznegO2cMmCJdKOr8Ddl2x-tT9DWHmnjWW1sRHjj7hbMz-dnpWB&_nc_ohc=zbUyW1JuZgcAX9JRvXO&_nc_ht=scontent.fkhi1-1.fna&oh=570c9ad66a9411903929bf00623355c9&oe=5FFDA1AD",
                course: "CCNA R&S",
              },
              {
                name: "Kashif Ahmed",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t31.0-8/17966584_819759251511375_5436974069163191641_o.jpg?_nc_cat=109&ccb=2&_nc_sid=174925&_nc_eui2=AeGbUtM3AdHKraWLkkUHC9zHesLH38ooxMp6wsffyijEykEJ_avBI-ueRQsEoGSb_N_RNRCaxhI3-mICvorOebkB&_nc_ohc=KzchpATB57cAX_iEGuS&_nc_ht=scontent.fkhi1-1.fna&oh=60b1ae899f7ac7d15e28eea6bd7f2a8f&oe=5FFC4394",
                course: "CCNA R&S",
              },
              {
                name: "Mohsin Zubair",
                image:
                  "https://scontent.fkhi1-1.fna.fbcdn.net/v/t31.0-8/17966584_819759251511375_5436974069163191641_o.jpg?_nc_cat=109&ccb=2&_nc_sid=174925&_nc_eui2=AeGbUtM3AdHKraWLkkUHC9zHesLH38ooxMp6wsffyijEykEJ_avBI-ueRQsEoGSb_N_RNRCaxhI3-mICvorOebkB&_nc_ohc=KzchpATB57cAX_iEGuS&_nc_ht=scontent.fkhi1-1.fna&oh=60b1ae899f7ac7d15e28eea6bd7f2a8f&oe=5FFC4394",
                course: "CCNA R&S",
              },
            ],
          },
        },
      },
    };
  }
  render() {
    const { cityDetails } = this.state;
    return (
      <div>
        <div className="container">
          <h1 className="pb-4" style={{ color: "#1371b8" }}>
            Our Qualified Teacher
          </h1>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Web And Mobile
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Artificial Intelligence
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Graphic Designing & Video Editing
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="cisco-tab"
                data-toggle="tab"
                href="#cisco"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Cisco Trainers
              </a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row">
                {cityDetails.karachi.courseTeachers.webandmobile.map((e, i) => {
                  return (
                    <div className="col-md-2 allTeacher text-center">
                      <div className="my-3">
                        <img
                          style={{
                            borderRadius: "50%",
                            boxShadow: "0 10px 15px rgba(0,0,0,.2)",
                            border: "1.5px solid white",
                          }}
                          width="100%"
                          src={e.image}
                        />
                        <div className="teacherDetails">
                          <h4
                            style={{
                              borderBottom: "1px solid #0267b4",
                            }}
                          >
                            {e.name}
                          </h4>
                          <p>{e.course}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="row">
                {cityDetails.karachi.courseTeachers.artificialIntelligence.map(
                  (e, i) => {
                    return (
                      <div className="col-md-2 allTeacher text-center">
                        <div className="my-3">
                          <img
                            style={{
                              borderRadius: "50%",
                              boxShadow: "0 10px 15px rgba(0,0,0,.2)",
                              border: "1.5px solid white",
                            }}
                            width="100%"
                            src={e.image}
                          />
                          <div className="teacherDetails">
                            <h4
                              style={{
                                borderBottom: "1px solid #0267b4",
                              }}
                            >
                              {e.name}
                            </h4>
                            <p>{e.course}</p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="row">
                {cityDetails.karachi.courseTeachers.graphicDesigning.map(
                  (e, i) => {
                    return (
                      <div className="col-md-2 allTeacher text-center">
                        <div className="my-3">
                          <img
                            style={{
                              borderRadius: "50%",
                              boxShadow: "0 10px 15px rgba(0,0,0,.2)",
                              border: "1.5px solid white",
                            }}
                            width="100%"
                            src={e.image}
                          />
                          <div className="teacherDetails">
                            <h4
                              style={{
                                borderBottom: "1px solid #0267b4",
                              }}
                            >
                              {e.name}
                            </h4>
                            <p>{e.course}</p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="cisco"
              role="tabpanel"
              aria-labelledby="cisco-tab"
            >
              <div className="row">
                {cityDetails.karachi.courseTeachers.cisco.map((e, i) => {
                  return (
                    <div className="col-md-2 allTeacher text-center">
                      <div className="my-3">
                        <img
                          style={{
                            borderRadius: "50%",
                            boxShadow: "0 10px 15px rgba(0,0,0,.2)",
                            border: "1.5px solid white",
                          }}
                          width="100%"
                          src={e.image}
                        />
                        <div className="teacherDetails">
                          <h4
                            style={{
                              borderBottom: "1px solid #0267b4",
                            }}
                          >
                            {e.name}
                          </h4>
                          <p>{e.course}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
