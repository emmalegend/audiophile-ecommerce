import React from 'react'
import styles from './Collections.module.css'
import { ReactComponent as ArrowRight } from "../../assets/shared/desktop/icon-arrow-right.svg";

const Collections = ({src, type}) => {
    return (
      <div className={styles.collections_text}>
        <img src={src} alt="" />
        <div className={styles.collections_text_div}>
          <h3>{type}</h3>
          <button className={styles.collections_text_button}>
            <span>Shop</span>
            <ArrowRight />
          </button>
        </div>
      </div>
    );
}

export default Collections
