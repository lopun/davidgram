import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "redux/modules/photos";

const mapStateToProps = (state, ownProps) => {
  const {
    photos: { feed }
  } = state;
  return {
    feed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeed: () => {
      // 누군가 getFeed를 부를때마다 getFeed action을 dispatch함으로써 피드를 불러온다.
      dispatch(photoActions.getFeed());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
