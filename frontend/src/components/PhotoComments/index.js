import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const PhotoComments = props => (
  <div>
    <ul>
      <Comment username={props.creator} comment={props.caption} />
      {props.comments.map(comment => (
        <Comment
          username={comment.creator.username}
          comment={comment.message}
          key={comment.id}
        />
      ))}
    </ul>
  </div>
);

const Comment = props => (
  <li className={styles.commentWrapper}>
    <span className={styles.username}>{props.username}</span>{" "}
    <span className={styles.comment}>{props.comment}</span>
  </li>
);

PhotoComments.propTypes = {
  caption: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        usersname: PropTypes.string
      }).isRequired
    })
  ).isRequired
};

export default PhotoComments;
