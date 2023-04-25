import { BASE_URL } from '../utilities/URL-paths'

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPES_QUERY = 'GET_RECIPES_QUERY';
export const POST_RECIPE = 'POST_RECIPE';
export const FILTER_RECIPE_DIET = 'FILTER_RECIPE_DIET'

const getRecipes = () => {
  const URL = `${BASE_URL}/recipes/addInformation`

  return function (dispatch) {
    fetch(URL)
      .then((response) => response.json())
      .then((results) => {
        console.log('fetch-all-info-recipes')
        dispatch({ type: GET_RECIPES, payload: results.data})
      })
  }
}

const getRecipesQuery = (query) => {
  const URL = `${BASE_URL}/recipes/addInformation?name=${query}`;

  return function (dispatch) {
    fetch(URL)
      .then((response) => response.json())
      .then((results) => {
        console.log('fetch-all-info-recipes-query')
        dispatch({ type: GET_RECIPES_QUERY, payload: results.data});
      })
  }
}

const filterRecipesDiet = (diet) => {
  return function (dispatch) {
    console.log(`filter-recipes-${diet}`)
    dispatch({ type: FILTER_RECIPE_DIET, payload: diet })
  }
}

const postRecipe = (dataRecipe) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataRecipe)
  };

  return function (dispatch) {
    fetch(`${BASE_URL}/recipes`, options)
      .then((response) => response.json())
      .then((result) => {
        if(result.status === 'OK') console.log('fetch-post-recipe')
      })
  }
}

export {
  getRecipes,
  getRecipesQuery,
  postRecipe,
  filterRecipesDiet
}