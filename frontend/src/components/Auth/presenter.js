import React from "react";
import styles from "./styles.scss";
import LoginForm from "components/LoginForm";
import SignupForm from "components/SignupForm";

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img src={require("images/phone.png")} alt="This app is soooo awesome!" />
    </div>
    <div className={styles.column}>
      <div className={`${styles.whiteBox} ${styles.formBox}`}>
        <img src={require("images/logo.png")} alt="Logo" />
        {props.action === "login" && <LoginForm />}
        {props.action === "signup" && <SignupForm />}
      </div>
      <div className={styles.whiteBox}>
        {props.action === "login" && (
          <p className={styles.text}>
            Don't have an account?{" "}
            <span className={styles.changeLink} onClick={props.changeAction}>
              Sign up
            </span>
          </p>
        )}
        {props.action === "signup" && (
          <p className={styles.text}>
            Have an account?{" "}
            <span className={styles.changeLink} onClick={props.changeAction}>
              Sign up
            </span>
          </p>
        )}
      </div>
      <div className={styles.appBox}>
        <span>Get the app</span>
        <div className={styles.appstores}>
          <img
            src={require("images/ios.png")}
            alt="Download it on the Apple's Appstore!"
          />
          <img
            src={require("images/android.png")}
            alt="Download it on the Andriod's Appstore!"
          />
        </div>
      </div>
    </div>
  </main>
);
export default Auth;
