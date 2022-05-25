import React from "react";
import Link from "next/link";
import Image from "next/image";
//icons
import search from "/public/icons/search.svg";
import cart from "/public/icons/cart.svg";
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
          <Image src={search} width={16} height={17} alt="serach" />
          Search
        </li>
      </ul>
      <div className={styles.user}>
        <ul>
          <li>
            <Image
              src={cart}
              width={19}
              height={22}
              alt="cart"
              className="filter"
            />
          </li>
          <Link href="/login/login">
            <li>Login</li>
          </Link>
          <Link href="/register/register">
            <li>Register</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
