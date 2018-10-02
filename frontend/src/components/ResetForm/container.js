import React, { Component } from "react";
import ResetForm from "./presenter";

class Container extends Component {
  state = {
    input: ""
  };
  render() {
    return (
      <ResetForm
        handleSubmit={this._handleSubmit}
        handleChange={this._handleChange}
        input={this.state.input}
      />
    );
  }
}

export default Container;
