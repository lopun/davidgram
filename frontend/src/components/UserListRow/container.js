import React, { Component } from "react";
import UserListRow from "./presenter";

class Container extends Component {
  render() {
    return <UserListRow {...this.props} />;
  }
}

export default Container;
