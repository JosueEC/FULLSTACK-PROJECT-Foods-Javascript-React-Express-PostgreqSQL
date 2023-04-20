const { Router } = require('express')

const RecipeController = require('../controllers/recipe-controllers/Recipe.controller')

const router = Router()

// recipes
// recipes/?name=''
router.get('/', RecipeController.readRecipes)

// recipes all info
router.get('/addInformation', RecipeController.readRecipesAddInfo)

// recipe/idRecipe
router.get('/:idRecipe', RecipeController.readRecipeByID)

// recipes
router.post('/', RecipeController.createRecipe)

module.exports = router
