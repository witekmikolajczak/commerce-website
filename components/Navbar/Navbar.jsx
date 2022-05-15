import React from "react";
import Link from "next/link";

// styles
import styles from "./Navbar.module.scss";

// icons
export const Navbar = (props) => {
  return (
    <div className={`${styles.navbar} ${props.className}`}>
      <Link href="/">
        <h1>Ecommerce</h1>
      </Link>

      <ul>
        <Link href="/shop/shop">
          <li>Shop</li>
        </Link>

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
            <img src="icons/cart.svg" alt="" class="filter" />
          </li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};
