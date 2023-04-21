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
        console.log('Recipe Details: ', results.data)
        setRecipe(results.data)
      })
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
                  <span>Summary</span>
                  <p dangerouslySetInnerHTML={{__html: recipe.summary}} />
                </div>
              </div>
              <div className={styles.basicInfo}>
                <span>{recipe.title}</span>
              </div>
              <div className={styles.description}>
                <ul className={styles.features}>
                  <li><i className='fa-solid fa-circle-check'></i>Health Score: {recipe.healthScore}</li>
                  <li><i className='fa-solid fa-circle-check'></i>Diets: {recipe.diets.join(', ')}</li>
                  <li><i className='fa-solid fa-circle-check'></i>Preparation Minutes: {recipe.preparationMinutes}</li>
                  <li><i className='fa-solid fa-circle-check'></i>Servings: {recipe.servings}</li>
                  <li><i className='fa-solid fa-circle-check'></i>Credits Text: {recipe.creditsText}</li>
                </ul>
                <p dangerouslySetInnerHTML={{__html: recipe.instructions}} />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus temporibus corporis repudiandae, consectetur nostrum nisi commodi placeat rerum molestias numquam nihil accusantium deleniti! Enim, nesciunt a quis amet hic officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nemo accusantium tempora facere doloremque cum iusto, ut neque, fuga omnis libero laborum ullam. At dolorum qui atque labore illo dignissimos.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus temporibus corporis repudiandae, consectetur nostrum nisi commodi placeat rerum molestias numquam nihil accusantium deleniti! Enim, nesciunt a quis amet hic officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nemo accusantium tempora facere doloremque cum iusto, ut neque, fuga omnis libero laborum ullam. At dolorum qui atque labore illo dignissimos.</p>
              </div>
            </div>
          ) : (
            <h3>Loading...</h3>
          )
      }
    </section>
  )
}