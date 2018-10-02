import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";
const ForgotPassword = (props, context) => {
  return (
    <div className={styles.resetForm}>
      <div className={styles.inner}>
        <div className={styles.column} />
        <div className={styles.column}>
          <div className={styles.explanation}>
            <p>Reset Password</p>
            <span>
              {context.t(
                "We'll help you reset your password using your username or the email address associated with your account."
              )}
            </span>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.inputColumn}>
              <span>
                Email or User<br />Name
              </span>
            </div>
            <form className={styles.inputColumn}>
              <input
                className={styles.searchInput}
                onChange={props.handleChange}
                value={props.input}
              />
              <div onClick={props.handleSubmit} className={styles.resetButton}>
                Reset Password
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

ForgotPassword.contextTypes = {
  t: PropTypes.func.isRequired
};
