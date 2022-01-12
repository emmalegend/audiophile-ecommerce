import React from 'react'
import styles from './Earphones.module.css'
import Button from "../../components/Button/Button";
import Collections from "../../components/Collections/Collections";
import BestGear from "../../components/BestGear/BestGear";

const Earphones = () => {
    return (
      <main>
        <div className={styles.item_header}>
          <h2>Earphones</h2>
        </div>
        <div className={styles.item_container}>
          <div className={styles.item_container_image}>
            <div className={styles.item_container_img} />
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
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </h4>
            <Button label="see product" />
          </div>
        </div>

        <div className={styles.addedSection}>
          <Collections />
          <BestGear />
        </div>
      </main>
    );
}

export default Earphones
