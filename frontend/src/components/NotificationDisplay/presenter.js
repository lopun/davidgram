import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";

const NotificationDisplay = (props, context) => {
  const { notification, handleClick } = props;
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
          <div className={styles.paragraph}>
            <span className={styles.username}>
              {notification.creator.username}{" "}
            </span>
            {context.t("commented on your picture.")} {notification.comment}
          </div>
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
          <div className={styles.paragraph}>
            <span className={styles.username}>
              {notification.creator.username}
            </span>{" "}
            {context.t("likes your picture.")}
          </div>
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
          <div className={styles.paragraph}>
            <span className={styles.username}>
              {notification.creator.username}{" "}
            </span>
            {context.t("just followed your account.")}
          </div>
          <div className={styles.follow} onClick={handleClick}>
            {props.following ? context.t("Unfollow") : context.t("Follow")}
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

export default NotificationDisplay;
