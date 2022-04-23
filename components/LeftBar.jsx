import React from 'react'

// STYLES
import styles from '../styles/LeftBar.module.scss'
export const LeftBar = () => {
  return (
    <div className={styles['left-bar']}>
      <h2>Filter products</h2>
      <div className={styles.sort}>
        <select name="price" id="price">
          <option value="">lowest</option>
          <option value="">highest</option>
        </select>
      </div>
      <div className={styles.checkboxs}>
        <ul>
          
          <li>T-shirts
            <input type='checkbox'/>
          </li>
          <li>Boots
            <input type='checkbox'/>
          </li>  
          <li>Jackets
            <input type='checkbox'/>
          </li>
          <li>Pants
            <input type='checkbox'/>
          </li>
          <li>
            <button>Submit</button>
          </li>
        </ul>
      </div>
      
    </div>
  )
}
