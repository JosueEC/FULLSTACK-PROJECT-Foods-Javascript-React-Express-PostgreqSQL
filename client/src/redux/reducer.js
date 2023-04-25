import { FILTER_RECIPE_DIET, GET_RECIPES, GET_RECIPES_QUERY } from "./actions";

const initialState = {
  recipes : [],
  auxRecipes: []
}

const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        auxRecipes: action.payload
      }
    case GET_RECIPES_QUERY:
      return {
        ...state,
        recipes: action.payload,
        auxRecipes: action.payload
      }
    case FILTER_RECIPE_DIET:
      return {
        ...state,
        recipes: state.auxRecipes.filter(recipes => {
          return recipes.diets.includes(action.payload)
        })
      }
    default:
      return {
        ...state
      }
  }
}

export default rootReducer