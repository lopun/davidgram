import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Ionicon from "react-ionicons";

const Profile = (props, context) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.profile}>
        <div className={styles.column}>
          <img
            src="http://hdwpro.com/wp-content/uploads/2017/01/3D-Cool-Image.jpg"
            alt="cool_image"
          />
        </div>
        <div className={styles.column}>
          <div className={styles.row}>
            <div className={styles.name}>jihunko</div>
            <div className={styles.button}>프로필 편집</div>
            <div className={styles.icon}>
              <Ionicon icon="ios-settings" fontSize="28px" color="#" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.text}>
              <span className={styles.textTitle}>{context.t("Posts")}</span>
              <span className={styles.textNumber}>3</span>
            </div>
            <div className={styles.text}>
              <span className={styles.textTitle}>{context.t("Follower")}</span>
              <span className={styles.textNumber}>110</span>
            </div>
            <div className={styles.text}>
              <span className={styles.textTitle}>{context.t("Following")}</span>
              <span className={styles.textNumber}>82</span>
            </div>
          </div>
          <div className={styles.row}>
            <span className={styles.bio}>jihun_KE</span>
            <span className={styles.website}>www.kaistent.org</span>
          </div>
        </div>
      </div>
      <div className={styles.tap}>
        <div className={`${styles.tapColumn} ${styles.selected}`}>Photos</div>
        <div className={styles.tapColumn}>Saved</div>
      </div>
      <div className={styles.images} />
    </div>
  );
};

Profile.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Profile;
