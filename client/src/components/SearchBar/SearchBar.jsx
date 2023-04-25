import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipesQuery, getRecipes, filterRecipesDiet } from '../../redux/actions'

import styles from './SearchBar.module.css'

export default function SearchBar () {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  function handleChange (event) {
    const textQuery = event.target.value;
    setQuery(textQuery);
  }

  function handleClick (event) {
    switch (event.target.name) {
      case 'btnSearch':
        dispatch(getRecipesQuery(query));
        break
      case 'btnGlutenFree':
        dispatch(filterRecipesDiet('gluten free'))
        break
      case 'btnKetogenic':
        dispatch(filterRecipesDiet('ketogenic'))
        break
      case 'btnVegetarian':
        dispatch(filterRecipesDiet('vegetarian'))
        break
      case 'btnLactoOvoVegetarian':
        dispatch(filterRecipesDiet('lacto ovo vegetarian'))
        break
      case 'btnVegan':
        dispatch(filterRecipesDiet('vegan'))
        break
      case 'btnPescatarian':
        dispatch(filterRecipesDiet('pescatarian'))
        break
      case 'btnPaleo':
        dispatch(filterRecipesDiet('paleolithic'))
        break
      case 'btnPrimal':
        dispatch(filterRecipesDiet('primal'))
        break
      case 'btnLowFoodmap':
        dispatch(filterRecipesDiet('fodmap friendly'))
        break
      case 'btnWhole':
        dispatch(filterRecipesDiet('whole 30'))
        break
      default:
        dispatch(getRecipes())
        break
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchContainer}>
        <input type='search' className={styles.searchInput} placeholder='Search recipe name here' onChange={ handleChange } />
        <button onClick={ handleClick } name='btnSearch' className={styles.btn}>Search</button>
      </div>
      <div className={styles.buttons}>
        <button className={styles.buttonValue} onClick={handleClick} name='btnAllRecipes'>All Recipes</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnGlutenFree'>Gluten Free</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnKetogenic'>Ketogenic</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnVegetarian'>Vegetarian</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnLactoOvoVegetarian'>Lacto-ovo-vegetarian</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnVegan'>Vegan</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnPescatarian'>Pescatarian</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnPaleo'>Paleo</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnPrimal'>Primal</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnLowFoodmap'>Low food map</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnWhole'>Whole30</button>
      </div>
    </div>
  )
}