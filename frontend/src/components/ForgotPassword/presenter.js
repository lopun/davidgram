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
              Davidagram 사용자 이름이나 계정에 연결된 이메일 주소를 사용해서
              비밀번호를 재설정할 수 있도록 도와 드리겠습니다.z
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
