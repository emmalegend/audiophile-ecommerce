import React, { useState } from "react";
import styles from "./Productdetail.module.css";
import Button from "../../components/Button/Button";
import img1 from "../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import imgGallery1 from "../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg";
import imgGallery2 from "../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import imgGallery3 from "../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg";
import AlsoLike from "../../components/AlsoLike/AlsoLike";
import Collections from "../../components/Collections/Collections";
import BestGear from "../../components/BestGear/BestGear";

const Productdetail = () => {
  const [qty, setqty] = useState(1);
  const reduceQty = () => {
    if (qty === 1) return;
    setqty(qty - 1);
  };
  const increaseQty = () => {
    setqty(qty + 1);
  };

  return (
    <main>
      <div className={styles.goBack}>
        <p>Go back</p>
      </div>
      <div className={styles.item_container}>
        <div className={styles.item_container_image}>
          <img src={img1} alt="" className={styles.item_containerImg} />
        </div>
        <div className={styles.item_container_text}>
          <p>New product</p>
          <h2>
            yx1 wireless
            <br />
            earphones
          </h2>
          <h4>
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </h4>
          <div className={styles.product_amount}>
            $ <span>400</span>
          </div>
          <div className={styles.product_atk}>
            <div className={styles.productdetail_input}>
              <button onClick={reduceQty}>-</button>
              <span className={styles.productdetail_qty}>{qty}</span>
              <button onClick={increaseQty}>+</button>
            </div>
            <Button label="add to cart" />
          </div>
        </div>
      </div>
      <div className={styles.productdetail_detail}>
        <div className={styles.productdetail_detail1}>
          <h2>Features</h2>
          <p>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
            <br />
            <br />
            <br />
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>
        <div className={styles.productdetail_detail2}>
          <h2>In the box</h2>
          <div>
            <div className={styles.productdetail_content}>
              <span>1x</span>
              <p>Headphone Unit</p>
            </div>
            <div className={styles.productdetail_content}>
              <span>2x</span>
              <p>Earcups Replacement</p>
            </div>
            <div className={styles.productdetail_content}>
              <span>1x</span>
              <p>User Manual</p>
            </div>
            <div className={styles.productdetail_content}>
              <span>1x</span>
              <p>3.5mm 5mm Audio cable</p>
            </div>
            <div className={styles.productdetail_content}>
              <span>1x</span>
              <p>Travel Bag</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productdetail_gallery}>
        <img
          src={imgGallery1}
          alt=""
          className={styles.productdetail_gallery_img1}
        />
        <img
          src={imgGallery2}
          alt=""
          className={styles.productdetail_gallery_img2}
        />
        <img
          src={imgGallery3}
          alt=""
          className={styles.productdetail_gallery_img3}
        />
      </div>
      <AlsoLike />
      <Collections />
      <BestGear />
    </main>
  );
};

export default Productdetail;
