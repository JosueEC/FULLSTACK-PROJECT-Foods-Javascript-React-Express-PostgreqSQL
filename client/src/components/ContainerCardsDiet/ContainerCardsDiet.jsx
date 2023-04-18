import React from 'react'
import CardDiet from '../CardDiet/CardDiet'

import styles from './ContainerCardsDiet.module.css'

export default function ContainerCardsDiet () {
  return (
    <section className={styles.detalles} id='detalles'>
      <h1 className='heading'>RECIPES</h1>
      <div className={styles.cajaContenedor}>
        <CardDiet />
        <CardDiet />
        <CardDiet />
        <CardDiet />
      </div>
    </section>
  )
}