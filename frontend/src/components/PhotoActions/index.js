import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "redux/modules/photos";

// ownProps를 이용하면 굳이 container까지 가서 photoId 체크하고 .... 할필요 없이
// index에서 FeedPhoto에서 준 props에 접근해서 like/unlike를 dispatch 시켜줄 수 있다.
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleHeartClick: () => {
      if (ownProps.isLiked) {
        dispatch(photoActions.unlikePhoto(ownProps.photoId));
      } else {
        dispatch(photoActions.likePhoto(ownProps.photoId));
      }
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
