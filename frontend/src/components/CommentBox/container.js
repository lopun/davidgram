import React, { Component } from "react";
import CommentBox from "./presenter";

class Container extends Component {
  state = {
    comment: ""
  };

  render() {
    return (
      <CommentBox
        handleKeyPress={this._handleKeyPress}
        handleInputChange={this._handleInputChange}
        {...this.state}
        {...this.props}
      />
    );
  }

  _handleInputChange = e => {
    this.setState({
      comment: e.target.value
    });
  };

  _handleKeyPress = e => {
    const { submitComment } = this.props;
    const { comment } = this.state;
    const { key } = e;
    if (key === "Enter") {
      e.preventDefault();
      submitComment(comment);
      this.setState({
        comment: ""
      });
    }
  };
}

export default Container;
