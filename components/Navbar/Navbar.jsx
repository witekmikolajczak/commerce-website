import React from "react";

// styles
import styles from "./Navbar.module.scss";

// icons
export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>Ecommerce</h1>
      <ul>
        <li>Shop</li>
        <li>Stories</li>
        <li>About</li>
        <li>
          <img src="icons/search.svg" />
          Search
        </li>
      </ul>
      <div className={styles.user}>
        <ul>
          <li>
            <img src="icons/cart.svg" alt="" />
          </li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};
