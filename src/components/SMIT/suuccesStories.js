import React from "react";
import "./SmitStyle.css";
import { connect } from "react-redux";
import { smitSuccessStoriesGet } from "../../Redux/action/smitAction";

class SuccessStories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successStoriesfromData: [],
    };
  }

  componentDidMount() {
    this.props.smitSuccessStoriesGet();
  }

  render() {
    return (
      <div id="smitSuccessStories">
        <div className="container py-5">
          <div className="Heading">
            <h3 className="color"><b><u>SUCCESS STORIES</u></b></h3>
          </div>
          <div className="row">
            {this.props.SmitsucessGets &&
              this.props.SmitsucessGets.map((e, i) => {
                return (
                  <div className="col-md-3 ">
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

function mapStateToProp(state) {
  return {
    SmitsucessGets: state.reducerSmit.SmitsucessGets,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    smitSuccessStoriesGet: () => {
      dispatch(smitSuccessStoriesGet());
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(SuccessStories);
