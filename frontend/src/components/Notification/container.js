import React, { Component } from "react";
import Notification from "./presenter";
import { actionCreators as userActions } from "redux/modules/user";

class Container extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(userActions.getExplore());
    // userList에 업데이트 해주기 위함이다.
  }

  render() {
    return <Notification {...this.props} />;
  }
}

export default Container;
