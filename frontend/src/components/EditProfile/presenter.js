import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const EditProfile = (props, context) => {
  const {
    handleChange,
    Fullname,
    Username,
    Website,
    Bio,
    Email,
    Contact,
    Gender,
    Recommend
  } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <li className={styles.tapRow}>{context.t("Edit Profile")}</li>
        <li className={styles.tapRow}>{context.t("Change Password")}</li>
        <li className={styles.tapRow}>{context.t("Allowed Apps")}</li>
        <li className={styles.tapRow}>{context.t("Email & SMS")}</li>
        <li className={styles.tapRow}>{context.t("Manage Contacts")}</li>
        <li className={styles.tapRow}>{context.t("Security & Privacy")}</li>
      </div>
      <div className={styles.column}>
        <div className={styles.profile}>
          <img src={require("images/noPhoto.jpg")} alt="test" />
          <span>ujin325</span>
          <span>{context.t("Change Profile Image")}</span>
        </div>
        <div>
          <Form
            name="Fullname"
            title="Fullname"
            type="text"
            value={Fullname}
            handleChange={handleChange}
          />
          <Form
            name="Username"
            title="Username"
            type="text"
            value={Username}
            handleChange={handleChange}
          />
          <Form
            name="Website"
            title="Website"
            type="text"
            value={Website}
            handleChange={handleChange}
          />
          <Form
            name="Bio"
            title="Bio"
            type="text"
            value={Bio}
            handleChange={handleChange}
          />
          <Form
            name="Email"
            title="Email"
            type="email"
            value={Email}
            handleChange={handleChange}
          />
          <Form
            name="Contact"
            title="Contact Info"
            type="text"
            value={Contact}
            handleChange={handleChange}
          />
          <Form
            name="Gender"
            title="Gender"
            type="text"
            value={Gender}
            handleChange={handleChange}
          />
          <Form
            name="Recommend"
            title="Recommend similar accounts"
            type="text"
            value={Recommend}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

EditProfile.contextTypes = {
  t: PropTypes.func.isRequired
};

const Form = (props, context) => {
  const { title, name, type, value, handleChange } = props;
  return (
    <div>
      <span>{title}</span>
      <input type={type} name={name} value={value} onChange={handleChange} />
    </div>
  );
};

Form.contextTypes = {
  t: PropTypes.func.isRequired
};

export default EditProfile;
