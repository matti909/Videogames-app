const express = require("express");
const router = express.Router();
const getVideogames = require("../controllers/getVideogames.js");

router.get('/', async (req, res) => {
  const genres = req.query.genres;
  const allVideogames = await getVideogames();
  const result = allVideogames.filter((el) => {
    if (genres === "Todos") return allVideogames;
    else if (el.genres) {
      return el.genres.includes(genres);
    }
  });
  res.status(200).json(result);
})
module.exports = router;