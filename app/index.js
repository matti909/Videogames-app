const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const getGenres = require('../app/src/controllers/getGenres.js');

require('dotenv').config();
const {PORT} = process.env;

//getApiInfoGenres()

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log('%s listening at', PORT);
  });
}).then(getGenres());
