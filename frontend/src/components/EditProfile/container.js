import React, { Component } from "react";
import EditProfile from "./presenter";

class Container extends Component {
  state = {
    Fullname: "",
    Username: "",
    Website: "",
    Bio: "",
    Email: "",
    Contact: "",
    Gender: "",
    Recommend: "",
    active: "Edit"
  };
  render() {
    return (
      <EditProfile
        {...this.props}
        {...this.state}
        handleChange={this.handleChange}
        handleTap={this.handleTap}
      />
    );
  }

  handleTap = e => {
    this.setState({
      active: e.target.name
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
}

export default Container;
