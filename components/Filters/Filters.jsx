import { style } from "@mui/system";
import React from "react";

//styles
import styles from "./Filters.module.scss";
export const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.header}>
        <h3>Filters</h3>
        <a href="#">Clear filters</a>
      </div>
      <ul>
        <h4>Categories</h4>
        <li>
          <input type="checkbox" />
          <label>Jackets</label>
        </li>
        <li>
          <input type="checkbox" />
          <label>Fleece</label>
        </li>
        <li>
          <input type="checkbox" />
          <label>Sweathshirts & Hoodies</label>
        </li>
        <li>
          <input type="checkbox" />
          <label>Sweaters</label>
        </li>
        <li>
          <input type="checkbox" />
          <label>Shirts</label>
        </li>
        <li>
          <input type="checkbox" />
          <label>T-Shirts</label>
        </li>
        <li>
          <input type="checkbox" />
          <label>Pants & Jeans</label>
        </li>
      </ul>
    </div>
  );
};
