const express = require('express');
const router = express.Router();
const {getRazaById} = require('../controllers/getRazaById.js');

router.get('/:id' , getRazaById)



module.exports = router;