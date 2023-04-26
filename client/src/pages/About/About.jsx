import React from 'react'

import styles from './About.module.css'
import imgAbout from './assets/foto-about.png'

export default function About () {
  return (
    <section className={styles.acercaDe} id='#acercaDe'>
      <h1 className={styles.heading}>About the developer</h1>
      <div className={styles.columna}>
        <div className={styles.image}>
          <img src={imgAbout} alt='Developer' />
        </div>
        <div className={styles.content}>
          <h3>Josue Evangelista Cruz</h3>
          <p>As a backend developer, I specialize in developing applications and solutions. My goal is to develop innovative and scalable solutions that meet user needs and business objectives.</p>
          <p>I am passionate about working in a team and learning from the projects I participate in. I enjoy keeping up with the latest trends and tools in the industry and am always looking for new challenges and opportunities to grow professionally.</p>
          <p>If you are looking for a dedicated, enthusiastic and proactive developer, please do not hesitate to contact me. I'm sure I can make a significant contribution to your development team.</p>
          <div className={styles.buttons}>
            <a href='https://www.linkedin.com/in/josue-evangelista-cruz-213461264/' className={styles.btn} target='_blank' rel='noreferrer'><i className='fa-brands fa-linkedin'></i> LinkedIn</a>
            <a href='https://github.com/JosueEC' className={styles.btn} target='_blank' rel="noreferrer"><i className='fa-brands fa-github'></i> GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}