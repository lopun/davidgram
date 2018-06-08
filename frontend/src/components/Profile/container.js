import React, { Component } from "react";
import Profile from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    loggedIn: false
  };

  static propTypes = {
    getProfile: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    this.props.getProfile();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.loggedInUser !== this.props.loggedInUser) {
      this.setState({
        loggedIn: true
      });
    }
  }

  render() {
    return (
      <Profile {...this.state} {...this.props} handleEdit={this.handleEdit} />
    );
  }

  handleEdit = () => {
    this.props.editProfile();
  };
}

export default Container;
