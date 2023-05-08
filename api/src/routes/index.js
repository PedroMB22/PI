const { Router } = require('express');
const router = Router();
// Importa todos los enrutadores
// Ejemplo: const authRouter = require('./auth.js');
const dogsRouter = require('./dogs.js');
const razaRouter = require ('./razaById.js')
const searchByName = require ('./searchByName.js')

// Configura los enrutadores
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogsRouter);
router.use('/dogs', razaRouter);
router.use('/dogs', searchByName);

module.exports = router;
