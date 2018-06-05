import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "./presenter";

class Container extends Component {
  state = {
    term: "",
    notification: false
  };

  static propTypes = {
    goToSearch: PropTypes.func.isRequired,
    getNotifications: PropTypes.func.isRequired
  };

  render() {
    return (
      <Navigation
        onSubmit={this._onSubmit}
        onInputChange={this._onInputChange}
        value={this.state.term}
        notification={this.state.notification}
        handleNotification={this._handleNotification}
      />
    );
  }

  _onInputChange = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      term: value
    });
  };

  _onSubmit = event => {
    const { term } = this.state;
    const { goToSearch } = this.props;
    event.preventDefault();
    console.log(term);
    goToSearch(term);
    this.setState({
      term: ""
    });
  };

  _handleNotification = () => {
    const { notification } = this.state;
    if (notification) {
      this.setState({
        notification: false
      });
    } else {
      this.props.getNotifications();
      this.setState({
        notification: true
      });
    }
  };
}

export default Container;
