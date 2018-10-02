import Container from "./container";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const {
    user: { userList }
  } = state;
  return {
    userList: userList
  };
};

export default connect(mapStateToProps, null)(Container);
