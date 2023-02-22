const axios = require("axios");
const { Genre } = require("../db.js");
require("dotenv").config();
const { API_KEY } = process.env;

const getGenres = async function () {
  let gamesData = [];

  const urlData = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );
  urlData.data.results.forEach((v) => {
    gamesData.push({
      id: v.id,
      name: v.name,
    });
  });

  gamesData.forEach((el) => {
    Genre.findOrCreate({
      where: {
        id: el.id,
        name: el.name,
      },
    });
  });
};
module.exports = getGenres;
