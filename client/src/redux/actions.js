export const GET_RECIPES = 'GET_RECIPES'

const getRecipes = () => {
  const BASE_URL = 'http://localhost:3001/recipes/addInformation'

  return function (dispatch) {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        dispatch({ type: GET_RECIPES, payload: data})
      })
  }
}

export {
  getRecipes
}