import React from 'react'
import Button from '../../components/Button/Button'

import logoInicio from './assets/logo-inicio.png'
import styles from './Home.module.css'

export default function Home () {
  return (
    <section className={styles.inicio} id='inicio'>
      <div className={styles.content}>
        <h3>WHAT TO COOK</h3>
        <span>all your food. one place.</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae eum necessitatibus expedita fugit atque, ut, esse non quaerat cum architecto exercitationem a eos adipisci doloribus velit temporibus nisi mollitia delectus. </p>
        <Button />
      </div>
      <div className={styles.image}>
        <img src={logoInicio} alt='Fondo de Inicio'/>
      </div>
    </section>
  )
}