import { FILTER_RECIPE_DIET, GET_RECIPES, GET_RECIPES_QUERY } from "./actions";

const initialState = {
  recipes : [],
  auxRecipes: [],
  results: {
    query: 'All Recipes',
    diets: 'All Diets'
  }
}

const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        auxRecipes: action.payload,
        results: {
          query: 'All Recipes',
          diets: 'All Diets'
        }
      }
    case GET_RECIPES_QUERY:
      return {
        ...state,
        recipes: action.payload.data,
        auxRecipes: action.payload.data,
        results: {
          ...state,
          query: action.payload.query,
          diets: 'All Recipes'
        }
      }
    case FILTER_RECIPE_DIET:
      return {
        ...state,
        recipes: state.auxRecipes.filter(recipes => {
          return recipes.diets.includes(action.payload)
        }),
        results: {
          ...state.results,
          diets: action.payload
        }
      }
    default:
      return {
        ...state
      }
  }
}

export default rootReducer