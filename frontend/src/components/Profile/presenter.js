import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Ionicon from "react-ionicons";
import Loading from "components/Loading";
import PhotoDisplay from "components/PhotoDisplay";

const Profile = (props, context) => {
  const { loggedInUser } = props;
  if (props.loggedIn) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.profile}>
          <div className={styles.column}>
            <div className={styles.profileImageWrapper}>
              <img
                className={styles.profileImage}
                src={
                  loggedInUser.profile_image || require("images/noPhoto.jpg")
                }
                alt="cool_image"
              />
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.row}>
              <div className={styles.name}>{loggedInUser.username}</div>
              <div className={styles.button}>Edit Profile</div>
              <div className={styles.icon}>
                <Ionicon icon="ios-settings" fontSize="28px" color="#" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.text}>
                <span className={styles.textTitle}>{context.t("Posts")}</span>
                <span className={styles.textNumber}>
                  {loggedInUser.post_count}
                </span>
              </div>
              <div className={styles.text}>
                <span className={styles.textTitle}>
                  {context.t("Follower")}
                </span>
                <span className={styles.textNumber}>
                  {loggedInUser.followers_count}
                </span>
              </div>
              <div className={styles.text}>
                <span className={styles.textTitle}>
                  {context.t("Following")}
                </span>
                <span className={styles.textNumber}>
                  {loggedInUser.following_count}
                </span>
              </div>
            </div>
            <div className={styles.row}>
              <span className={styles.bio}>{loggedInUser.bio}</span>
              {/* <span className={styles.website}>www.kaistent.org</span> */}
              <a className={styles.website} href={loggedInUser.website}>
                {loggedInUser.website}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.tap}>
          <div className={`${styles.tapColumn} ${styles.selected}`}>Photos</div>
          <div className={styles.tapColumn}>Saved</div>
        </div>
        <div className={styles.images}>
          {loggedInUser.images.map(image => <PhotoDisplay photo={image} />)}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <Loading />
      </div>
    );
  }
};

Profile.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Profile;
