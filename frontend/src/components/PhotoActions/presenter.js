import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

const PhotoActions = (props, context) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icons}>
        <span className={styles.icon} onClick={props.handleHeartClick}>
          {props.isLiked ? (
            <Ionicon icon="ios-heart" fontSize="26px" color="#EB4B59" />
          ) : (
            <Ionicon icon="ios-heart-outline" fontSize="26px" color="black" />
          )}
        </span>
        <span className={styles.icon} onClick={props.handleHeartClick}>
          <Ionicon icon="ios-text-outline" fontSize="26px" color="black" />
        </span>
      </div>
      <span className={styles.likes} onClick={props.openLikes}>
        {props.number}
        {props.number === 1 ? context.t(" Like") : context.t(" Likes")}
      </span>
    </div>
  );
};

PhotoActions.propTypes = {
  number: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  photoId: PropTypes.number.isRequired,
  handleHeartClick: PropTypes.func.isRequired,
  openLikes: PropTypes.func.isRequired
};

PhotoActions.contextTypes = {
  t: PropTypes.func.isRequired
};

export default PhotoActions;
