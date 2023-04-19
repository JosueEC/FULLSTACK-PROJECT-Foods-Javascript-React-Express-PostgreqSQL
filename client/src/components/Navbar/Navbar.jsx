import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

import * as route from '../../utilities/routePages'

export default function Navbar () {
  return (
    <header>
      <Link to={route.pathHome} className={styles.logo}>
        <span>WHAT</span> To Cook
      </Link>
      
      <input type='checkbox' id='menu-bar' />
      <label htmlFor='menu-bar' className='fa fa-bars'></label>

      <nav className={styles.navbar}>
        <Link to={route.pathHome} className={styles.link} >home</Link>
        <Link to={route.pathRecipes} className={styles.link} >Recipes</Link>
        <Link to={route.pathAbout} className={styles.link} >About Us</Link>
        <Link to={route.pathContact} className={styles.link} >Contact</Link>
      </nav>
    </header>
  )
}