const express = require('express');
const router = express.Router();
const {getDogs} = require('../controllers/getDogs.js');
const {postDogs} = require('../controllers/postDogs.js');

router.get('/', getDogs);
router.post('/', postDogs);

module.exports = router;