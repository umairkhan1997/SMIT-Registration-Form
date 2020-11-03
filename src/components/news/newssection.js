import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./news.css";
import intern from "../../images/intern.png";
// import FbImageLibrary from "react-fb-image-grid";

export default class NewsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const displayimages = [
      "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-1.jpg?alt=media&token=93d7ebcf-d564-438f-871e-1c4fb6b79702",
      "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-5.jpg?alt=media&token=24948ded-1752-4d7d-b14e-ae3e28e98e2d",
      "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-2.jpg?alt=media&token=12315048-2790-4f85-831f-4721a04b6600",
    ];
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* <FbImageLibrary width={50} images={displayimages} /> */}
            </div>
            <div className="col-md-6">
              <div>
                <div className="date">
                  <p style={{ fontSize: "2em" }}>05</p>
                </div>
                <div>
                  <h3>asd lajs</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
