const { Genre } = require("../db.js");
const axios = require("axios");
const { API_KEY } = process.env;

const getApiInfoById = async function (id) {
  try {
    const res = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );
    const gamesData = {
      id: res.data.id,
      name: res.data.name,
      description: res.data.description_raw,
      image: res.data.background_image,
      released: res.data.released,
      rating: res.data.rating,
      platforms: res.data.platforms.map((p) => p.platform.name),
      genres: res.data.genres.map((g) => g.name),
    };

    return gamesData;
  } catch (error) {
    return null;
  }
};

const getDbInfoById = async function (id) {
  try {
    let dbInfo = await Videogame.findOne({
      where: {
        id: id,
      },
      include: {
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    dbInfo = JSON.parse(JSON.stringify(dbInfo));
    dbInfo.genres = dbInfo.genres.map((g) => g.name);

    return dbInfo;
  } catch (error) {
    return null;
  }
};

const getAllVideogamesById = async function (id) {
  if (isNaN(id)) {
    const dbInfoById = await getDbInfoById(id);
    return dbInfoById;
  } else {
    const apiInfoById = await getApiInfoById(id);
    return apiInfoById;
  }
};
module.exports = getAllVideogamesById;
