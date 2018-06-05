import React, { Component } from "react";
import UserListColumn from "./presenter";

class Container extends Component {
  render() {
    return <UserListColumn {...this.props} />;
  }
}

export default Container;
