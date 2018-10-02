import React from "react";
import Form from "components/Form";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const EditProfilePassword = (props, context) => {
  const {
    CurrentPassword,
    NewPassword1,
    NewPassword2,
    handleChange,
    handlePassword
  } = props;

  return (
    <div>
      <Form
        name="CurrentPassword"
        title="CurrentPassword"
        type="password"
        value={CurrentPassword}
        handleChange={handleChange}
      />
      <Form
        name="NewPassword1"
        title="Newpassword1"
        type="password"
        value={NewPassword1}
        handleChange={handleChange}
      />
      <Form
        name="NewPassword2"
        title="NewPassword2"
        type="password"
        value={NewPassword2}
        handleChange={handleChange}
      />
      <div className={styles.horizontal} onClick={handlePassword}>
        <button className={styles.button}>
          {context.t("Change Password")}
        </button>
      </div>
    </div>
  );
};

EditProfilePassword.contextTypes = {
  t: PropTypes.func.isRequired
};

export default EditProfilePassword;
