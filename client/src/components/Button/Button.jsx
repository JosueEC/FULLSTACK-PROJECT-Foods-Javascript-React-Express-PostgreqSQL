import React from 'react'

import styles from './Button.module.css'

export default function Button ({ textButton }) {
  return (
    <button className={styles.btn}>{ textButton }</button>
  )
}