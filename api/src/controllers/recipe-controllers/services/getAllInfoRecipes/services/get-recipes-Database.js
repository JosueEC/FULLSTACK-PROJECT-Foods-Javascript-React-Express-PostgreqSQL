const { Recipe, Diet } = require('../../../../../db')
const { Op } = require('sequelize')

const getRecipesFromDatabase = async (query, value) => {
  let recipes = []
  switch (query) {
    case 'name':
      recipes = await Recipe.findAll({
        where: {
          title: {
            [Op.iLike]: `%${value}%`
          }
        },
        include: {
          model: Diet,
          attributes: ['name'],
          through: {
            attributes: []
          }
        }
      })
      break
    default:
      recipes = await Recipe.findAll({
        include: {
          model: Diet,
          attributes: ['name'],
          through: {
            attributes: []
          }
        }
      })
      break
  }

  const newFormat = formatRecipesDatabase(recipes)
  return newFormat
}

const formatRecipesDatabase = (arrayRecipes) => {
  const formatedRecipes = []
  for (let i = 0; i < arrayRecipes.length; i++) {
    const diets = formatRecipeDiets(arrayRecipes[i].Diets)

    const newFormat = {
      id: arrayRecipes[i].id,
      title: arrayRecipes[i].title,
      image: arrayRecipes[i].image,
      summary: arrayRecipes[i].summary,
      healthScore: arrayRecipes[i].healthScore,
      instructions: arrayRecipes[i].instructions,
      ingredients: arrayRecipes[i].ingredients,
      diets,
      preparationMinutes: arrayRecipes[i].preparationMinutes,
      servings: arrayRecipes[i].servings,
      creditsText: arrayRecipes[i].creditsText
    }
    formatedRecipes.push(newFormat)
  }

  return formatedRecipes
}

const formatRecipeDiets = (arrayDiets) => {
  const newFormat = []

  for (let i = 0; i < arrayDiets.length; i++) {
    newFormat.push(arrayDiets[i].name)
  }

  return newFormat
}

module.exports = {
  getRecipesFromDatabase
}
