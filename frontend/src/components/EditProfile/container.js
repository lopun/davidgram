import React, { Component } from "react";
import EditProfile from "./presenter";

class Container extends Component {
  state = {
    Fullname: "",
    Username: "",
    Website: "",
    Bio: "",
    Email: "",
    Contact: "",
    Gender: "",
    Recommend: "",
    CurrentPassword: "",
    NewPassword1: "",
    NewPassword2: "",
    active: "Edit",
    loading: true
  };

  componentWillMount() {
    this.props.getSimpleProfile();
  }

  componentWillUpdate(prevProps, prevState) {
    if (prevProps.simpleUser !== this.props.simpleUser) {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <EditProfile
        {...this.props}
        {...this.state}
        handleChange={this.handleChange}
        handleTap={this.handleTap}
        handlePassword={this.handlePassword}
      />
    );
  }

  handleTap = e => {
    this.setState({
      active: e.target.name
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handlePassword = () => {
    const { CurrentPassword, NewPassword1, NewPassword2 } = this.state;
    if (NewPassword1 === NewPassword2) {
      this.props.changePassword(CurrentPassword, NewPassword1);
      this.setState({
        CurrentPassword: "",
        NewPassword1: "",
        NewPassword2: ""
      });
    }
  };
}

export default Container;
