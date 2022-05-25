import React, { useState } from "react";

// styles
import styles from "./Product.module.scss";
export const Product = (props) => {
  return (
    <div className={`${props.className} ${styles.product}`}>
      <div className={styles.image}></div>
      <div className={styles.details}>
        <h4>T-shirt</h4>
        <p>90$</p>
      </div>
    </div>
  );
};
