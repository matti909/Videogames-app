const express = require("express");
const getAllVideogames = require("../controllers/getVideogames.js");
const router = express.Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  let totalGames = await getAllVideogames();
  if (name) {
    let searchGame = totalGames.filter((game) =>
      game.name.toLowerCase().includes(name.toLowerCase())
);
      searchGame.length ?
      res.status(200).send(searchGame):
      res.status(404).json({ msg: 'Game not Found 😕' });
  } else {
      res.status(200).json(totalGames);

  }
});
module.exports = router;
