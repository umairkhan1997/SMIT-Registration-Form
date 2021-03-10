import React from "react";
import { createBrowserHistory } from "history";
import { withRouter } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./service.css";
import { connect } from "react-redux";
import { projectCat } from "../../Redux/action/homeAction";

const history = createBrowserHistory();
class WhatweDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dept: [
        { displayName: "smit", route: "smit" },
        { displayName: "blood bank", route: "bloodbank" },
        { displayName: "dastarkhwan", route: "dastarkhwan" },
        { displayName: "job bank", route: "jobBank" },
        { displayName: "medical", route: "medical" },
        { displayName: "media", route: "media" },
        { displayName: "news", route: "news" },
        { displayName: "online istikhara", route: "istikhara" },
        { displayName: "online quran", route: "onlineQ" },
        { displayName: "ro plant", route: "roplant" },
        { displayName: "welfare", route: "welfare" },
        { displayName: "incubation", route: "incubation" },
        { displayName: "online sadqa", route: "donation" },
        { displayName: "saylani school", route: "education" },
      ],
      // searchItem: [],
      searchItem: "",
    };
  }
  search(e) {
    let result = this.state.dept.filter((word) =>
      word.displayName.includes(e.target.value)
    );

    this.setState({ searchItem: result });
  }

  componentDidMount() {
    this.props.projectCat();
  }
  chView = (a) => {
    this.props.history.push(a)
  }


  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <div style={{ backgroundColor: "#f5f8ff", color: "#0066b3" }}>
          <div className="container py-5">
            <div className="row py-2">
              <div className="col-md-6 ">
                <h2 className="text-left">
                  Current and Upcomming projects of Saylani
                </h2>
              </div>
              <div className="col-md-6 text-center">
                <input
                  className="search"
                  onChange={(e) =>
                    this.setState({ searchItem: e.target.value })
                  }
                  placeholder="Search Services Here..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            {this.props.projectCats
              .filter((name) => {
                return (
                  name.proName
                    .toLowerCase()
                    .indexOf(this.state.searchItem.toLowerCase()) >= 0
                );
              })
              .map((filteredName) => {
                return filteredName.view ? (
                  <div className="col-md-3 col-sm-6 col-sm-6 p-3">
                    <Zoom>
                      <div onClick={() => this.props.history.push(filteredName.proHrefVal)}>
                        <div className="small text-center">
                          <div className="p-3">
                            <p style={{ fontSize: "3.5em" }}>
                              <i class={filteredName.proIcon}></i>
                            </p>
                          </div>
                          <p className="proName"> {filteredName.proName}</p>
                        </div>
                      </div>
                    </Zoom>
                  </div>
                ) : null;
              })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    projectCats: state.root.projectCat,
  };
}
function mapDispatchToProp(dispatch) {
  return {
    projectCat: () => {
      dispatch(projectCat());
    },
  };
}
export default withRouter(connect(mapStateToProp, mapDispatchToProp)(WhatweDo));
