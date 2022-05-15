import React from "react";

// styles
import styles from "./footer.module.scss";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <h1>Sign up for our newsletter</h1>
        <p>
          Be the first to know about our special offers, new product launches,
          and events
        </p>
        <form>
          <input type="text" placeholder="Email Address" />
          <button>Sing Up</button>
        </form>
      </div>
      <div className={styles.shop}>
        <h3>Shop</h3>
        <ul>
          <li>Women's</li>
          <li>Men's</li>
          <li>Kids's</li>
          <li>Shoes's</li>
          <li>Equipment's</li>
          <li>By Activity's</li>
          <li>Gift Cards's</li>
          <li>Sale's</li>
        </ul>
      </div>
      <div className={styles.help}>
        <h3>Help</h3>
        <ul>
          <li>Help Center</li>
          <li>Order Status</li>
          <li>Size Chart</li>
          <li>Returns and Warranty</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className={styles.about}>
        <h3>About</h3>
        <ul>
          <li>About Us</li>
          <li>Responsibility</li>
          <li>Technology and Innovation</li>
          <li>Explore our stories</li>
        </ul>
      </div>
    </footer>
  );
};
