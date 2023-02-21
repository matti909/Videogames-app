const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const getApiInfoGenres = require('../api/src/controllers/getGenres.js');

getApiInfoGenres();

conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
