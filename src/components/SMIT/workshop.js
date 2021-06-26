import React from "react";
import { connect } from "react-redux";
import { smitWorkshopGet } from "../../Redux/action/smitAction";
class Workshop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    this.props.smitWorkshopGet();
  }
  render() {
    return (
      <div id="smitWorkshop" className="py-5 my-5 backgroundLight">
        <div className="container my-5">
          <div className="Heading">
            <h3 className="color">
              <b><u>
                SAYLANI MASS IT TRAINING ARRANGED WORKSHOPS FOR YOUTH EMPOWERMENT
                </u></b>
            </h3>
          </div>
          <div className="row">
            {this.props.smitWorkshopGets &&
              this.props.smitWorkshopGets.map((e, i) => {
                return (
                  <div key={i} className="col-md-4 py-3">
                    <a className="workshopLink" href={e.Link} target="_blank">
                      <div className="workshopCard text-center">
                        <h4 style={{ marginTop: 40, height: 50 }}><b>{e.Name}</b></h4>
                        <p>by</p>
                        <p style={{ color: 'black' }}><u>{e.TeacherHostName}</u></p>
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
