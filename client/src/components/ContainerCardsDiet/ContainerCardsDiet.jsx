import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../../redux/actions'

import CardDiet from '../CardDiet/CardDiet'

import styles from './ContainerCardsDiet.module.css'

export default function ContainerCardsDiet () {
  const recipes = useSelector(state => state.recipes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecipes())
  }, [])

  return (
    <section className={styles.detalles} id='detalles'>
      <h1 className={styles.heading}>RECIPES</h1>
      <div className={styles.cajaContenedor}>
      {
        recipes.map(({ id, title, image, healthScore, diets, preparationMinutes, servings }) => {
          return <CardDiet 
            key={id}
            id={id}
            title={title}
            image={image}
            healthScore={healthScore}
            diets={diets}
            preparationMinutes={preparationMinutes}
            servings={servings}
          />
        })
      }
      </div>
    </section>
  )
}