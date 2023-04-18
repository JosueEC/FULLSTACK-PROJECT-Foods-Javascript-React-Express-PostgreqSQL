import React from 'react'

import styles from './Footer.module.css'

export default function Footer () {
  return (
    <div className={styles.footer}>
      <div className={styles.cajaContenedor}>
        <div className={styles.caja}>
          <h3>noticias e informacion</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis impedit quia nam esse, deleniti et dolorem libero qui exercitationem autem officia architecto minus. Aliquid exercitationem, quisquam placeat enim obcaecati vel.</p>
        </div>
        <div className={styles.caja}>
          <h3>buscanos en</h3>
          <a href='#inicio'>facebook</a>
          <a href='#inicio'>instagram</a>
          <a href='#inicio'>pinterest</a>
          <a href='#inicio'>twitter</a>
        </div>
        <div className={styles.caja}>
          <h3>mas informacion</h3>
          <div className={styles.info}>
            <i className='fas fa-phone' />
            <p>123-456-789<br/>789-444-521</p>
          </div>
          <div className={styles.info}>
            <i className='fas fa-envelope' />
            <p>josueev.cruz@gmail.com<br/>josuecruzvideos@gmail.com</p>
          </div>
        </div>
      </div>
      <h1 className={styles.creditos}>
        &copy, copyrigth @ 2023 Josue Evangelista Cruz
      </h1>
    </div>
  )
}