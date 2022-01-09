import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Facebook } from "../../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as Instagram } from "../../assets/shared/desktop/icon-instagram.svg";
import { ReactComponent as Twitter } from "../../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer_hr}>
        <hr />
      </div>
      <div className={styles.logo}>
        <a href="#.com">
          <Logo />
        </a>
      </div>
      <div className={styles.nav_links}>
        <ul>
          <li>
            <a href="#.com">Home</a>
          </li>
          <li>
            <a href="#.com">Headphones</a>
          </li>
          <li>
            <a href="#.com">Speakers</a>
          </li>
          <li>
            <a href="#.com">Earphones</a>
          </li>
        </ul>
      </div>
      <div className={styles.text}>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
      </div>
      <div className={styles.icons}>
        <Facebook className={styles.icon} />
        <Twitter className={styles.icon} />
        <Instagram className={styles.icon} />
      </div>
      <div className={styles.copyright}>
        <p>Copyright 2021. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
