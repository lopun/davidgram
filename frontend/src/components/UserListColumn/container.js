import React, { Component } from "react";
import UserListColumn from "./presenter";

class Container extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.user !== this.props.user;
  }

  render() {
    return <UserListColumn {...this.props} />;
  }
}

export default Container;
