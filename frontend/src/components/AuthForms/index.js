// Sign up, Login Form 두개를 만들자.
import React from "react";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

export const LoginForm = props => (
  <div className={styles.formComponent}>
    <form className={styles.form}>
      <input className={styles.textInput} type="text" placeholder="Username" />
      <input
        className={styles.textInput}
        type="password"
        placeholder="Password"
      />
      <input className={styles.button} type="submit" value="Log in" />
    </form>
    <span className={styles.divider}>or</span>
    <span className={styles.facebookLink}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" />
      Log in with Facaebook
    </span>
    <span className={styles.forgotLink}>Forgot password?</span>
  </div>
);

export const SignupForm = props => (
  <div className={styles.formComponent}>
    <h3 className={styles.signupHeader}>
      Sign up to see photos and videos from your friends.
    </h3>
    <button className={styles.button}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="white" />
      Log in With Facebook
    </button>
    <span className={styles.divider}>or</span>
    <form className={styles.form}>
      <input className={styles.textInput} type="email" placeholder="Email" />
      <input className={styles.textInput} type="text" placeholder="Full Name" />
      <input
        className={styles.textInput}
        type="username"
        placeholder="Username"
      />
      <input
        className={styles.textInput}
        type="password"
        placeholder="Password"
      />
      <input className={styles.button} type="submit" value="Sign up" />
    </form>
    <p className={styles.terms}>
      By signing up, you agree to our <span>Terms & Privacy Policy</span>.
    </p>
  </div>
);
