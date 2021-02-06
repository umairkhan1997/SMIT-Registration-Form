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
            <h2>
              Saylani Mass IT Training arranged workshops for youth empowerment
            </h2>
          </div>
          <div className="row">
            {this.props.smitWorkshopGets &&
              this.props.smitWorkshopGets.map((e, i) => {
                return (
                  <div key={i} className="col-md-4 py-3">
                    <a className="workshopLink" href={e.Link} target="_blank">
                      <div className="workshopCard text-center">
                        <h4>{e.Name}</h4>
                        <p>by</p>
                        <p>{e.TeacherHostName}</p>
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
