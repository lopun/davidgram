import React, { Component } from "react";
import FeedPhoto from "./presenter";

class Container extends Component {
  render() {
    return <FeedPhoto {...this.props} />;
  }
}

export default Container;
