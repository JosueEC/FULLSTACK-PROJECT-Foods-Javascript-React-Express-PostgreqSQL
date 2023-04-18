import styles from './Navbar.module.css'
import React from 'react'

export default function Navbar () {
  return (
    <header>
      <a href='#inicio' className={styles.logo}>
        <span>WHAT</span> To Cook
      </a>
      
      <input type='checkbox' id='menu-bar' />
      <label htmlFor='menu-bar' className='fa fa-bars'></label>

      <nav className={styles.navbar}>
        <a href='#inicio'>home</a>
        <a href='#detalles'>details</a>
        <a href='#acerca_de'>about us</a>
        <a href='#opiniones'>opinions</a>
        <a href='#precios'>prices</a>
        <a href='#contactos'>contact</a>
      </nav>
    </header>
  )
}