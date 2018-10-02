import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const {
    user: { userList, imageList }
  } = state;
  return {
    imageList,
    userList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { searchTerm }
    }
  } = ownProps;
  return {
    searchByTerm: () => {
      dispatch(userActions.searchByTerm(searchTerm));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
