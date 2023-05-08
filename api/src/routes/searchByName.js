const express = require('express');
const router = express.Router();
const {getDogsByName} = require('../controllers/getDogsByName.js');

router.get('/', getDogsByName);

module.exports = router;