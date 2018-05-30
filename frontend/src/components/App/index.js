import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const {
    user,
    routing: { location }
    // routing: {location}을 넣어주면 fetch하는 url이 바뀔 때 redux의
    // routing의 location이 바뀌는걸 인지하게 된다. 고로 새로운 props를 presenter이 받을 수 있게 됨.
  } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    pathname: location.pathname
  };
};

export default connect(mapStateToProps)(Container);
