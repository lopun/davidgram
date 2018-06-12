import React, { Component } from "react";
import NotificationDisplay from "./presenter";

class Container extends Component {
  state = {};

  componentWillMount() {
    let following_user;
    this.props.userList.map(user => {
      if (user.id === this.props.notification.creator.id) {
        following_user = user.following;
      }
      return null;
    });
    this.setState({
      following: following_user
    });
  }

  render() {
    return (
      <NotificationDisplay
        {...this.props}
        handleClick={this._handleClick}
        {...this.state}
      />
    );
  }

  _handleClick = () => {
    const { handleUnfollow, handleFollow } = this.props;
    const { following } = this.state;
    if (following) {
      this.setState({
        following: false
      });
      handleUnfollow();
    } else {
      this.setState({
        following: true
      });
      handleFollow();
    }
  };
}

export default Container;
