const { Platform } = require("../db");

const createPlatforms = async () => {
  const platform = [
    { name: "PlayStation 5" },
    { name: "PlayStation 4" },
    { name: "PlayStation 3" },
    { name: "Xbox Series S/X" },
    { name: "Xbox 360" },
    { name: "Xbox One" },
    { name: "Linux" },
    { name: "PC" },
    { name: "Nintendo Switch" },
    { name: "macOS" },
    { name: "Android" },
  ];
  await Platform.bulkCreate(platform);
};

module.exports = createPlatforms;