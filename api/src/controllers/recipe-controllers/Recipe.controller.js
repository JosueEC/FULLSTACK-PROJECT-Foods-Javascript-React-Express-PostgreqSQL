const readRecipeID = require('./services/read-recipe-ID')
const readAllRecipes = require('./services/read-all-recipes')
const readRecipesQuery = require('./services/read-recipes-query')

// http://localhost:3001/recipes --> ten recipes
// http://localhost:3001/recipes?name=pasta --> ten recipes by name
const readRecipes = async (req, res) => {
  try {
    const { name } = req.query

    const recipes = (name)
      ? await readRecipesQuery(name)
      : await readAllRecipes()

    res.status(200).json(recipes)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// http://localhost:3001/recipes/715497 --> Recipe info by ID
const readRecipeByID = async (req, res) => {
  try {
    const { idRecipe } = req.params

    const recipe = await readRecipeID(idRecipe)
    res.status(200).json(recipe)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  readRecipeByID,
  readRecipes
}
