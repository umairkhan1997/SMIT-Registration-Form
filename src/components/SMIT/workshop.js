import React from "react";

export default class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityDetails: {
        karachi: {
          workshop:
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F2748380051930656&show_text=true&width=552&appId=799665263742122&height=425",
        },
        hyderabad: {
          workshop:
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F3106826156086042&show_text=true&width=552&appId=799665263742122&height=495",
        },
        faisalabad: {
          workshop:
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F3106826156086042&show_text=true&width=552&appId=799665263742122&height=495",
        },
        islamabad: {
          workshop:
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F3106826156086042&show_text=true&width=552&appId=799665263742122&height=495",
        },
      },
    };
  }
  render() {
    const { city } = this.props;
    const { cityDetails } = this.state;
    return <div className="container"></div>;
  }
}
