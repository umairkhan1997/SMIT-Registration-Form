import React from "react";
import { HashLink } from "react-router-hash-link";

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
      </ul>
    );
  }
}
