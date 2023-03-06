var express = require("express");
var router = express.Router();
const { Genre } = require("../db");
const getGenres = require("../controllers/getGenres");

router.get("/", async (_, res) => {
  try {
    const all = getGenres();
    const genres = await Genre.findAll();
    res.json(genres);
  } catch (e) {
    res.status(400).json(e);
  }
});
module.exports = router;