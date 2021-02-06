import { render } from "@testing-library/react";
import React from "react";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyApi:
        "https://graph.facebook.com/v9.0/100343612049423/?fields=posts%7Bfull_picture%7D&access_token=EAAKmRwCU3uABANw46DdtuxeNoOFDc1gTrEjDtIuSKxR1IcBw679kQ4uZBEiYyONkUqFbS2BPd3E7Gku7fqxGu0xsLG1BF0nkLV7ZC1Xj3HBynI8CwKiLkMqUYIbW5ClXAm7EzjIlOQa8qZAmOVu38ZBv0mIdxgdCYkDZBHlaOL1jZAVfggJDZAIkAqOqVkxRDdzAz2y20DzRt5iivLAsJe5cJET8ZAY83OYZD",
      postData: {
        posts: {
          data: [
            {
              id: "100343612049423_111580660925718",
            },
            {
              id: "100343612049423_111579727592478",
            },
            {
              full_picture:
                "https://external.fkhi1-1.fna.fbcdn.net/safe_image.php?d=AQGwgXz-1ivvHTa3&url=https\u00253A\u00252F\u00252Fi.ytimg.com\u00252Fvi\u00252FV6wzspQOUx0\u00252Fmaxresdefault.jpg&_nc_eui2=AeF-qWNCpUp2e9SE_3TFzn0ffLFtnrig39d8sW2euKDf1zM2bDPxhoyhBmpzflEPIjGlntyL2yC8Q8YXTq7ykux1&_nc_cb=1&_nc_hash=AQHABwTysVeEUB5p",
              id: "100343612049423_101862725230845",
            },
            {
              full_picture:
                "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/p720x720/138354337_100344125382705_7419080156871726876_o.png?_nc_cat=104&ccb=2&_nc_sid=85a577&_nc_eui2=AeFqXNQ5Mza8j-5khjcXvNF3gpsMt5feH0-Cmwy3l94fT6fnTr57tFXqjgx_KxDCLeO1RWEqUXDVB2qR0wfC7Rq_&_nc_ohc=O_0cyLtgvGIAX9eFD-Z&_nc_ht=scontent.fkhi1-1.fna&_nc_tp=30&oh=058b6e275183c4976c3115622bda8fb1&oe=6042B639",
              id: "100343612049423_100344192049365",
            },
            {
              full_picture:
                "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/s720x720/136388235_100344095382708_1849528323166950986_o.png?_nc_cat=101&ccb=2&_nc_sid=dd9801&_nc_eui2=AeEjlP2NYZ2srK3aZzfO_EWCjLILSvZOQBmMsgtK9k5AGTRDfdHH04RUV_ZG4-lR4OD_jN-HlTOTEC08jDp-MiZK&_nc_ohc=uUbe50ewN6UAX97XzZY&_nc_ht=scontent.fkhi1-1.fna&_nc_tp=30&oh=c219f90007f84218f9438b8c0da6fa00&oe=6042CFF1",
              id: "100343612049423_100344142049370",
            },
          ],
          paging: {
            cursors: {
              before:
                "QVFIUlFjZAGhTbzF6MTZAhdGdmU2o5QVRGYmNhNGx6NXNqd1hYR19Idkd3WUxMdmE1aUZAGWFljelF3UjNZASURQMGpqd1doNU9Kd1lyLUZACcFR1Q3R1TTZAiV3lWRzhvSmwtVG9feGFxVWVVM0ZATdURwYThMZAFNnZAW1fR0dzNFp5VHJfY3pT",
              after:
                "QVFIUnNPaVJhSDlGRm9EY1NoazFjbjhtQUI0M0dkM0ZAUdUJabDJ0V3MyOTVKTDMxWVhQSjJYS3BOcEFoeVpOaWlXYWNqSkw3U0xYT05vRlNhNFE4blJjM3dOamt4ekFZALUpXT2tGcnZAuU21jUlRIRl9HaWZAOMHhPeGQ2d1lOTGlyVzd5",
            },
          },
        },
        id: "100343612049423",
      },
    };
  }
  componentDidMount() {
    // fetch(this.state.dummyApi)
    //   .then((post) => post.json())
    //   .then((json) => {
    //     this.setState({ postData: json });
    //     // console.log(this.state.postData.posts.data);
    //   });
  }
  render() {
    // console.log(this.state.dummyApi);
    return (
      <div>
        <h1>Facebook Post</h1>
        <div>
          <div className="container">
            <div className="row">
              {this.state.postData.posts.data.map((e, i) => {
                return (
                  <>
                    {e.full_picture ? (
                      <div className="col-md-3">
                        <div className="backgroundLight shadow">
                          <img
                            // className="postImage"
                            style={{ width: "100%", maxWidth: "300px" }}
                            key={i}
                            src={e.full_picture}
                          />
                          <div className="p-3">
                            <p>kjhjdskf ahkj</p>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Post;
