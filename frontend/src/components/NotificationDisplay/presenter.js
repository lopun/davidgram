import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";

const NotificationDisplay = (props, context) => {
  const { notification, handleClick, following } = props;
  switch (notification.notification_type) {
    case "comment":
      return (
        <div className={styles.notification}>
          <img
            className={styles.profileImage}
            src={
              notification.creator.profile_image == null
                ? require("images/noPhoto.jpg")
                : notification.creator.profile_image
            }
            alt="profile_image"
          />
          <p className={styles.twoLine}>
            <span className={styles.username}>
              {notification.creator.username}{" "}
            </span>
            {context.t("commented on your picture. ")} {notification.comment}
            <span className={styles.naturalTime}>
              {notification.natural_time}
            </span>
          </p>
          <div>
            <img
              className={styles.image}
              src={notification.image.file}
              alt="profile_image"
            />
          </div>
        </div>
      );
    case "like":
      return (
        <div className={styles.notification}>
          <div>
            <img
              className={styles.profileImage}
              src={
                notification.creator.profile_image == null
                  ? require("images/noPhoto.jpg")
                  : notification.creator.profile_image
              }
              alt="profile_image"
            />
          </div>
          <p className={styles.paragraph}>
            <span className={styles.username}>
              {notification.creator.username}
            </span>{" "}
            {context.t("likes your picture. ")}
            <span className={styles.naturalTime}>
              {notification.natural_time}
            </span>
          </p>
          <div>
            <img
              className={styles.image}
              src={notification.image.file}
              alt="profile_image"
            />
          </div>
        </div>
      );
    case "follow":
      return (
        <div className={styles.notification}>
          <div>
            <img
              className={styles.profileImage}
              src={
                notification.creator.profile_image == null
                  ? require("images/noPhoto.jpg")
                  : notification.creator.profile_image
              }
              alt="profile_image"
            />
          </div>
          <p className={styles.paragraph}>
            <span className={styles.username}>
              {notification.creator.username}{" "}
            </span>
            {context.t("just followed your account. ")}
            <span className={styles.naturalTime}>
              {notification.natural_time}
            </span>
          </p>
          <div className={styles.follow} onClick={handleClick}>
            {following ? context.t("Unfollow") : context.t("Follow")}
          </div>
        </div>
      );
    default:
      return <div>default</div>;
  }
};

NotificationDisplay.contextTypes = {
  t: PropTypes.func.isRequired
};

NotificationDisplay.propTypes = {
  notification: PropTypes.objectOf(
    PropTypes.shape({
      comment: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        following: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        profile_image: PropTypes.string,
        usersname: PropTypes.string.isRequired
      }),
      id: PropTypes.number.isRequired,
      image: PropTypes.shape({
        file: PropTypes.string
      }),
      natural_time: PropTypes.string.isRequired,
      notification_type: PropTypes.func.isRequired,
      to: PropTypes.number.isRequired,
      updated_at: PropTypes.string.isRequired
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  following: PropTypes.bool.isRequired
};

export default NotificationDisplay;
