import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipesQuery, getRecipes } from '../../redux/actions'

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
      default:
        dispatch(getRecipes())
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
        <button className={styles.buttonValue} onClick={handleClick} name='btnLactoVegetarian'>Lacto-vegetarian</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnOvoVegetarian'>Ovo-vegetarian</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnVegan'>Vegan</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnPescetarian'>Pescetarian</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnPaleo'>Paleo</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnPrimal'>Primal</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnLowFoodmap'>Low food map</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnWhole'>Whole30</button>
      </div>
    </div>
  )
}