import { BASE_URL } from '../utilities/URL-paths'

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPES_QUERY = 'GET_RECIPES_QUERY';
export const POST_RECIPE = 'POST_RECIPE';

const getRecipes = () => {
  const URL = `${BASE_URL}/recipes`

  return function (dispatch) {
    fetch(URL)
      .then((response) => response.json())
      .then((results) => {
        dispatch({ type: GET_RECIPES, payload: results.data})
      })
  }
}

const getRecipesQuery = (query) => {
  const URL = `${BASE_URL}/recipes?name=${query}`;

  return function (dispatch) {
    fetch(URL)
      .then((response) => response.json())
      .then((results) => {
        dispatch({ type: GET_RECIPES_QUERY, payload: results.data});
      })
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
        if(result.status === 'OK') console.log('Action: ', result.data)
      })
  }
}

export {
  getRecipes,
  getRecipesQuery,
  postRecipe
}