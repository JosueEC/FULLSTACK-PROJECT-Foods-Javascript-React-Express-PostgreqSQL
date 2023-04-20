import { BASE_URL } from '../utilities/URL-paths'

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPES_QUERY = 'GET_RECIPES_QUERY';

const getRecipes = () => {
  const URL = `${BASE_URL}/recipes`

  return function (dispatch) {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_RECIPES, payload: data})
      })
  }
}

const getRecipesQuery = (query) => {
  const URL = `${BASE_URL}/recipes?name=${query}`;

  return function (dispatch) {
    fetch(URL)
      .then((response) => response.json())
      .then((results) => {
        console.log(results.data);
        // dispatch({ type: GET_RECIPES_QUERY, payload: results.data});
      })
  }
}

export {
  getRecipes,
  getRecipesQuery
}