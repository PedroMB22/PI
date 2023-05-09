const express = require('express');
const router = express.Router();
const {getTemperaments} = require('../controllers/getTemperaments.js');

router.get('/', getTemperaments);

module.exports = router;