import React from 'react'
import Button from '../Button/Button'

import imgFood from './assets/gluten-free.jpg'
import styles from './CardDiet.module.css'

export default function CardDiet () {
  return (
    <div className={styles.caja}>
      <img src={imgFood} alt='Gluten free food' />
      <h3>Vegan</h3>
      <p>No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.</p>
      <Button />
    </div>
  )
}