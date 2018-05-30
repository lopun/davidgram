import React, { Component } from "react";
import PropTypes from "prop-types";
import Feed from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    getFeed: PropTypes.func.isRequired
  };
  componentDidMount() {
    const { getFeed } = this.props;
    if (!this.props.feed) {
      getFeed();
    } else {
      this.setState({
        loading: false
      });
      // 여기서 loading: false를 다시 해주는 이유는 Explore로 갔다가 다시 돌아올 때
      // getFeed를 실행하지 않으므로 loading이 계속 true일 수밖에 없다.
    }

    // bullshit token에 대해서는 피드를 불러오지 않고 로그아웃을 시킴.
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.feed) {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    const { feed } = this.props;
    return <Feed {...this.state} feed={feed} />;
  }
}

export default Container;
