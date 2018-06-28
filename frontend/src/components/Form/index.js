import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const Form = (props, context) => {
  const { title, name, type, value, handleChange, big } = props;
  return (
    <div className={styles.inputWrapper}>
      <span className={styles.title}>{title}</span>
      <input
        className={`${styles.input} ${big && styles.bigInput}`}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

Form.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Form;
