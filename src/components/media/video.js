import React from "react";
import Zoom from "react-reveal/Zoom";
import "./media.css";

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }
  componentDidMount() {
    let channelID = "UCXgGY0wkgOzynnHvSEVmE3A";
    let result = 50;
    let channelKey = "AIzaSyAOYGAi4mZy6L-ifZgQ8bzS87vA6v3Jda";
    let finalURl = `https://www.googleapis.com/youtube/v3/search?key=${channelKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;
    console.log(finalURl);
    fetch(finalURl)
      .then((response) => response.json())
      .then((videos) => {
        console.log(videos);
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        <div className="p-5">
          <div className="row">
            <div className="col-md-8 py-3"></div>
            <div className="col-md-4 py-3">
              <select className="inp">
                <option>dkjfhkjsd </option>
                <option>dkjfhkjsd </option>
                <option>dkjfhkjsd </option>
                <option>dkjfhkjsd </option>
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
                  src="https://www.youtube.com/embed/L1BmJyE4Os0?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <div className="row py-3">
                  <div className="col-md-4 py-3">
                    <button className="btn-block prevbtn">
                      <i class="fab fa-whatsapp"></i> Share
                    </button>
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
              <Zoom>
                <iframe
                  allowFullScreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/L1BmJyE4Os0?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/njCSKTPMXyg?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/jEch46lxwV4?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/_uB0gT9NwRo?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/VPd0OhmWN6w?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/IIsHZFT9osQ?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/pAs9JprZc_U?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/ZmCxi3JZHOk?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/yBndclFuoBw?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/bJSqJvz5qoU?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/zkj0ilYxRik"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
              <Zoom>
                <iframe
                  allowfullscreen="allowfullscreen"
                  sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/qPUTEhCkdd4?rel=0&enablejsapi=1"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
