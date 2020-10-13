const express = require('express');

const sample = require('./sample');

const router = express.Router();

router.use('/sample', sample);

module.exports = router;