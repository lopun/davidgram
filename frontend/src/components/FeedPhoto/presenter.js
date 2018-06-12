import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import PhotoActions from "components/PhotoActions";
import PhotoComments from "components/PhotoComments";
import TimeStamp from "components/TimeStamp";
import CommentBox from "components/CommentBox";
import UserList from "components/UserList";

const FeedPhoto = (props, context) => {
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
    usersname: PropTypes.string
  }),
  location: PropTypes.string,
  image: PropTypes.string,
  like_count: PropTypes.number,
  caption: PropTypes.string,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        usersname: PropTypes.string
      })
    })
  ),
  natural_time: PropTypes.string,
  is_liked: PropTypes.bool,
  seeingLikes: PropTypes.bool,
  closeLikes: PropTypes.func,
  openLikes: PropTypes.func
};

export default FeedPhoto;
