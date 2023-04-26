import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { BASE_URL } from '../../utilities/URL-paths';

import styles from './Details.module.css'

export default function Details () {
  const [recipe, setRecipe] = useState();
  const { recipeID } = useParams();

  useEffect(() => {
    fetch(`${BASE_URL}/recipes/${recipeID}`)
      .then((response) => response.json())
      .then((results) => {
        console.log('fetch-details-recipe')
        setRecipe(results.data)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className={styles.container}>
      {
        recipe
          ? (
            <div className={styles.box}>
              <div className={styles.images}>
                <div className={styles.imgHolder}>
                  <img src={recipe.image} alt='recipe'/>
                </div>
                <div className={styles.containerSummary}>
                  <span className={styles.heading}>Summary</span>
                  <p dangerouslySetInnerHTML={{__html: recipe.summary}} />
                </div>
              </div>
              <div className={styles.basicInfo}>
                <span className={styles.heading}>{recipe.title}</span>
              </div>
              <div className={styles.description}>
                <ul className={styles.features}>
                  <li><i className='fa-solid fa-circle-check'></i>Health Score: {recipe.healthScore}</li>
                  <li><i className='fa-solid fa-circle-check'></i>Diets: {recipe.diets.join(', ')}</li>
                  <li><i className='fa-solid fa-circle-check'></i>Preparation Minutes: {recipe.preparationMinutes}</li>
                  <li><i className='fa-solid fa-circle-check'></i>Servings: {recipe.servings}</li>
                  <li><i className='fa-solid fa-circle-check'></i>Credits: {recipe.creditsText}</li>
                </ul>
                <span className={styles.heading}>Instructions:</span>
                <p dangerouslySetInnerHTML={{__html: recipe.instructions}} />
              </div>
            </div>
          ) : (
            <h3>Loading...</h3>
          )
      }
    </section>
  )
}