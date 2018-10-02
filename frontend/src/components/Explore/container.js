import React, { Component } from "react";
import PropTypes from "prop-types";
import Explore from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    getExplore: PropTypes.func.isRequired,
    userList: PropTypes.array
  };
  componentDidMount() {
    const { getExplore } = this.props;
    if (!this.props.userList) {
      getExplore();
    } else {
      this.setState({
        loading: false
      });
      // 여기서 loading: false를 다시 해주는 이유는 Explore로 갔다가 다시 돌아올 때
      // getExplore를 실행하지 않으므로 loading이 계속 true일 수밖에 없다.
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.userList) {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    const { userList } = this.props;
    return <Explore {...this.state} userList={userList} {...this.props} />;
  }
}

export default Container;
