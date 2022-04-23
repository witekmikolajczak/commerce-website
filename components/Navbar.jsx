import React from 'react'

// STYLES
import styles from '../styles/Navbar.module.scss'
export const Navbar = ()=> {
  return (
    <div className={styles.navbar}>
        <ul>
            <li>
                Home
            </li>
            <li>
                Cart
            </li>
            <li>
                Profile
            </li>
            <li>
                Sign in
            </li>
        </ul>
    </div>
  )
}
