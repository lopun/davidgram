import React, { Component } from "react";
import Navigation from "./presenter";

class Container extends Component {
  state = {
    term: ""
  };

  render() {
    return (
      <Navigation
        onSubmit={this._onSubmit}
        onInputChange={this._onInputChange}
        value={this.state.term}
      />
    );
  }

  _onInputChange = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      term: value
    });
  };

  _onSubmit = event => {
    const { term } = this.state;
    event.preventDefault();
    console.log(term);
    this.setState({
      term: ""
    });
  };
}

export default Container;
