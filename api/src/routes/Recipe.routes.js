const { Router } = require('express')

const RecipeController = require('../controllers/recipe-controllers/Recipe.controller')

const router = Router()

// recipes
// recipes/?name=''
router.get('/', RecipeController.readRecipes)

// recipe/idRecipe
router.get('/:idRecipe', RecipeController.readRecipeByID)

module.exports = router