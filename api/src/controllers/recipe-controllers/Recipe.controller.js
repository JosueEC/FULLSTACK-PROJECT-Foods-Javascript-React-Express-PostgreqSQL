const readRecipeID = require('./services/getRecipeID/read-recipe-ID')
const readAllRecipes = require('./services/read-all-recipes')
const readRecipesQuery = require('./services/read-recipes-query')
const readRecipesAllInfo = require('./services/getAllInfoRecipes/read-recipes')
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

    res.status(200).send({ status: 'OK', data: recipes })
  } catch (error) {
    res.status(400).send({ status: 'FAILED', error: error.message })
  }
}

// (GET) http://localhost:3001/recipes/addInformation --> 100 recipes all info
// (GET) http://localhost:3001/recipes/addInformation?name=pasta --> 100 Recipes all info by Query name
const readRecipesAddInfo = async (req, res) => {
  try {
    const { name } = req.query
    const recipes = (name)
      ? await readRecipesAllInfo('name', name)
      : await readRecipesAllInfo()

    res.status(200).json(recipes)
  } catch (error) {
    res.status(400).send({ status: 'FAILED', error: error.message })
  }
}

// (GET) http://localhost:3001/recipes/715497 --> Recipe by ID all info
const readRecipeByID = async (req, res) => {
  try {
    const { idRecipe } = req.params

    const recipe = await readRecipeID(idRecipe)
    res.status(200).send({ status: 'OK', data: recipe })
  } catch (error) {
    res.status(400).send({ status: 'FAILED', error: error.message })
  }
}

// (POST) http://localhost:3001/recipes -->Create Recipe
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
    res.status(201).send({ status: 'OK', data: createdRecipe })
  } catch (error) {
    res.status(400).send({ status: 'FAILED', error: error.message })
  }
}

module.exports = {
  readRecipeByID,
  readRecipesAddInfo,
  readRecipes,
  createRecipe
}
