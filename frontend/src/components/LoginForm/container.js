import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginForm from "./presenter";

class Container extends Component {
  state = {
    username: "",
    password: ""
  };
  static propTypes = {
    facebookLogin: PropTypes.func.isRequired
  };
  render() {
    const { username, password } = this.state;
    return (
      <LoginForm
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleFacebookLogin={this._handleFacebookLogin}
        usernameValue={username}
        passwordValue={password}
      />
    );
  }

  _handleInputChange = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({
      // [e.target.name]: e.target.value -> 제일 쉬운 방법.
      // 하지만 비구조화를 이용한 세련된 코드는 아니다.
      [name]: value
    });
  };

  _handleSubmit = e => {
    const { usernameLogin } = this.props;
    const { username, password } = this.state;
    e.preventDefault();
    usernameLogin(username, password);
  };

  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };
}

export default Container;
