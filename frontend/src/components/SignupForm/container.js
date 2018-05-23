import React, { Component } from "react";
import PropTypes from "prop-types";
import SignupForm from "./presenter";

// const Container = props => <SignupForm {...props} />;

class Container extends Component {
  state = {
    email: "",
    name: "",
    username: "",
    password: ""
  };
  static propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired
  };

  render() {
    const { email, name, username, password } = this.state;
    return (
      <SignupForm
        handleChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleFacebookLogin={this._handleFacebookLogin}
        emailValue={email}
        nameValue={name}
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
    const { email, name, username, password } = this.state;
    const { createAccount } = this.props;
    e.preventDefault();
    createAccount(username, password, email, name);
  };

  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };
}
export default Container;
