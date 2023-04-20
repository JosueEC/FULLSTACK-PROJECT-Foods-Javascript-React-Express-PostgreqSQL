import { GET_RECIPES, GET_RECIPES_QUERY } from "./actions";

const initialState = {
  recipes : []
}

const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        recipes: action.payload
      }
    case GET_RECIPES_QUERY:
      return {
        recipes: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export default rootReducer