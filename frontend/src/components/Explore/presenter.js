import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import UserListRow from "components/UserListRow";

const Explore = props => {
  if (props.loading) {
    return <LoadingExplore />;
  } else if (props.userList) {
    return <RenderExplore {...props} />;
  }
};

const LoadingExplore = props => (
  <div className={styles.userList}>
    <Loading />
  </div>
);

const RenderExplore = props => (
  <div className={styles.userList}>
    {props.userList.map(user => (
      <UserListRow user={user} key={user.id} big={true} />
    ))}
  </div>
);

Explore.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Explore;
