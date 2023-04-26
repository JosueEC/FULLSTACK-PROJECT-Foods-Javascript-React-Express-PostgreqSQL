import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../../redux/actions'

import styles from './ContainerCardsDiet.module.css'
import CardDiet from '../CardDiet/CardDiet'
import SearchBar from '../SearchBar/SearchBar'

export default function ContainerCardsDiet () {
  const recipes = useSelector(state => state.recipes)
  const { query, diets } = useSelector(state => state.results)
  const dispatch = useDispatch()

  useEffect(() => {
    if (recipes.length === 0){
      dispatch(getRecipes())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className={styles.detalles} id='detalles'>
      <h1 className={styles.heading}>RECIPES</h1>
      <SearchBar />
      <label className={styles.labelResults}>{ `Results for ${query} - ${diets}` }</label>
      <div className={styles.cajaContenedor}>
      {
        recipes? (
          recipes.map(({ id, title, image, diets, creditsText }) => {
          return <CardDiet 
            key={id}
            id={id}
            title={title}
            image={image}
            diets={diets}
            creditsText={creditsText}
          />
        })
        ): (
          <h2>Loading...</h2>
        )
      }
      </div>
    </section>
  )
}