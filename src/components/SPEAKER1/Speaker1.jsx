import React from 'react';
import styles from './Speaker1.module.css'
import speaker from '../../assets/home/desktop/image-speaker-zx9.png'

const Speaker1 = () => {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.container_image}>
            <img src={speaker} alt="speaker" />
          </div>
          <div className={styles.container_text}>
            <h2>zx9 speaker</h2>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound!!!!!
            </p>
            <button>see product</button>
          </div>
        </div>
        <div className={styles.container_second}>
          <div className={styles.container_second_text}>
            <h2>ZX7 SPEAKER</h2>
            <button>see product</button>
          </div>
        </div>
        <div className={styles.container_third}>
          <div className={styles.container_third_image}></div>
          <div className={styles.container_third_text}>
            <h2>YX1 EARPHONES</h2>
            <button>see product</button>
          </div>
        </div>
        
      </>
    );
}

export default Speaker1
