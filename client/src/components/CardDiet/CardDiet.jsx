import React from 'react';
import Button from '../Button/Button';

import { Link } from 'react-router-dom';

import styles from './CardDiet.module.css'

export default function CardDiet ({ id, title, image, creditsText }) {
  return (
    <Link to={`/details/${id}`}>
      <div className={styles.caja} key={id}>
        <div className={styles.containerImage}>
          <img src={image} alt='food' />
        </div>
        <h3>{title}</h3>
        {
          creditsText && <p>Credits Text: { creditsText }</p>
        }
        <Button />
      </div>
    </Link>
  )
}