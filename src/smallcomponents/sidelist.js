import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default class SideList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
    };
  }
  render() {
    return (
      <ul className="linkLeft backgroundDark">
        {this.state.item.map((e, i) => {
          return (
            <li key={i} className="leftList">
              <HashLink to={`#${e.id}`}>
                <span className="linkText"> {e.listText}</span>
                <span className="linkIcon">
                  <i class={e.listIcon}></i>
                </span>
              </HashLink>
            </li>
          );
        })}
        <li className="leftList">
          <Link to="/Donation">
            <span className="linkText"> Donate</span>
            <span className="linkIcon">
              <i className="fas fa-donate"></i>
            </span>
          </Link>
        </li>
      </ul>
    );
  }
}
