import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const {
    user: { notificationList }
  } = state;
  return {
    notificationList
  };
};

export default connect(mapStateToProps, null)(Container);
