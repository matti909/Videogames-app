const { Genre } = require('../db.js');
const axios = require ('axios');
const { API_URL, DOGS_API_KEY } = process.env

const getApiInfoByName = async function (name) {
  let gamesData = [];

  const urlData = await axios.get(
    `https://api.rawg.io/api/games?search=${name}&key=${DOGS_API_KEY}`
  );
  urlData.data.results.forEach((v) => {
    if (gamesData.length < 15) {
      gamesData.push({
        id: v.id,
        name: v.name,
        description: v.description,
        image: v.background_image,
        released: v.released,
        rating: v.rating.toFixed(2),
        /* platforms: Array.isArray(v.platforms)
          ? v.platforms.map((p) => p.platform.name)
          : "Unspecified platform", */
        genres: v.genres.map((g) => g.name),
      });
    }
  });

  return gamesData;
};

const getDbInfoByName = async function (name) {
  let videoGames = await Videogame.findAll({
    where: {
      name: {
        [Op.iLike]: "%" + name + "%",
      },
    },
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  videoGames = JSON.parse(JSON.stringify(videoGames));
  videoGames = videoGames.reverse();

  return videoGames.map((videoGame) => {
    videoGame.genres = videoGame.genres.map((g) => g.name);
    return videoGame;
  });
};

const getAllVideogamesByName = async function (name) {
  const dbResults = await getDbInfoByName(name);
  const apiResults = await getApiInfoByName(name);
  const allResults = dbResults.concat(apiResults);
  return allResults.slice(0, 15);
};

module.exports = getAllVideogamesByName;
