const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const postValidate = require('../middlewares/postValidate');
const getAllGames = require('../controllers/getAllGames.js');
const getById = require('../controllers/getById.js');
const getByName = require('../controllers/getByName.js');
const getGenres = require('../controllers/getGenres.js');
const postGame = require('../controllers/postGame.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', getAllGames);
router.get('/videogames/:id', getById);
router.get('/videogame/name', getByName);
router.get('/genres', getGenres);
router.post('/videogames', postValidate, postGame);

module.exports = router;
