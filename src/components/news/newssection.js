import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./news.css";
// import FbImageLibrary from "react-fb-image-grid";
import Gallery from "react-grid-gallery";
import Footer from "../Footer";
export default class NewsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const displayimages = [
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-1.jpg?alt=media&token=93d7ebcf-d564-438f-871e-1c4fb6b79702",
        thumbnail:
          "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-1.jpg?alt=media&token=93d7ebcf-d564-438f-871e-1c4fb6b79702",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Basheer Farooqui Meet With GOVT Officer",
      },
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-5.jpg?alt=media&token=24948ded-1752-4d7d-b14e-ae3e28e98e2d",
        thumbnail:
          "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-5.jpg?alt=media&token=24948ded-1752-4d7d-b14e-ae3e28e98e2d",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Basheer Farooqui Meet With GOVT Officer",
      },
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-2.jpg?alt=media&token=12315048-2790-4f85-831f-4721a04b6600",
        thumbnail:
          "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-2.jpg?alt=media&token=12315048-2790-4f85-831f-4721a04b6600",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Basheer Farooqui Meet With GOVT Officer",
      },
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-5.jpg?alt=media&token=24948ded-1752-4d7d-b14e-ae3e28e98e2d",
        thumbnail:
          "https://firebasestorage.googleapis.com/v0/b/istikhara-a074b.appspot.com/o/saylaniWelfareImages%2Fimg-5.jpg?alt=media&token=24948ded-1752-4d7d-b14e-ae3e28e98e2d",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Basheer Farooqui Meet With GOVT Officer",
      },
    ];
    return (
      <div>
        <div className='row'>
          <div style={{backgroundColor:'rgb(240, 240, 240)'}} className='col-md-2'>
            <div className='p-5'>
              <input placeholder='Search Date' type='date' className='inp' />
            </div>
            <ul className='list p-4'>
              <li >11/12/2020</li>
              <li >11/12/2020</li>
              <li >11/12/2020</li>
              <li >11/12/2020</li>
              <li >11/12/2020</li>
            </ul>
          </div>
          <div className='col-md-10'>
            <div className='container'>
              <div className="row bTop light my-4">
                <div className="col-md-2">
                  <div className="date">
                    <p style={{ fontSize: "2em" }}>05</p>
                    <p>Oct 2020</p>
                  </div>
                </div>
                <div className="col-md-7">
                  <Gallery images={displayimages} />
                </div>
                <div className="col-md-3 text-left py-5">
                  <div>
                    <div>
                      <h3>Basheer Farooqui Meet With GOVT Officer</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row bTop light my-4">
                <div className="col-md-2">
                  <div className="date">
                    <p style={{ fontSize: "2em" }}>23</p>
                    <p>Feb 2020</p>
                  </div>
                </div>
                <div className="col-md-7">
                  <Gallery images={displayimages} />
                </div>
                <div className="col-md-3 text-left py-5">
                  <div>
                    <div>
                      <h3>President Of Pakistan Visited Saylani Welfare</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        printer took a galley of type and scrambled it to make a
                        passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
