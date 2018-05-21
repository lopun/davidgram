import React from "react";
// import Ionicon from "react-ionicons";
import formStyles from "shared/formStyles.scss";
import FacebookLogin from "react-facebook-login";
import PropTypes from "prop-types";

const LoginForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        className={formStyles.textInput}
        type="text"
        placeholder={context.t("Username")}
        value={props.usernameValue}
        onChange={props.handleInputChange}
        name="username"
      />
      <input
        className={formStyles.textInput}
        type="password"
        placeholder={context.t("Password")}
        value={props.passwordValue}
        onChange={props.handleInputChange}
        name="password"
      />
      <input className={formStyles.button} type="submit" value="Log in" />
    </form>
    <span className={formStyles.divider}>or</span>
    <span>
      <FacebookLogin
        appId="229930494225912"
        autoLoad={false}
        fields="name,email,picture"
        callback={props.handleFacebookLogin}
        cssClass={formStyles.facebookLink}
        icon="fa-facebook-official"
        textButton={context.t("Log in with Facebook")}
      />
    </span>
    <span className={formStyles.forgotLink}>
      {context.t("Forgot Password?")}
    </span>
  </div>
);

LoginForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
};

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default LoginForm;
