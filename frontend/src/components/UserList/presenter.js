import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import Loading from "components/Loading";
import styles from "./styles.scss";
import UserListRow from "components/UserListRow";

const UserList = (props, context) => (
  <div className={styles.container}>
    <div className={styles.box}>
      <header className={styles.header}>
        <h4 className={styles.title}>{props.title}</h4>
        <span onClick={props.closeLikes}>
          <Ionicon icon="md-close" fontSize="20px" color="black" />
        </span>
      </header>
      <div className={styles.content}>
        {props.userList ? (
          props.userList.map(user => <UserListRow user={user} key={user.id} />)
        ) : (
          <Loading />
        )}
      </div>
    </div>
  </div>
);

UserList.contextTypes = {
  t: PropTypes.func.isRequired
};

UserList.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array,
  closeLikes: PropTypes.func.isRequired,
  photoId: PropTypes.number.isRequired,
  userList: PropTypes.arrayOf(
    PropTypes.shape({
      profile_image: PropTypes.string,
      username: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      following: PropTypes.bool.isRequired
    }).isRequired
  )
};

export default UserList;
