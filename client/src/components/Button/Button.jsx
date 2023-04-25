import React from 'react'

import styles from './Button.module.css'

export default function Button ({ textButton }) {
  return (
    <a href='#inicio' className={styles.btn}>{ textButton }</a>
  )
}