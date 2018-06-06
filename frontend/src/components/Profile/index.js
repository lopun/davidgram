import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const {
    user: { loggedInUser }
  } = state;
  return {
    loggedInUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProfile: () => dispatch(userActions.getProfile())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
