import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import "./styles.scss";
import Footer from "components/Footer";
import Auth from "components/Auth";
import Navigation from "components/Navigation";
import Feed from "components/Feed";
import ResetForm from "components/ResetForm";
import Explore from "components/Explore";
import Search from "components/Search";
import Profile from "components/Profile";

const App = props => [
  // Nav bar
  props.isLoggedIn ? <Navigation key={5} /> : null,

  // Routes for Main Contents.
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
  <Footer key={3} />
];

App.propTypess = {
  isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoutes = props => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/explore" component={Explore} />
    <Route path="/search/:searchTerm" component={Search} />
    <Route path="/profile" component={Profile} />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/forgot" component={ResetForm} />
  </Switch>
);

export default App;
