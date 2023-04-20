import React from 'react'

import styles from './SearchBar.module.css'
import Button from '../Button/Button'

export default function SearchBar () {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchContainer}>
        <input type='search' className={styles.searchInput} placeholder='Search recipe name here' />
        <Button />
      </div>
      <div className={styles.buttons}>
        <button className={styles.buttonValue}>All Recipes</button>
        <button className={styles.buttonValue}>Vegan</button>
        <button className={styles.buttonValue}>Ketogenic</button>
        <button className={styles.buttonValue}>Vegetarian</button>
        <button className={styles.buttonValue}>Primal</button>
      </div>
    </div>
  )
}