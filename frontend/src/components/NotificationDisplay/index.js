import Container from "./container";
import { connect } from "react-redux";
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const {
    user: { userList }
  } = state;
  return {
    userList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    notification: {
      creator: { following, id }
    }
  } = ownProps;
  return {
    handleFollow: () => {
      dispatch(userActions.followUser(id));
    },
    handleUnfollow: () => {
      dispatch(userActions.unfollowUser(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
