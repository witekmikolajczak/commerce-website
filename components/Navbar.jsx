import React from 'react'
import Link from 'next/link'

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
                <Link href="/signIn">
                    Sign in
                </Link>
                
            </li>
        </ul>
    </div>
  )
}
