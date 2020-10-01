import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import slide from "../images/hazrat.jpg";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

export default class Scrollable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{width:'100vw'}}>
        <Controller>
          <Scene triggerHook="onLeave" duration={1000} pin>
            {(progress) => (
              <div className="sticky">
                <Timeline totalProgress={progress} paused>
                  <Tween
                    from={{ x: "0", top: "0%" }}
                    to={{ x: "10%", top: "20%" }}
                  >
                    <div className="animation">
                      <img src={slide} />
                    </div>
                  </Tween>
                  <Tween
                    from={{ x: "0", top: "10%" }}
                    to={{ x: "10%", top: "50%" }}
                  >
                    <div className="animation">
                      <p>sf l</p>
                    </div>
                  </Tween>
                  <Timeline
                    target={
                      <div className="heading">
                        <h2>Message of Hazrat Allama Basheer farooqui</h2>
                      </div>
                    }
                  >
                    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                    <Tween from={{x:'0'}} to={{ x: "30%" }} />
                  </Timeline>
                </Timeline>
              </div>
            )}
          </Scene>
        </Controller>
      </div>
    );
  }
}
