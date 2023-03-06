const express = require("express");
const router = express.Router();
const getAllVideogamesById = require("../controllers/getById")

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send({ msg: "Falta enviar datos obligatorios" });
  }
  try {
    const byId = await getAllVideogamesById(id);
    return res.status(200).json(byId);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
