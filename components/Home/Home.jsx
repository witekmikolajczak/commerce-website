import React from "react";

// styles
import styles from "./home.module.scss";

export const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Better clothing for the planet</h1>
        <p>
          Create screens directly in Method or add your images from Sketch or
          Figma. You can even sync designs from your cloud storage!
        </p>
        <div className={styles.button}>
          <p>Shop All</p>
        </div>
      </div>

      <div className={styles.image}></div>

      <div className={styles.ads}>
        <img src="images/ads.svg" />
      </div>
    </main>
  );
};
