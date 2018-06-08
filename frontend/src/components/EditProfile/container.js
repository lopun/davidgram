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
    Recommend: ""
  };
  render() {
    return (
      <EditProfile
        {...this.props}
        {...this.state}
        handleChange={this.handleChange}
      />
    );
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
}

export default Container;
