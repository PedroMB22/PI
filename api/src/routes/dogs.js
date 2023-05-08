const express = require('express');
const router = express.Router();
const {getDogs} = require('../controllers/getDogs.js');

router.get('/', getDogs);

module.exports = router;