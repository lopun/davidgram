import React, { Component } from "react";
import ResetPassword from "./presenter";

class Container extends Component {
  state = {
    password1: "",
    password2: ""
    // mounted: true
  };

  _handleSubmit = () => {
    const { token, uid } = this.props.match.params;
    const { password1, password2 } = this.state;
    console.log(token, uid, password1, password2);
    fetch("http://ssal.sparcs.org:16499/rest-auth/password/reset/confirm/", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uid: uid,
        token: token,
        new_password1: password1,
        new_password2: password2
      })
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  };

  _handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { password1, password2 } = this.state;
    return (
      <ResetPassword
        {...this.props}
        handleChange={this._handleChange}
        handleSubmit={this._handleSubmit}
        password1={password1}
        password2={password2}
      />
    );
  }
}

export default Container;
