import React from "react";
import styles from "./Checkout.module.css";

const Checkout = () => {
  return (
    <div className={styles.checkout_form}>
      <h2>Checkout</h2>
      <h3>Billing Details</h3>
      <div className={styles.checkout_form_billing}>
        <div className={styles.checkout_form_input}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Alexei Ward" />
        </div>
        <div className={styles.checkout_form_input}>
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" placeholder="alexei@gmail.com" />
        </div>
        <div className={styles.checkout_form_input}>
          <label htmlFor="number">Phone Number</label>
          <input type="text" id="number" placeholder="+1 202-555-0136" />
        </div>
      </div>
      <h3>Shipping info</h3>
      <div className={styles.checkout_form_billing}>
        <div className={styles.checkout_form_input_full}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="1137 Williams Avenue" />
        </div>
        <div className={styles.checkout_form_input}>
          <label htmlFor="zip">Zip Code</label>
          <input type="text" id="zip" placeholder="10001" />
        </div>
        <div className={styles.checkout_form_input}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" placeholder="New York" />
        </div>
        <div className={styles.checkout_form_input}>
          <label htmlFor="country">Country</label>
          <input type="text" id="country" placeholder="Country" />
        </div>
      </div>
      <h3>Payment Details</h3>
      <div className={styles.checkout_form_billing}>
        <div className={styles.checkout_form_input}>
          <h4>Payment Method</h4>
        </div>
        <div className={styles.checkout_form_input}>
          <button className={styles.checkbox_button}>
            <input type="radio" />
            <h3>e-Money</h3>
          </button>
        </div>
        <div className={styles.checkout_form_input}>
          <button className={styles.checkbox_button}>
            <input type="radio" />
            <h3>Cash on Delivery</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
