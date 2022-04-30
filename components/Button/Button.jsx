import React from 'react'

import styles from './Button.module.scss'

export const Button = (props) => {
  return (
    <button onClick={props.onClick} type={props.type} className={`${styles.button} ${props.className}`}>{props.children}</button>
  )
}
