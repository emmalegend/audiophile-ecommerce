import React from 'react'
import styles from './Productdetail.module.css'
import Button from '../../components/Button/Button';
const Productdetail = () => {
    return (
      <main>
        <div>
          <p>Go back</p>
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
            <div>
<div>
    <input type="number" value="1"/>
</div>
            <Button label="see product" />
            </div>
          </div>
        </div>
      </main>
    );
}

export default Productdetail
