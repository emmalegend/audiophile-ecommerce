import React from "react";
import styles from "./Headphones.module.css";
import Button from "../../components/Button/Button";
import Collections from "../../components/Collections/Collections";
import BestGear from "../../components/BestGear/BestGear";

const Headphones = () => {
  return (
    <main>
      <div className={styles.item_header}>
        <h2>Headphones</h2>
      </div>
      <div className={styles.item_container}>
        <div className={styles.item_container_image}>
          <div className={styles.item_container_img} />
        </div>
        <div className={styles.item_container_text}>
          <p>New product</p>
          <h2>
            xx99 markII <br />
            Headphones
          </h2>
          <h4>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </h4>
          <Button label="see product" />
        </div>
      </div>
      <div className={styles.item_container2}>
        <div className={styles.item_container_text2}>
          <p>New product</p>
          <h2>
            xx99 markI
            <br />
            Headphones
          </h2>
          <h4>
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </h4>
          <Button label="see product" />
        </div>
        <div className={styles.item_container_image}>
          <div className={styles.item_container_img2} />
        </div>
      </div>
      <div className={styles.item_container}>
        <div className={styles.item_container_image}>
          <div className={styles.item_container_img3} />
        </div>
        <div className={styles.item_container_text}>
          <p>New product</p>
          <h2>
            xx99 markII <br />
            Headphones
          </h2>
          <h4>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
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
};

export default Headphones;
