import React from "react";
import Zoom from "react-reveal/Zoom";
import "./media.css";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import { mediaGet } from "../../Redux/action/mediaAction";
import { withRouter } from "react-router-dom";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allvideos: [],
      currentVideo: {
        etag: "A5bkSoxm-unTaaJOTRYjtmO9CwI",
        id: { kind: "youtube#video", videoId: "EaGRbK8qM70" },
        kind: "youtube#searchResult",
        snippet: {
          channelId: "UCaF6uj00Wj8_slSdn4aE0sQ",
          channelTitle: "Saylani Welfare International Trust",
          description:
            "ضلع کشمور سندھ میں سیلانی کی جانب سے فری آئی کیمپ کا انعقاد اس کیمپ مین جناب ASIمحمد بخش اور DC کشمور نے بحیثیت مہمان خصوصی شرکت کی ۔",
          liveBroadcastContent: "none",
          publishTime: "2021-01-12T14:47:43Z",
          publishedAt: "2021-01-12T14:47:43Z",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/EaGRbK8qM70/default.jpg",
              width: 120,
              height: 90,
            },
            high: {
              url: "https://i.ytimg.com/vi/EaGRbK8qM70/hqdefault.jpg",
              width: 480,
              height: 360,
            },
            medium: {
              height: 180,
              url: "https://i.ytimg.com/vi/EaGRbK8qM70/mqdefault.jpg",
              width: 320,
            },
          },
          title: "ضلع کشمور سندھ میں سیلانی کی جانب سے فری آئی کیمپ کا انعقاد",
        },
      },
    };
  }
  async componentDidMount() {
    let channelID = "UCaF6uj00Wj8_slSdn4aE0sQ";
    let result = 50;
    let channelKey = "AIzaSyCCo9C_ZYlYhavDmVSdFQxUq6Z8IhfAeRQ";
    let channelKey2 = "AIzaSyBfTF9Dbx9TpgQs0CweYpUayTOanudaGoI";
    let channelKey3 = "AIzaSyCCo9C_ZYlYhavDmVSdFQxUq6Z8IhfAeRQ";
    let finalURl = `https://www.googleapis.com/youtube/v3/search?key=${channelKey2}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;
    console.log(finalURl);
    await fetch(finalURl)
      .then((response) => response.json())
      .then((videos) => {
        this.setState({ allvideos: videos.items });
        console.log(this.state.allvideos);
      })
      .catch((error) => alert(error));
  }
  render() {
    // console.log(this.props.mediaGets);
    return (
      <div>
        <div className="p-5">
          <div className="row">
            <div className="col-md-8 py-3"></div>
            <div className="col-md-4 py-3">
              <select className="inp">
                <option>SMIT </option>
                <option>Welfare</option>
                <option>Medical </option>
                <option>Blood Bank</option>
                <option>dkjfhkjsd </option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div>
                <iframe
                  width="100%"
                  className="newsMainScreen"
                  allowFullScreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  src={`https://www.youtube.com/embed/${this.state.currentVideo.id.videoId}?rel=0&enablejsapi=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <div className="row py-3">
                  <div className="col-md-4 py-3">
                    <a
                      className="btn-block prevbtn"
                      target="_blank"
                      href={`https://api.whatsapp.com/send?phone=+923072199560&text=*${this.state.currentVideo.snippet.description}*%20Video%20Link:%20*https://youtu.be/${this.state.currentVideo.id.videoId}* `}
                    >
                      <i class="fab fa-whatsapp"></i> Share
                    </a>
                  </div>
                  <div className="col-md-4 py-3">
                    <a
                      className="btn-block prevbtn"
                      href="https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=_uB0gT9NwRo&list=PL47LaC9-GaXV7D1RhnSNuiEWQemCYD4SC"
                    >
                      <i class="fab fa-facebook-f"></i> Share
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              {this.state.allvideos.map((e, i) => {
                // console.log(e.snippet.title);
                return (
                  <div
                    onClick={() => this.setState({ currentVideo: e })}
                    className="pb-3 rounded youtubeVideo"
                  >
                    <img
                      width="100%"
                      className="thumbnails"
                      src={e.snippet.thumbnails.high.url}
                    />
                    <div className="youtubeVideoDetails">
                      <p style={{ fontSize: "2em" }}>{e.snippet.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    mediaGets: state.reducerMedia.mediaGets,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    mediaGet: () => {
      dispatch(mediaGet());
    },
  };
}
export default withRouter(connect(mapStateToProp, mapDispatchToProp)(Video));
