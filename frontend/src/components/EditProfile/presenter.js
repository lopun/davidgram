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
    Recommend,
    active,
    handleTap
  } = props;

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
      <div className={styles.column}>
        <div className={styles.profile}>
          <img
            className={styles.image}
            src={require("images/noPhoto.jpg")}
            alt="test"
          />
          <div className={styles.user}>
            <span className={styles.username}>ujin325</span>
            <a className={styles.edit} href="#">
              {context.t("Change Profile Image")}
            </a>
          </div>
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
            big={true}
          />
          <div className={styles.horizontal}>
            <span className={styles.horizontalText}>Personal Info</span>
          </div>
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
          <div className={styles.inputWrapper}>
            <span className={styles.title}>Recomment similar accounts</span>
            <input type="checkbox" />
            loreeipsumloreeipsumloreeipsumloreeipsumloreeipsumloreeipsum
          </div>
        </div>
      </div>
    </div>
  );
};

EditProfile.contextTypes = {
  t: PropTypes.func.isRequired
};

const Form = (props, context) => {
  const { title, name, type, value, handleChange, big } = props;
  return (
    <div className={styles.inputWrapper}>
      <span className={styles.title}>{title}</span>
      <input
        className={`${styles.input} ${big && styles.bigInput}`}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

Form.contextTypes = {
  t: PropTypes.func.isRequired
};

export default EditProfile;
