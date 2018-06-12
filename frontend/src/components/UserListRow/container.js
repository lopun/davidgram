import React, { Component } from "react";
import UserListRow from "./presenter";

class Container extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.user !== this.props.user;
  }

  render() {
    return <UserListRow {...this.props} />;
  }
}

export default Container;
