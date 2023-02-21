const { Router } = require('express');
const videogames = require('./videogames.router')
const gamesByid = require('./byId.router')
const genres = require('./genres.router')
const filter = require('./filter')
const platforms = require('./platforms.router')
const post = require('./post.router')

const router = Router();

router.use('/videogames', videogames, gamesByid)

router.use('/genres', genres )

router.use('/filter', filter)

router.use('/platforms', platforms)

router.use('/post', post)

module.exports = router;
