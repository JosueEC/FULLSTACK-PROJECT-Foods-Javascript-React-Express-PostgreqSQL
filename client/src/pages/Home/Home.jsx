import React from 'react'
import Button from '../../components/Button/Button'

import { Link } from 'react-router-dom'
import { pathRecipes } from '../../utilities/routePages'

import logoInicio from './assets/logo-inicio.png'
import styles from './Home.module.css'

export default function Home () {
  return (
    <section className={styles.inicio} id='inicio'>
      <div className={styles.content}>
        <h3>WHAT TO COOK</h3>
        <span>all your food. one place.</span>
        <p>Explore more than 5,000 recipes of all kinds, search for recipes by name or by type of diet, and even create your own recipes.</p>
        <Link to={pathRecipes}><Button textButton='Lets Start'/></Link>
      </div>
      <div className={styles.image}>
        <img src={logoInicio} alt='Fondo de Inicio'/>
      </div>
    </section>
  )
}