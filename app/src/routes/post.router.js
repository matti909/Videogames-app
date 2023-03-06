const express = require("express");
const router = express.Router();
const { Videogame, Genre } = require("../db");

router.post("/", async (req, res) => {
  let { name, description, released, rating, genres } = req.body;

  let gameCreated = await Videogame.create({
    name,
    description,
    released,
    rating,
  });

  genres.forEach(async (G) => {
    let genresGame = await Genre.findOne({ where: { name: G } });
    await gameCreated.addGenre(genresGame);
  });
  res.send("Videogame created successfully!");
});
module.exports = router;
