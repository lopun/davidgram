import React from "react";
import styles from "./styles.scss";
import { Route, Switch, Link } from "react-router-dom";
import PropTypes from "prop-types";
import ForgotPassword from "components/ForgotPassword";
import ResetPassword from "components/ResetPassword";

const ResetForm = (props, context) => {
  return (
    <div>
      <div className={styles.navigation}>
        <div className={styles.inner}>
          <div className={styles.column}>
            <Link to="/">
              <img
                src={require("images/logo.png")}
                className={styles.logo}
                alt={context.t("Logo")}
              />
            </Link>
          </div>
          <div className={styles.column}>
            <input
              type="text"
              placeholder={context.t("Search")}
              className={styles.searchInput}
            />
          </div>
          <div className={styles.column}>
            <div className={styles.navIcon}>로그인</div>
          </div>
        </div>
      </div>
      <div>
        <Switch>
          <Route key={1} path="/:uid/:token" component={ResetPassword} />
          <Route key={1} exact path="" component={ForgotPassword} />
        </Switch>
      </div>
    </div>
  );
};

ResetForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default ResetForm;
