import React from 'react'

// STYLES
import styles from '../styles/components/Box.module.scss'
export const Box = (props) => {
  return (
    <div className={`${styles.content} ${props.className}`}>{props.children}</div>
  )
}
