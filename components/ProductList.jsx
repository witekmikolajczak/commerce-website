import React from 'react'

// MY COMPONENTS
import { Product } from './Product'
// STYLES
import styles from "../styles/ProductList.module.scss"
export const ProductList = () => {
  return (
      <div className="main">
        <div className={styles.products}>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
        <div className={styles.products}>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
      </div>
    
  )
}
