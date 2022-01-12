import React, { useState } from "react";
import styles from "./Productdetail.module.css";
import Button from "../../components/Button/Button";
import img1 from "../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";

const Productdetail = () => {
  const [qty, setqty] = useState(1);
  const reduceQty = () => {
    if (qty === 1) return;
    setqty(qty-1);
  };
  const increaseQty = () => {
    setqty(qty+1);
  };

  return (
    <main>
      <div>
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
    </main>
  );
};

export default Productdetail;
