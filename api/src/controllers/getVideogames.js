const axios = require("axios");
const { Videogame, Genre } = require("../db");
require("dotenv").config();
const { API_KEY, API_URL } = process.env;

const getVideogames = async function() {
  let gamesData = [];

  for (let i = 1; i < 6; i++) {
    gamesData.push(
      axios.get(`${API_URL}games?key=${DOGS_API_KEY}&page=${i}`)
    );
  }

  return Promise.all(gamesData).then(async (response) => {
    let pages = [];
    let resultado = [];

    for (let i = 0; i < response.length; i++) {
      pages = [...pages, response[i].data.results];
    }

    pages.map((p) => {
      p.forEach((v) => {
        resultado.push({
          id: v.id,
          name: v.name,
          image: v.background_image,
          rating: v.rating.toFixed(2),
          genres: v.genres.map((g) => g.name),
          platforms: v.platforms.map((p) => p.platform.name),
        });
      });
    });

    let db = await Videogame.findAll({
      include:{
        model: Genre,
      }
    })
    return [...resultado, ...db]
  });
}
module.exports = getVideogames;