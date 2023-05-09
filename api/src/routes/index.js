const { Router } = require('express');
const router = Router();
// Importa todos los enrutadores
// Ejemplo: const authRouter = require('./auth.js');
const dogsRouter = require('./dogs.js');
const razaRouter = require ('./razaById.js')
const searchByNameRouter = require ('./searchByName.js')
const temperamentsRouter = require ('./temperaments.js')
const postDogsRouter = require ('./dogs.js')
const getDogsDBRouter = require ('./dogsDB.js')

// Configura los enrutadores
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogsRouter);
router.use('/dogs', razaRouter);
router.use('/dog', searchByNameRouter);
router.use('/temperaments',temperamentsRouter)
router.use('/dogs', postDogsRouter);
router.use('/dogs', getDogsDBRouter);

module.exports = router;
