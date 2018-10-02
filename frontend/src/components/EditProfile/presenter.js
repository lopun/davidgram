import React from "react";
import EditProfileBody from "components/EditProfileBody";
import EditProfilePassword from "components/EditProfilePassword";
import Loading from "components/Loading";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const EditProfile = (props, context) => {
  const { active, handleTap, simpleUser, loading } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <button
          className={`${styles.tapRow} ${active === "Edit" && styles.active}`}
          name="Edit"
          onClick={handleTap}
        >
          {context.t("Edit Profile")}
        </button>
        <button
          className={`${styles.tapRow} ${active === "Password" &&
            styles.active}`}
          name="Password"
          onClick={handleTap}
        >
          {context.t("Change Password")}
        </button>
        <button
          className={`${styles.tapRow} ${active === "Allowed" &&
            styles.active}`}
          name="Allowed"
          onClick={handleTap}
        >
          {context.t("Allowed Apps")}
        </button>
        <button
          className={`${styles.tapRow} ${active === "Email" && styles.active}`}
          name="Email"
          onClick={handleTap}
        >
          {context.t("Email & SMS")}
        </button>
        <button
          className={`${styles.tapRow} ${active === "Contacts" &&
            styles.active}`}
          name="Contacts"
          onClick={handleTap}
        >
          {context.t("Manage Contacts")}
        </button>
        <button
          className={`${styles.tapRow} ${active === "Security" &&
            styles.active}`}
          name="Security"
          onClick={handleTap}
        >
          {context.t("Security & Privacy")}
        </button>
      </div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className={styles.column}>
          <div className={styles.profile}>
            <img
              className={styles.image}
              src={simpleUser.profile_image || require("images/noPhoto.jpg")}
              alt="test"
            />
            <div className={styles.user}>
              <span className={styles.username}>{simpleUser.username}</span>
              {active === "Edit" && (
                <a className={styles.edit} href="/">
                  {context.t("Change Profile Image")}
                </a>
              )}
            </div>
          </div>
          {active === "Edit" && <EditProfileBody {...props} />}
          {active === "Password" && <EditProfilePassword {...props} />}
        </div>
      )}
    </div>
  );
};

EditProfile.contextTypes = {
  t: PropTypes.func.isRequired
};

export default EditProfile;
