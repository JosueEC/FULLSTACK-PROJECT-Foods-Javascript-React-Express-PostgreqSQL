import React from 'react'
import Button from '../Button/Button'

// import imgFood from './assets/gluten-free.jpg'
import styles from './CardDiet.module.css'

export default function CardDiet ({ id, title, image, healthScore, diets, preparationMinutes, servings }) {
  return (
    <div className={styles.caja} key={id}>
      <img src={image} alt='food' />
      <h3>{title}</h3>
      <p>Health Score: {healthScore}</p>
      <p>Preparation Minutes: {preparationMinutes}</p>
      <p>Servings: {servings}</p>
      <p>Diets: {diets.join(', ')}</p>
      <Button />
    </div>
  )
}