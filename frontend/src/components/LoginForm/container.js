import React, { Component } from "react";
import LoginForm from "./presenter";

class Container extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    const { username, password } = this.state;
    return (
      <LoginForm
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
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
    e.preventDefault();
    // redux action
  };
}

export default Container;
