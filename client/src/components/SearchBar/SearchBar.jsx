import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipesQuery } from '../../redux/actions'

import styles from './SearchBar.module.css'

export default function SearchBar () {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  function handleChange (event) {
    const textQuery = event.target.value;
    setQuery(textQuery);
  }

  function handleClick (event) {
    console.log('Target: ', event.target.name)
    dispatch(getRecipesQuery(query));
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchContainer}>
        <input type='search' className={styles.searchInput} placeholder='Search recipe name here' onChange={ handleChange } />
        <button onClick={ handleClick } name='btnSearch' className={styles.btn}>Search</button>
      </div>
      <div className={styles.buttons}>
        <button className={styles.buttonValue} name='btnAllRecipes'>All Recipes</button>
        <button className={styles.buttonValue} name='btnVegan'>Vegan</button>
        <button className={styles.buttonValue} name='btnKetogenic'>Ketogenic</button>
        <button className={styles.buttonValue} name='btnVegetarian'>Vegetarian</button>
        <button className={styles.buttonValue} name='btnPrimal'>Primal</button>
      </div>
    </div>
  )
}