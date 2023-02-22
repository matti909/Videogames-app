let { Platform } = require("../db");
const createPlatforms = require("../controllers/creatPlatform");
let { Router } = require("express");

const router = Router();

router.get("/", async (req, res) => {
  try {
    let platform1 = await createPlatforms();
    let PlatformsInDB = await Platform.findAll();
    res.json(PlatformsInDB);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});
module.exports = router;
