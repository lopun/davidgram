import React, { Component } from "react";
import ForgotPassword from "./presenter";

class Container extends Component {
  state = {
    input: ""
  };

  _handleSubmit = () => {
    const { input } = this.state;
    fetch("/rest-auth/password/reset/", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: input
      })
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => console.log(json))
      .catch(err => console.log(err));
    console.log("submitted", input);
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
