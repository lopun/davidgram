import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const {
    user: { simpleUser }
  } = state;
  return {
    simpleUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSimpleProfile: () => {
      dispatch(userActions.getSimpleProfile());
    },
    changePassword: (current_password, new_password) => {
      dispatch(userActions.setPassword(current_password, new_password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
