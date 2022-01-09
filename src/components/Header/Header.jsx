import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.nav_content}>
          <h5>new product</h5>
          <h2>XX99 MARKII HEADPHONES</h2>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button>see product</button>
        </div>
      </header>
    </>
  );
};

export default Header;
