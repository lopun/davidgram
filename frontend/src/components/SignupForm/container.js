import React, { Component } from "react";
import SignupForm from "./presenter";

// const Container = props => <SignupForm {...props} />;

class Container extends Component {
  state = {
    email: "",
    fullname: "",
    username: "",
    password: ""
  };

  render() {
    const { email, fullname, username, password } = this.state;
    return (
      <SignupForm
        handleChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        emailValue={email}
        fullnameValue={fullname}
        usernameValue={username}
        passwordValue={password}
      />
    );
  }

  _handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  _handleSubmit = e => {
    e.preventDefault();
  };
}
export default Container;
