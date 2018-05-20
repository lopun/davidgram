import React from "react";
<<<<<<< HEAD
import styles from "./styles.scss";

const Footer = (props, context) => (
  <footer className={styles.footer}>
    <div className={styles.column}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listItem}>About Us</li>
          <li className={styles.listItem}>Support</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Press</li>
          <li className={styles.listItem}>API</li>
          <li className={styles.listItem}>Jobs</li>
          <li className={styles.listItem}>Privacy</li>
          <li className={styles.listItem}>Terms</li>
          <li className={styles.listItem}>Directory</li>
          <li className={styles.listItem}>Language</li>
        </ul>
      </nav>
    </div>
    <div className={styles.column}>
      <span className={styles.copyright}>(c)2018 Davidgram</span>
    </div>
  </footer>
);

export default Footer;
=======

const Footer = (props, context) => (
  <footer>
    <div>
      <nav>
        <ul>
          <li>About us</li>
          <li>Support</li>
          <li>Blog</li>
          <li>Press</li>
          <li>API</li>
          <li>Jobs</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Directory</li>
          <li>Language</li>
        </ul>
      </nav>
    </div>
    <div>
      <span>(c)nomadgram</span>
    </div>
  </footer>
);
>>>>>>> eeb01426793a037d3e1e31d8e573c3c51db43466
