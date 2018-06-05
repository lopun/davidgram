import React, { Component } from "react";
import NotificationDisplay from "./presenter";

class Container extends Component {
  state = {};

  componentDidMount() {
    let following_user;
    this.props.userList.map(user => {
      if (user.id === this.props.notification.creator.id) {
        following_user = user.following;
      }
      return null;
    });
    console.log(following_user);
    this.setState({
      following: following_user
    });
  }

  render() {
    console.log(typeof this.state.following);
    console.log(this.state.following);
    return (
      <NotificationDisplay
        {...this.props}
        handleClick={this._handleClick}
        {...this.state}
      />
    );
  }

  _handleClick = () => {
    if (this.state.following) {
      this.setState({
        following: false
      });
      this.props.handleUnfollow();
    } else {
      this.setState({
        following: true
      });
      this.props.handleFollow();
    }
  };
}

export default Container;
