import React from "react";
import "./SmitStyle.css";
import Zoom from "react-reveal";
import { connect } from "react-redux";
import { SmitCollaborationGet } from "../../Redux/action/smitAction";

class Collaboration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.SmitCollaborationGet();
  }

  render() {
    return (
      <div id="smitCollaborator">
        <div className="py-5 ">
          <div className="container">
            <div className="pt-5">
              <h3 className="pb-4 color" >
                <b><u>COLLABORATION AND PARTNERS</u></b>
              </h3>
            </div>
            <div className="row">
              {this.props.SmitCollaborationGets &&
                this.props.SmitCollaborationGets.map((e) => {
                  return (
                    <div className="p-5 col-md-3 col-sm-6">
                      <Zoom>
                        <div className="collaborationPartner p-4">
                          <img width="100%" src={e.imageUrl} />
                        </div>
                      </Zoom>
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
    SmitCollaborationGets: state.reducerSmit.SmitCollaborationGets,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    SmitCollaborationGet: () => {
      dispatch(SmitCollaborationGet());
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(Collaboration);
