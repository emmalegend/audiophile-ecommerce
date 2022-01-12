import React from 'react'
import styles from './Speaker.module.css'
import Button from "../../components/Button/Button";
import Collections from "../../components/Collections/Collections";
import BestGear from "../../components/BestGear/BestGear";

const Speakers = () => {
    return (
      <main>
        <div className={styles.item_header}>
          <h2>Speakers</h2>
        </div>
        <div className={styles.item_container}>
          <div className={styles.item_container_image}>
            <div className={styles.item_container_img} />
          </div>
          <div className={styles.item_container_text}>
            <p>New product</p>
            <h2>
              zx9
              <br />
              speakers
            </h2>
            <h4>
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </h4>
            <Button label="see product" />
          </div>
        </div>
        <div className={styles.item_container2}>
          <div className={styles.item_container_text2}>
            <p>New product</p>
            <h2>
              zx7
              <br />
              speakers
            </h2>
            <h4>
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represents the top of the line powered speakers for home or studio
              use.
            </h4>
            <Button label="see product" />
          </div>
          <div className={styles.item_container_image}>
            <div className={styles.item_container_img2} />
          </div>
        </div>

        <div className={styles.addedSection}>
          <Collections />
          <BestGear />
        </div>
      </main>
    );
}

export default Speakers
