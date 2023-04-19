import { GET_RECIPES } from "./actions";

const initialState = {
  recipes : []
}

const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      console.log('reducer: ', action.payload)
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