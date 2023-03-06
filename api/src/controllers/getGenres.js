const axios = require("axios");
const { Genre } = require("../db.js");
require("dotenv").config();
const { API_KEY, API_URL } = process.env;

const getGenres = async function () {
  let gamesData = [];

  const urlData = await axios.get(
    `${API_URL}genres?key=${API_KEY}`
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
