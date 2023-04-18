import React from 'react'
import Button from '../../components/Button/Button'

import styles from './Contact.module.css'
import imgContact from './assets/foto-contact.png'

export default function Contact () {
  return (
    <section className={styles.contactos} id='contactos'>
      <div className={styles.image}>
        <img src={imgContact} alt='Contacto'/>
      </div>
      <form action=''>
        <h1 className={styles.heading}>contact</h1>
        <div className={styles.inputcaja}>
          <input type='text' required/>
          <label htmlFor=''>name</label>
        </div>
        <div className={styles.inputcaja}>
          <input type='email' required/>
          <label htmlFor=''>email</label>
        </div>
        <div className={styles.inputcaja}>
          <textarea required name='' id='' cols={30} rows={10}></textarea>
          <label htmlFor=''>message</label>
        </div>
        <Button />
      </form>
    </section>
  )
}