const { Recipe } = require('../../../../../db')
const { Op } = require('sequelize')

const getRecipesFromDatabase = async (query, value) => {
  let recipes = []
  switch (query) {
    case 'name':
      recipes = Recipe.findAll({
        where: {
          title: {
            [Op.iLike]: `%${value}%`
          }
        },
        attributes: ['id', 'title', 'image']
      })
      break
    default:
      recipes = await Recipe.findAll({
        attributes: ['id', 'title', 'image']
      })
      break
  }

  return recipes
}

module.exports = {
  getRecipesFromDatabase
}
