import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Form from "components/Form";

const EditProfileBody = (props, context) => {
  const {
    Fullname,
    handleChange,
    Username,
    Website,
    Bio,
    Email,
    Contact,
    Gender
  } = props;
  return (
    <div>
      <Form
        name="Fullname"
        title="Fullname"
        type="text"
        value={Fullname}
        handleChange={handleChange}
      />
      <Form
        name="Username"
        title="Username"
        type="text"
        value={Username}
        handleChange={handleChange}
      />
      <Form
        name="Website"
        title="Website"
        type="text"
        value={Website}
        handleChange={handleChange}
      />
      <Form
        name="Bio"
        title="Bio"
        type="text"
        value={Bio}
        handleChange={handleChange}
        big={true}
      />
      <div className={styles.horizontal}>
        <span className={styles.horizontalText}>Personal Info</span>
      </div>
      <Form
        name="Email"
        title="Email"
        type="email"
        value={Email}
        handleChange={handleChange}
      />
      <Form
        name="Contact"
        title="Contact Info"
        type="text"
        value={Contact}
        handleChange={handleChange}
      />
      <Form
        name="Gender"
        title="Gender"
        type="text"
        value={Gender}
        handleChange={handleChange}
      />
      <div className={styles.inputWrapper}>
        <span className={styles.title}>Recommend similar accounts</span>
        <div className={styles.checkboxWrapper}>
          <input className={styles.checkbox} type="checkbox" />
          {/* https://stackoverflow.com/questions/26615779/react-checkbox-not-sending-onchange checkbox 다루는법 나와있음!*/}
          <span className={styles.similar}>
            {context.t(
              "Include your accouunt while recommending similar accounts to follow."
            )}
          </span>
        </div>
      </div>
      <div className={styles.horizontal}>
        <button className={styles.button}>{context.t("Submit")}</button>
        <span className={styles.disable}>
          {context.t("Temporarily disable your account")}
        </span>
      </div>
    </div>
  );
};

EditProfileBody.contextTypes = {
  t: PropTypes.func.isRequired
};

EditProfileBody.propTypes = {
  Fullname: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  Username: PropTypes.string,
  Website: PropTypes.string,
  Bio: PropTypes.string,
  Email: PropTypes.string,
  Contact: PropTypes.string,
  Gender: PropTypes.string
};

export default EditProfileBody;
