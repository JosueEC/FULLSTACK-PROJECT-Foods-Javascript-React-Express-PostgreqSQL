const fetch = require('node-fetch')

const getRecipesFromAPI = async (URL) => {
  const recipes = await fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      return data.results
    })

  return recipes
}

module.exports = {
  getRecipesFromAPI
}
