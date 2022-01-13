import React from "react";
import Button from "../Button/Button";
import styles from "./AlsoLike.module.css";
import img1 from "../../assets/product-zx7-speaker/desktop/image-product.jpg";
import img2 from "../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import img3 from "../../assets/product-xx59-headphones/desktop/image-product.jpg";

const AlsoLike = () => {
  return (
    <div className={styles.also_container}>
      <h2>You may also like</h2>
      <div className={styles.also_section}>
        <div className={styles.also_individual}>
          <div className={styles.also_individual_imgcont}>
            <img src={img1} alt="" />
          </div>
          <h5>zx7 speaker</h5>
          <Button label="see product" />
        </div>
        <div className={styles.also_individual}>
          <div className={styles.also_individual_imgcont}>
            <img src={img2} alt="" />
          </div>
          <h5>xx99 mark i</h5>
          <Button label="see product" />
        </div>
        <div className={styles.also_individual}>
          <div className={styles.also_individual_imgcont}>
            <img src={img3} alt="" />
          </div>
          <h5>xx59</h5>
          <Button label="see product" />
        </div>
      </div>
    </div>
  );
};

export default AlsoLike;
