import React from "react";
import Custombtn from "../../smallcomponents/mybtn";
import { connect } from "react-redux";
import { roPlantBranchGet } from "../../Redux/action/RoPlantAction";


class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.roPlantBranchGet();
  }
  render() {
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <table className="showtable">
              {this.props.roPlantBranchGets && this.props.roPlantBranchGets.map((data) => {
                return (
                  <tr>
                    <td>{data.typeName}</td>
                    <td>{data.typeNumber}</td>
                  </tr>
                )
              })}
            </table>
            <div className="p-2">
              <Custombtn otherClass="btn-block" value="Donate" />
            </div>
          </div>
          <div className="col-md-6 p-2">
            <iframe
              width="100%"
              height="320"
              src="https://www.youtube.com/embed/N4DIjxCGWVc"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    roPlantBranchGets: state.reducerRoPlant.roPlantBranchGets
  };
}
function mapDispatchToProp(dispatch) {
  return {
    roPlantBranchGet: () => {
      dispatch(roPlantBranchGet());
    },
  };
}
export default connect(mapStateToProp, mapDispatchToProp)(TableData);