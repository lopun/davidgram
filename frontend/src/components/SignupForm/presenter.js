import React from "react";
// import Ionicon from "react-ionicons";
import formStyles from "shared/formStyles.scss";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";

const SignupForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <h3 className={formStyles.signupHeader}>
      Sign up to see photos and videos from your friends.
    </h3>
    <span>
      <FacebookLogin
        appId="229930494225912"
        autoLoad={true}
        fields="name,email,picture"
        callback={props.handleFacebookLogin}
        cssClass={formStyles.button}
        icon="fa-facebook-official"
        textButton={context.t("Log in with Facebook")}
      />
    </span>
    <span className={formStyles.divider}>or</span>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        className={formStyles.textInput}
        type="email"
        placeholder={context.t("Email")}
        value={props.emailValue}
        onChange={props.handleChange}
        name="email"
      />
      <input
        className={formStyles.textInput}
        type="text"
        placeholder={context.t("Full Name")}
        value={props.nameValue}
        onChange={props.handleChange}
        name="name"
      />
      <input
        className={formStyles.textInput}
        type="username"
        placeholder={context.t("Username")}
        value={props.usernameValue}
        onChange={props.handleChange}
        name="username"
      />
      <input
        className={formStyles.textInput}
        type="password"
        placeholder={context.t("Password")}
        value={props.passwordValue}
        onChange={props.handleChange}
        name="password"
      />
      <input
        className={formStyles.button}
        type="submit"
        value={context.t("Sign up")}
      />
    </form>
    <p className={formStyles.terms}>
      By signing up, you agree to our <span>Terms & Privacy Policy</span>.
    </p>
  </div>
);

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired
};

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default SignupForm;
