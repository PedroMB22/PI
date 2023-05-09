const express = require('express');
const router = express.Router();
const {getDogsDB} = require('../controllers/getDogs.js');

router.get('/db', getDogsDB);

module.exports = router;