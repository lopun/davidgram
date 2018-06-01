import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import PhotoActions from "components/PhotoActions";
import PhotoComments from "components/PhotoComments";
import TimeStamp from "components/TimeStamp";
import CommentBox from "components/CommentBox";
import UserList from "components/UserList";

const FeedPhoto = (props, context) => {
  console.log(props);
  return (
    <div className={styles.feedPhoto}>
      <header>
        <img
          src={props.creator.profile_image || require("images/noPhoto.jpg")}
          alt={props.creator.username}
          className={styles.profileImage}
        />
        <div className={styles.informationWrapper}>
          <span className={styles.username}>{props.creator.username}</span>
          <span className={styles.location}>
            {props.location ? props.location : null}
          </span>
        </div>
      </header>
      <img src={props.file} alt={props.caption} />
      <div className={styles.contents}>
        <PhotoActions
          number={props.like_count}
          isLiked={props.is_liked}
          photoId={props.id}
          openLikes={props.openLikes}
        />
        <PhotoComments
          caption={props.caption}
          creator={props.creator.username}
          comments={props.comments}
        />
        <TimeStamp time={props.natural_time} />
        <CommentBox photoId={props.id} />
      </div>
      {props.seeingLikes ? (
        <UserList
          photoId={props.id}
          title={context.t("Likes")}
          closeLikes={props.closeLikes}
        />
      ) : null}
    </div>
  );
};

FeedPhoto.contextTypes = {
  t: PropTypes.func.isRequired
};

FeedPhoto.propTypes = {
  // shape으로 작업을 하면 prop들의 propTypes를 더욱 명확히 해줄 수 있다.
  creator: PropTypes.shape({
    profile_image: PropTypes.string,
    usersname: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        usersname: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  natural_time: PropTypes.string.isRequired,
  is_liked: PropTypes.bool.isRequired,
  seeingLikes: PropTypes.bool.isRequired,
  closeLikes: PropTypes.func.isRequired,
  openLikes: PropTypes.func.isRequired
};

export default FeedPhoto;
