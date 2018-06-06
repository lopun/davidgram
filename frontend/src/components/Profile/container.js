import React, { Component } from "react";
import Profile from "./presenter";

class Container extends Component {
  render() {
    return <Profile {...this.props} />;
  }
}

export default Container;
