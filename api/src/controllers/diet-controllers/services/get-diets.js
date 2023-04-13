const { Diet } = require('../../../db')

const readRecipesAllInfo = require('../../recipe-controllers/services/read-recipes-all-info')

const getDiets = async () => {
  const dietsInDatabase = await Diet.findAll()
  console.log(dietsInDatabase)

  if (dietsInDatabase.length !== 0) return dietsInDatabase

  const recipes = await readRecipesAllInfo()
  const diets = filterDietsFromRecipes(recipes)

  insertDietsInDatabase(diets)

  return diets
}

const filterDietsFromRecipes = (recipes) => {
  const diets = new Set()

  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes[i].diets.length; j++) {
      diets.add(recipes[i].diets[j])
    }
  }

  const newFormatDiets = getDietsFromSet(diets)

  return newFormatDiets
}

const getDietsFromSet = (dietsSet) => {
  const items = []
  for (const item of dietsSet) {
    items.push(item)
  }

  return items
}

const insertDietsInDatabase = async (diets) => {
  for (let i = 0; i < diets.length; i++) {
    const nameDiet = diets[i]
    await Diet.create({ name: nameDiet })
  }
}

module.exports = getDiets
