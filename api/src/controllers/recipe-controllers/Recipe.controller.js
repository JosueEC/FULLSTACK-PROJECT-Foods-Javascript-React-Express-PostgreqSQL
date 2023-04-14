const readRecipeID = require('./services/read-recipe-ID')
const readAllRecipes = require('./services/read-all-recipes')
const readRecipesQuery = require('./services/read-recipes-query')
const readRecipesAllInfo = require('./services/read-recipes-all-info')
const createRecipeInDatabase = require('./services/create-recipe-DB')

// (GET)
// (ALL) http://localhost:3001/recipes --> 100 recipes general info
// (QUERY) http://localhost:3001/recipes?name=pasta --> 100 recipes by name general info
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

// (GET) http://localhost:3001/recipes/addInformation --> 100 recipes all info
const readRecipesAddInfo = async (req, res) => {
  try {
    const recipes = await readRecipesAllInfo()

    res.status(200).json(recipes)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// (GET) http://localhost:3001/recipes/715497 --> Recipe by ID all info
const readRecipeByID = async (req, res) => {
  try {
    const { idRecipe } = req.params

    const recipe = await readRecipeID(idRecipe)
    res.status(200).json(recipe)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// (POST) http://localhost:3001/recipes
const createRecipe = async (req, res) => {
  try {
    const {
      title,
      image,
      summary,
      healthScore,
      instructions,
      ingredients,
      preparationMinutes,
      servings,
      creditsText,
      likes,
      diets
    } = req.body
    const newDataRecipe = {
      title,
      image,
      summary,
      healthScore,
      instructions,
      ingredients,
      preparationMinutes,
      servings,
      creditsText,
      likes,
      diets
    }
    const createdRecipe = await createRecipeInDatabase(newDataRecipe)
    res.status(200).json(createdRecipe)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  readRecipeByID,
  readRecipesAddInfo,
  readRecipes,
  createRecipe
}
