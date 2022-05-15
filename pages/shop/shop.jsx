import React from "react";

import { Navbar } from "../../components/Navbar/Navbar";
import { Filters } from "../../components/Filters/Filters";
import { Product } from "../../components/Product/Product";
//styles
import styles from "./shop.module.scss";
const shop = () => {
  return (
    <>
      <Navbar className={styles.navbar} />

      <div className={styles.header}>
        <h1>Shop Men&apos;s</h1>
        <p>
          Revamp your style with the latest designer trends in men&apos;s
          clothing or achieve a perfectly curated wardrobe thanks to our line-up
          of timeless pieces.
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <Filters />
        </div>
        <div className={styles.main}>
          <div className={styles.buttonContainer}>
            <select value="Sort By: ">
              <option value="popular">Popular</option>
              <option value="new">New</option>
              <option value="old">Old</option>
            </select>
          </div>
          <div className={styles.products}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </>
  );
};

export default shop;
