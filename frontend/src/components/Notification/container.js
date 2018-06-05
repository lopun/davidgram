import React, { Component } from "react";
import Notification from "./presenter";
import { actionCreators as userActions } from "redux/modules/user";

class Container extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(userActions.getExplore());
  }
  render() {
    return <Notification {...this.props} />;
  }
}

export default Container;
