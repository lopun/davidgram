import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import NotificationDisplay from "components/NotificationDisplay";

const Notification = (props, context) => {
  return (
    <div>
      <div
        className={styles.notificationWrapper}
        onClick={props.getNotifications}
      >
        {props.notificationList ? (
          props.notificationList.map(notification => (
            <NotificationDisplay
              notification={notification}
              key={notification.id}
              handleFollow={props.handleFollow}
            />
          ))
        ) : (
          <div className={styles.loading}>
            <Loading />
          </div>
        )}
      </div>
      <div className={styles.triangle} />
      <div className={`${styles.border} ${styles.triangle}`} />
    </div>
  );
};

Notification.contextTypes = {
  t: PropTypes.func.isRequired
};

Notification.propTypes = {
  getNotifications: PropTypes.func,
  notificationList: PropTypes.array,
  handleFollow: PropTypes.func
};

export default Notification;
