import React from "react";
import Collections from "../Collections/Collections";
import headphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <NavBar />
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
      <section className={styles.speaker_container}>
        <Collections src={headphones} type="Headphones" />
        <Collections src={speakers} type="Speakers" />
        <Collections src={earphones} type="Earphones" />
      </section>
    </>
  );
};

export default Header;
