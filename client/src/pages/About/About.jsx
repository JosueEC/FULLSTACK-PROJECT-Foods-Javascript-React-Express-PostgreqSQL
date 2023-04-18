import React from 'react'

import styles from './About.module.css'
import imgAbout from './assets/foto-about.png'

export default function About () {
  return (
    <section className={styles.acercaDe} id='#acercaDe'>
      <h1 className={styles.heading}>about the developer</h1>
      <div className={styles.columna}>
        <div className={styles.image}>
          <img src={imgAbout} alt='Developer' />
        </div>
        <div className={styles.content}>
          <h3>calidad de sonido excepcional</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem ab. Aliquid error distinctio, quisquam a omnis alias aliquam, consequuntur vel modi itaque, facilis perferendis quasi porro velit similique aperiam!</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A velit eaque pariatur quaerat provident, maiores sequi, ratione asperiores quia architecto enim reiciendis impedit excepturi minima repudiandae molestiae sit expedita cupiditate!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit corporis libero aut voluptate, saepe officia, laudantium fugit nemo voluptas, placeat accusamus nesciunt ex animi enim atque repudiandae sit dignissimos inventore.
          </p>
          <div className={styles.buttons}>
            <a href='#inicio' className={styles.btn}><i className='fab fa-google-play'></i> GOOGLE PLAY</a>
            <a href='#inicio' className={styles.btn}><i className='fab fa-apple'></i> APPLE STORE</a>
          </div>
        </div>
      </div>
    </section>
  )
}