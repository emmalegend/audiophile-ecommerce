import React from "react";
import styles from "./Collections.module.css";
import { ReactComponent as ArrowRight } from "../../assets/shared/desktop/icon-arrow-right.svg";
import headphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";

const Collection = ({ src, type }) => {
  return (
    <div className={styles.collections_text}>
      <img src={src} alt={type} />
      <div className={styles.collections_text_div}>
        <h3>{type}</h3>
        <button className={styles.collections_text_button}>
          <a href="l.com">Shop</a>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

const Collections = () => {
  return (
    <section className={styles.speaker_container}>
      <Collection src={headphones} type="Headphones" />
      <Collection src={speakers} type="Speakers" />
      <Collection src={earphones} type="Earphones" />
    </section>
  );
};

export default Collections;
