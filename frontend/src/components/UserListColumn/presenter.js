import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const UserListColumn = (props, context) => {
  const {
    user: { profile_image, username }
  } = props;
  return (
    <div className={styles.boxWrapper}>
      <div className={styles.userWrapper}>
        <img
          className={props.big ? styles.bigProfileImage : styles.profileImage}
          src={profile_image || require("images/noPhoto.jpg")}
          alt={username}
        />
        <div className={props.big ? styles.bigUsername : styles.username}>
          {username}
        </div>
      </div>
      <div className={styles.follow} onClick={props.handleClick}>
        {props.user.following ? context.t("Unfollow") : context.t("Follow")}
      </div>
    </div>
  );
};

UserListColumn.contextTypes = {
  t: PropTypes.func.isRequired
};

UserListColumn.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    following: PropTypes.bool.isRequired
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  big: PropTypes.bool
};

export default UserListColumn;
