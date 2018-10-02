import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const ResetPassword = (props, context) => {
  const { handleChange, handleSubmit, password1, password2 } = props;
  return (
    <div className={styles.resetWrapper}>
      <div className={styles.inner}>
        <div className={styles.inputWrapper}>
          <span>New Password :</span>
          <input
            name="password1"
            className={styles.passwordInput}
            value={password1}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <span>New Password Confirmation :</span>
          <input
            name="password2"
            className={styles.passwordInput}
            value={password2}
            onChange={handleChange}
          />
        </div>
        <div onClick={handleSubmit} className={styles.submit}>
          Reset Password
        </div>
      </div>
    </div>
  );
};

ResetPassword.contextTypes = {
  t: PropTypes.func.isRequired
};

export default ResetPassword;
