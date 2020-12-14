import React from "react";

export default class CustomBtn extends React.Component {
  render() {
    const { value,otherClass } = this.props;
    let classes = `prevbtn ${otherClass}`;
    return <button className={classes}>{value}</button>;
  }
}
