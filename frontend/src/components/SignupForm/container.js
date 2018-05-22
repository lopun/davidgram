import React, { Component } from "react";
import PropTypes from "prop-types";
import SignupForm from "./presenter";

// const Container = props => <SignupForm {...props} />;

class Container extends Component {
  state = {
    email: "",
    fullname: "",
    username: "",
    password: ""
  };
  static propTypes = {
    facebookLogin: PropTypes.func.isRequired
  };

  render() {
    const { email, fullname, username, password } = this.state;
    return (
      <SignupForm
        handleChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleFacebookLogin={this._handleFacebookLogin}
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

  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };
}
export default Container;
