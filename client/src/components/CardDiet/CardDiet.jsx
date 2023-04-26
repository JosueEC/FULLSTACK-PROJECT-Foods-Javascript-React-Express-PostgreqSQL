import React from 'react';

import { Link } from 'react-router-dom';

import styles from './CardDiet.module.css'

export default function CardDiet ({ id, title, image, diets }) {
  return (
    <Link to={`/details/${id}`}>
      <div className={styles.caja} key={ id }>
        <div className={styles.containerImage}>
          <img src={ image } alt='food' />
        </div>
        <h3>{ title }</h3>
        {
          diets && <p><i className='fa-solid fa-utensils'></i> Diets: { diets.join(', ') }</p>
        }
        {/* <Button textButton='More Details' /> */}
      </div>
    </Link>
  )
}