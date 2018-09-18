import React, { Component } from "react";
import ForgotPassword from "./presenter";
import axios from "../../axios-auth";

class Container extends Component {
  state = {
    input: ""
  };

  _handleSubmit = () => {
    const { input } = this.state;
    axios({
      method: "post",
      url: "/rest-auth/password/reset/",
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        email: input
      })
    }).catch(err => console.log(err));
  };

  _handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    return (
      <ForgotPassword
        handleSubmit={this._handleSubmit}
        handleChange={this._handleChange}
        input={this.state.input}
      />
    );
  }
}

export default Container;
